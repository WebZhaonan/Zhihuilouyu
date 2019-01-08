<template>
    <div class="zs-table">
      <div class="table-header">
          <div>客户管理</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        @row-click='rowDetail'
       >
        <el-table-column
          prop="name"
          label="客户"
          width="289">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.name }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">跟进人:{{ scope.row.linkman }}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="visittime"
          label="来访时间"
          sortable
          width="194">
           <template slot-scope="scope">
            <span>
              {{ scope.row.visittime | dateformat('YYYY-MM-DD HH:mm:ss')}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="最新备注"
          sortable
          width="250">
        </el-table-column>
        <el-table-column
          prop="s_name"
          label="客户状态"
          sortable
          width="194">
          <template slot-scope="scope">
            <span>{{scope.row.s_name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="c_name"
          label="渠道"
          width="194">
        </el-table-column>
        <el-table-column
          prop="xqmjd"
          label="需求面积段"
          width="195">
           <template slot-scope="scope">
            <span>{{scope.row.need_min}}/平米</span>
            <span>-</span>
            <span>{{scope.row.need_max}}/平米</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="i_name"
          label="行业"
          width="194">
        </el-table-column>
        <el-table-column
          prop="signtime"
          label="预计签约时间"
          width="194">
            <template slot-scope="scope">
            <span>
              {{ scope.row.signtime | dateformat('YYYY-MM-DD HH:mm:ss')}}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="linkman"
          label="跟进人"
          width="195">
        </el-table-column>
      </el-table>
                  <!--客户详情 -->
      <Drawer :closable="true" width="1000" class="zsOneDrawer" v-model="rowDr">
        <div slot="header" class="drawer-header">客户详情</div>
        <div class="content">
            <div class="info">
              <div class="info-top">
                <div class="info-msg">
                  <span>{{info.name}}</span>
                </div>
                <ul class="info-cz">
                  <li>                 
                    <el-tooltip class="item" effect="dark" content="跟进人" placement="bottom">
                     <div><i class="fa fa-user-o"></i><span>{{info.linkman}}</span></div>
                    </el-tooltip>
                  </li>
                  <li @click="zsOnetablebj = true;">
                    <i class="fa fa-pencil"></i><span>编辑</span>
                    <zsOneDialogs v-if="zsOnetablebj" :visible.sync="zsOnetablebj" :rowId ='info.id'></zsOneDialogs> 
                  </li>
                  <li @click="deleteDialog = true">
                    <i class="el-icon-delete"></i><span>删除</span>
                    <el-dialog
                      :visible.sync="deleteDialog"
                      width="400px"
                      :modal="false"
                      center
                      :append-to-body="true"
                      class="zsOneDrawer-dialog">
                      <div class="zsOneDrawer-dialog-div">
                          <i class="el-icon-warning"></i>
                          <p>确定要删除该客户吗？</p>
                      </div>
                      <span slot="footer" class="dialog-footer">
                          <el-button type="primary" @click="affirm(info.id)">确 定</el-button>
                          <el-button type="info" style="margin-left:20px;" @click="cancel">取 消</el-button>
                      </span>
                    </el-dialog>
                  </li>
                </ul>
              </div>
              <div class="info-bottom">
                <div class="info-bottom-left">
                  <div class="ztmsg">
                    <div>客户状态</div>
                    <div>
                      <span>{{info.s_name}}</span>
                    </div>
                  </div>     
                </div>
                <div class="info-bottom-right">
                  <div class="slmsg slborder">
                    <div>成交几率</div>
                    <div>{{info.probability}}%</div>
                  </div>
                  <div class="slmsg">
                    <div>需求数量/m2</div>
                    <div>{{info.need_min}}-{{info.need_max}}</div>
                  </div> 
                </div>
              </div>
            </div>
            <div class="blockmsg">          
              <div class="msg" style="width:100%">
                <div class="msg-header">客户信息</div>
                <div class="msg-body msg-width">
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">客户联系人</div>
                      <div class="msg-content-bottom">{{info.linkman}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">渠道联系人</div>
                      <div class="msg-content-bottom">{{info.b_name}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">城市/区域/商圈</div>
                      <div class="msg-content-bottom">{{info.region}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">期望价格</div>
                      <div class="msg-content-bottom">
                        {{info.price_min}}-{{info.price_max}}
                        <span v-if="info.unit=='0'">
                            元/㎡·天
                        </span>
                        <span v-else-if="info.unit=='1'">
                          元/㎡·月
                        </span>
                         <span v-else-if="info.unit=='2'">
                          元/天
                        </span>
                         <span v-else-if="info.unit=='3'">
                          元/月
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">行业</div>
                      <div class="msg-content-bottom">{{info.i_name}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">备注</div>
                      <div class="msg-content-bottom">{{info.remark}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">当前地址</div>
                      <div class="msg-content-bottom">{{info.user_address}}</div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">当前合同到期日</div>
                      <div class="msg-content-bottom">
                        {{ info.user_time | dateformat('YYYY-MM-DD HH:mm:ss')}}
                        </div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">当前租赁数</div>
                      <div class="msg-content-bottom">
                        {{info.rent_num}}
                      </div>
                    </div>
                  </div>
                  <div class="msg-bodys">
                    <div class="msg-content">
                      <div class="msg-content-top">当前租金</div>
                      <div class="msg-content-bottom">
                        {{info.user_money}}
                         <span v-if="info.user_unit=='0'">
                           元/㎡·天
                        </span>
                        <span v-else-if="info.user_unit=='1'">
                          元/㎡·月
                        </span>
                         <span v-else-if="info.user_unit=='2'">
                          元/天
                        </span>
                         <span v-else-if="info.user_unit=='3'">
                          元/月
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="msg">
                <div class="msg-header">房源信息</div>
                <div class="msg-body">
                  <div class="fyxx-top">
                      <div class="fyxximg"></div>
                      <div class="fyxxtxt">
                        <div>文创集团</div>
                        <div>杭州市/滨江区</div>
                      </div>
                  </div>
                  <div class="fyxx-top fyxx-bottom">
                      <div class="fyxxheader">
                        <span>楼层/房号</span>
                        <span>面积</span>
                      </div>
                      <div class="fyxxbody">
                        <span style="color: #4494f0;">7层 701-1室</span>
                        <span>150.00m2</span>
                      </div>
                  </div>
                </div>
              </div> -->
            
          </div>
        </div>
      </Drawer>
    </div>
</template>
<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);
import { clientList } from '@/axios/api'  // 客户列表
import { delectClient } from '@/axios/api' //删除客户
import zsOneDialogs from '@/components/zhaoshangAdmin/zsOneDialogs'
export default {
    name: 'zsOnetable',
    inject: ['reload'],
    components:{
    zsOneDialogs
  },
    data(){
        return{
           rowDr:false,
            tableData: [
            ],
            info:[],
             deleteDialog: false,
              zsOnetablebj: false,   
        }
    },
    created(){
         let that = this;
             clientList({   
              //  id:userInfo.id                                             
            }).then(res => {
                if(res.flag == 0){
                   that.tableData=res.data;
                } 
            })
    },
     methods: {
    // 打开详情
    rowDetail(row){
      this.rowDr = true;
      // 房源详情
          clientList({   
               id:row.id                                            
            }).then(res => {
                if(res.flag == 0){
                   this.info=res.data[0];
                } 
            })
    },
    affirm(rowId){
        // 删除客户
          delectClient({   
               id:rowId                                          
            }).then(res => {
                if(res.flag == 0){
                 this.deleteDialog=!this.deleteDialog;
                 this.$message({
                  showClose: true,
                  message: '删除成功',
                  type: 'success'
                });
                this.reload()
                } 
            })
    },
    cancel(){
      this.deleteDialog=!this.deleteDialog;
    },
  }
}
</script>
<style>
.zs-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.zs-table .table-header{
    font-size: 14px;
    height: 50px;
    background: #fff;
    padding: 0 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-bottom: 0px;
}
.zs-table .table-header i{
    font-size: 16px;
}
.zs-table .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.zs-table .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.zs-table .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.zs-table .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.zs-table .el-table tbody tr td .cell{
    padding: 0 20px;
}
/* 抽屉 */
.zsOneDrawer .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.zsOneDrawer .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.zsOneDrawer .ivu-drawer-close{
    left: 16px;
} 
.zsOneDrawer .ivu-drawer-body{
    padding: 0;
}
.zsOneDrawer .content{
    height: 100%;
}
.zsOneDrawer .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.zsOneDrawer .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.zsOneDrawer .content .info .info-top .info-msg span{
  color: #4494f0;
  font-size: 24px;
}
.zsOneDrawer .content .info .info-top .info-cz{
  display: flex;
}
.zsOneDrawer .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.zsOneDrawer .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.zsOneDrawer .content .info .info-bottom{
  overflow: hidden;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-left{
  float: left;
  width: 66%;
  margin: 20px;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg{
  width: 45%;
  border-right: 1px solid #edeef0;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right{
  display: flex;
  align-items: center;
  height: 98px;
}
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg{
  margin: 20px;
}  
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slborder div{
  border-right: 1px solid #edeef0;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.zsOneDrawer .content .info .info-bottom .info-bottom-right .slmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
}  
.zsOneDrawer .content .info .info-bottom .info-bottom-right{
  float: right;
  width: 30%;
  display: flex;
  justify-content: flex-end;
} 

.zsOneDrawer .content .blockmsg{
  background: #f4f4f4;
  height: calc(100% - 155px);
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
}
.zsOneDrawer .content .blockmsg .msg{
  margin-bottom: 20px;
  width: calc(50% - 10px);
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.zsOneDrawer .content .blockmsg .msg .msg-header{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  font-weight: 500;
  color: #1a2838;
}
.zsOneDrawer .content .blockmsg .msg .msg-body{
  padding: 20px;
  overflow: auto;
  height: 452px;
  box-sizing: border-box;
}
/* 第一个板块 */
.zsOneDrawer .content .blockmsg .msg .msg-bodys{
  width: calc(50% - 10px);
  float: left;
  padding: 0 10px 7px 0;
  min-height: 50px;
  font-size: 12px;
  color: #6b809f;
  margin: 5px 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content{
  padding-right: 10px;
  width: 100%;
  border-right: 1px solid rgb(224, 224, 224);
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-top{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-bottom{
  width: 100%;
  color: #353b4b;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child{
  width: 100%;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child{
  width: 100%;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .msg-bodys:nth-child(odd) .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top{
  width: 100%;
  float: left;
  padding: 0 10px 7px 0;
  min-height: 36px;
  font-size: 12px;
  color: #6b809f;
  margin: 5px 0;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxximg{
  background-image: url(../../assets/login.jpg);
  width: 54px;
  height: 36px;
  display: inline-block;
  margin-right: 12px;
  background-size: 100% 100%;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt{
  width: calc(100% - 70px);
  display: inline-block;
  padding-right: 10px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt div:first-child{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-top .fyxxtxt div:first-child{
  width: 100%;
  color: #353b4b;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-bottom .fyxxheader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.zsOneDrawer .content .blockmsg .msg .fyxx-bottom .fyxxbody{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(230, 232, 235);
  padding: 10px 0px;
  font-size: 14px;
}
.zsOneDrawer .content .blockmsg .msg .khxx .msg-bodys .msg-content{
  border-right: 0;
}
.zsOneDrawer .content .blockmsg .msg .khxx .msg-bodys:nth-child(odd) .msg-content{
  border-right: 1px solid rgb(224, 224, 224);
}
    

.zsOneDrawer-dialog .zsOneDrawer-dialog-div{
    text-align: center;
}
.zsOneDrawer-dialog .zsOneDrawer-dialog-div i{ 
    font-size: 84px;
}
.zsOneDrawer-dialog .zsOneDrawer-dialog-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.zsOneDrawer-dialog .el-button{
    padding: 8px 42px;
}
</style>



