import {getChatGPTUser,chatGPTSignInPath,chatGPTSignOutPath} from '../chatgpt-auth';
import {adminUser} from '../../lib/cms';
import Dashboard from './dashboard';
export const dynamic='force-dynamic';
export default async function Admin(){const user=await getChatGPTUser();if(!user)return <main className="login"><div className="login-card"><span className="brand-tag">FORD MỸ ĐÌNH</span><h1>Quản trị website</h1><p>Đăng nhập bằng tài khoản chủ website để quản lý nội dung và yêu cầu tư vấn.</p><a className="primary" href={chatGPTSignInPath('/admin')} target="_top">Đăng nhập bằng ChatGPT</a><a href="/">Quay về website</a></div></main>;if(!await adminUser())return <main className="login"><div className="login-card"><h1>Tài khoản chưa có quyền quản trị</h1><p>Bạn đang đăng nhập bằng {user.email}.</p><a className="primary" href={chatGPTSignOutPath('/admin')} target="_top">Đăng xuất để đổi tài khoản</a><a href="/">Về website</a></div></main>;return <Dashboard email={user.email}/>}
