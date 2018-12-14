
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
export const itemAgg = params => get ('/builadmin/buildgather/list',params) //楼宇集合列表
export const setAdd = params => post ('/builadmin/buildgather/index',params) // 添加楼宇集合
export const delectSet = params => post ('/builadmin/buildgather/delete',params) //删除楼宇集合
export const editSet = params => post ('/builadmin/buildgather/edit',params) //编辑楼宇集合
export const CustomerList = params => get ('/builadmin/client/list',params) //客户列表
export const channel = params => get ('/builadmin/channels/list',params) //客户来访渠道列表
export const zkList = params => post ('/builadmin/customer/index?a=getlist',params) //租客列表
export const province = params => get ('/builadmin/buil/city?type=province',params) //获取省
export const city = params => get ('/builadmin/buil/city?type=city',params) //获取市
export const area = params => get ('/builadmin/buil/city?type=area',params) //获取区县
export const creatLy = params => post ('/builadmin/buil/index',params) //创建楼宇
export const buildType = params => get ('/builadmin/buildtype/list',params) //获取楼宇类型
export const buildlevel = params => post ('/builadmin/buildlevel/index',params) //添加楼层
export const costtype = params => get ('/builadmin/costtype/list',params) //通用费用类型列表
export const goodsname = params => get ('/builadmin/goodsname/list',params) //货物名称
export const buildset = params =>post ('/builadmin/buildset/index',params) //默认设置
export const receiptrule = params => get ('/builadmin/receiptrule/list',params) //收据编号规格
export const monthly = params => get ('/builadmin/goodsname/monthly',params) //生成月收入目标