-- Run once in the project's SQL editor. No public data access.
create table if not exists public.learning_progress (
 user_id uuid primary key references auth.users(id) on delete cascade,
 payload jsonb not null check (jsonb_typeof(payload) = 'object'),
 revision bigint not null default 1,
 updated_at timestamptz not null default now()
);
alter table public.learning_progress enable row level security;
revoke all on public.learning_progress from anon;
grant select, insert, update on public.learning_progress to authenticated;
drop policy if exists own_progress on public.learning_progress;
create policy own_progress on public.learning_progress for all to authenticated
 using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
-- Compare-and-swap: stale devices never silently overwrite a newer result.
create or replace function public.save_learning_progress(expected_revision bigint,new_payload jsonb)
returns bigint language plpgsql security invoker set search_path = '' as $$
declare next_revision bigint;
begin
 if auth.uid() is null then raise exception 'authentication_required'; end if;
 if octet_length(new_payload::text) > 2000000 then raise exception 'payload_too_large'; end if;
 if expected_revision = 0 then
  insert into public.learning_progress(user_id,payload,revision)
  values(auth.uid(),new_payload,1) on conflict do nothing returning revision into next_revision;
 else
  update public.learning_progress set payload=new_payload,revision=revision+1,updated_at=now()
  where user_id=auth.uid() and revision=expected_revision returning revision into next_revision;
 end if;
 if next_revision is null then raise exception 'sync_conflict'; end if;
 return next_revision;
end; $$;
revoke all on function public.save_learning_progress(bigint,jsonb) from public,anon;
grant execute on function public.save_learning_progress(bigint,jsonb) to authenticated;
