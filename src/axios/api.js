
/**   
 * api接口统一管理
 */
import { get, post } from './http'
export const Islogin = params => post ('/builadmin/index/verifylogin',params); //登录拦截
export const Login = params=> post('/builadmin/index/login', params); //登录接口
export const Sms = params => post('/builadmin/index/sms',params);//短信接口
export const Regist = params => get ('/builadmin/index/regist',params) //注册接口
export const forget = params => post ('/builadmin/index/forgotpw',params) //忘记密码
export const logout = params => post ('/builadmin/index/logout',params) //退出登录
export const getList = params => post ('/builadmin/buil/list',params)  //获取楼宇列表
export const itemType = params => get ('/builadmin/buildtype/list',params)