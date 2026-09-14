import {config} from './config.js';
export const configured=Boolean(config.supabaseUrl&&config.supabasePublishableKey);
export let client=null,user=null,recovery=false,initError='';
export async function initCloud(){
 if(!configured)return;
 try{
  const {createClient}=await import('https://esm.sh/@supabase/supabase-js@2.57.4');
  client=createClient(config.supabaseUrl,config.supabasePublishableKey);
  client.auth.onAuthStateChange((event)=>{if(event==='PASSWORD_RECOVERY'){recovery=true;window.dispatchEvent(new Event('password-recovery'));}});
  const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user||null;
 }catch{initError='Chưa kết nối được tài khoản. Kiểm tra mạng rồi tải lại trang.';}
}
export function friendly(error){const text=String(error?.message||'');if(/invalid login/i.test(text))return 'Email hoặc mật khẩu chưa đúng.';if(/email not confirmed/i.test(text))return 'Hãy xác nhận email trước khi đăng nhập.';if(/rate limit|too many/i.test(text))return 'Có quá nhiều yêu cầu. Vui lòng thử lại sau.';return 'Chưa thực hiện được. Kiểm tra kết nối và thử lại.';}
export async function fetchProgress(){const {data,error}=await client.from('learning_progress').select('payload,revision').eq('user_id',user.id).maybeSingle();if(error)throw error;return data;}
export async function pushProgress(payload,revision){const {data,error}=await client.rpc('save_learning_progress',{expected_revision:revision,new_payload:payload});if(error)throw error;return data;}
