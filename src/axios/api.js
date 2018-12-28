
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
export const getList = params => get ('/builadmin/buil/list',params)  //获取楼宇列表
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
export const editLy = params => post ('/builadmin/buil/edit',params) //编辑楼宇
export const buildlevelList = params => get ('/builadmin/buildlevel/list',params) //路层列表
export const buildEdit = params => post ('/builadmin/buildlevel/edit',params) //编辑楼层列表 
export const buildsetDetail = params => get('/builadmin/buildset/list',params) //获取默认设置详情
export const buildsetEdit = params => post ('/builadmin/buildset/edit',params) //编辑默认设置
export const roomFy = params => get ('/builadmin/room/list?type=1',params) //房源列表
export const roomAdd = params => post ('/builadmin/room/index', params) //增加房源
export const roomTip = params => get ('/builadmin/roomlabel/list',params) //获取房源标签
export const roomDetail = params => get ('/builadmin/room/detail',params) //房源详情
export const roomEdit = params => post ('http://dev.xibei.co/builadmin/room/edit',params) //编辑房源
export const clientstatusList = params => get ('/builadmin/clientstatus/list',params)//获取客户状态
export const channels = params => get ('/builadmin/channels/list',params)//获取客户来访渠道列表
export const industrylet = params => get ('/builadmin/industrylet/list',params) //行业
export const client = params => post ('/builadmin/client/index',params) //添加客户
export const broker = params => get ('/builadmin/broker/list',params) //经纪人列表
export const Addbroker = params => post ('/builadmin/broker/index',params) //添加经纪人
export const clientList = params => get ('/builadmin/client/list',params) //客户列表
export const delectClient = params => get ('/builadmin/client/editstatus',params) //删除客户
export const editClisent = params => post('/builadmin/client/edit',params) //编辑客户
//租客模块
export const tenants = params => post ('/builadmin/customer/index?a=add',params) //新建租客
export const industry = params => post ('/builadmin/customer/industry?a=getlist',params) //请求行业分类
export const customertags = params => get ('/builadmin/customer/label?a=getlist',params) //获取客户标签
export const getonecustomer = params => post ('/builadmin/customer/index?a=getone',params) //编辑租客详情
export const editcustomer = params => post ('/builadmin/customer/index?a=edit',params) //再次编辑租客详情对话框
//合同模块
export const buildinglist = params => get ('/builadmin/buil/list',params) //合同对话框楼宇列表
export const housinglist = params => get ('/builadmin/room/list',params) //合同对话框房源列表
export const addcontract = params => post ('/builadmin/contract/index?a=add',params) //添加合同
export const obtaintenant = params => get ('/builadmin/customer/index?a=list',params) //获取租客
export const accessindustry = params => get ('/builadmin/customer/industry?a=list',params) //获取行业
export const obtaincontractlabel = params => get ('/builadmin/contract/label?a=getlist',params) //获取合同标签
export const contractlist = params => get ('/builadmin/contract/index?a=getlist',params) //获取合同列表
export const contractdetails = params => post ('/builadmin/contract/index?a=getone',params) //获取合同详情
export const editcontract = params => post ('/builadmin/contract/index?a=edit',params) //编辑合同
//个人中心
export const addadmin = params => post ('/builadmin/ucenter/index?a=add',params) //添加管理员
export const Getadministratorlist = params => post ('/builadmin/ucenter/index?a=getlist',params) //获取管理员列表
export const Modifyadministratorstatus = params => post ('/builadmin/ucenter/index?a=save',params) //修改管理员状态
export const Housesourcelabeladded = params => post ('/builadmin/roomlabel/index',params) //房源标签添加
export const Listhousesourcelabels = params => get ('/builadmin/roomlabel/list',params) //房源标签列表
export const Removehousesourcelabel = params => get ('/builadmin/roomlabel/edit',params) //删除房源标签
export const Addcontractlabel = params => post ('/builadmin/contract/label?a=add',params) //添加合同标签
export const Getslistcontracttags = params => get ('/builadmin/contract/label?a=getlist',params) //获取合同标签列表
export const Deletecontractlabel = params => post ('/builadmin/contract/label?a=del',params) //删除合同标签
export const Editcontractlabel = params => post ('/builadmin/contract/label?a=edit',params) //编辑合同标签
export const Feetypeaddition = params => post ('/builadmin/costtype/index',params) //费用类型添加
export const Listfeetypes = params => post ('/builadmin/costtype/list',params) //费用类型列表
export const Expensedeletion = params => get ('/builadmin/costtype/delete',params) //费用类型删除
export const Typeedit = params => post ('/builadmin/costtype/edit',params) //类型编辑编辑
export const Addtenantlabel = params => post ('/builadmin/customer/label?a=add',params) //添加租客标签
export const Listtenantlabels = params => get ('/builadmin/customer/label?a=getlist',params) //租客标签列表
export const Removetenantlabel = params => post ('/builadmin/customer/label?a=del',params) //删除租客标签
export const EdittenantTAB = params => post ('/builadmin/customer/label?a=edit',params) //编辑租客标签
export const Addtenantindustry = params => post ('/builadmin/customer/industry?a=add',params) //添加租客行业
export const Acquiretenantindustry = params => post ('/builadmin/customer/industry?a=getlist',params) //获取租客行业
export const Deletetenantindustry = params => post ('/builadmin/customer/industry?a=del',params) //删除租客行业
export const Edittenantindustry = params => post ('/builadmin/customer/industry?a=edit',params) //编辑租客行业
export const Getwordlist = params => get ('/builadmin/ucenter/word?a=getlist',params) //获取word列表
export const Deletewordlist = params => post ('/builadmin/ucenter/word?a=del',params) //删除word列表