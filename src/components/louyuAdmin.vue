<template>
    <div class="main-Box">
        <div class="Box-top">
            <div class="demo-input-suffix">
                <el-input 
                    placeholder="搜索楼宇名称"
                    v-model="input21"
                    class="ly-input"
                    @keyup.enter.native="search"
                >
                    <template slot="prepend" style="background-color:none;border:none">
                        <i class="el-icon-search" @click="search"></i>
                    </template>
                </el-input>
                <Lydialog></Lydialog>
            </div>
            <div class="ly-content">
                <lyMsg ref="childrenNode"></lyMsg>
                <!-- <sjpzdialog></sjpzdialog>            -->
            </div>          
        </div>
        <div class="Box-bottom">
            <div class="table-header">
                <div v-html="tagName"></div>
                <i class="el-icon-more"></i>
            </div>
            <el-table
                :data="items"
                style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
                :default-sort = "{prop: 'date', order: 'descending'}"
                height="650"
                v-loading="loading"
                element-loading-text="搜索中"
                @row-click="skip">
                <el-table-column 
                prop="name"
                label="楼宇名称"
                width="336">
                <template slot-scope="scope">
                    <div class="lymc">
                        <div class="lymc-left">                           
                            <img :src="scope.row.images">
                        </div>
                        <div class="lymc-right">
                            <div class="lymc-rigth01">{{scope.row.name}}</div>
                            <div class="lymc-rigth02">{{scope.row.c_name}}</div>
                        </div>
                    </div>                   
                </template>
                </el-table-column>
                <el-table-column
                prop="count_price"
                label="在租均价"
                sortable
                width="201">
                </el-table-column>
                <el-table-column
                prop="count_busin"
                label="可招商数量"
                sortable
                width="188">
                </el-table-column>
                <el-table-column
                prop="count_rent"
                label="在租数量"
                sortable
                width="224">
                </el-table-column>
                <el-table-column
                prop="count_pact"
                label="再租合同份数"
                sortable
                width="188">
                </el-table-column>  
                <el-table-column
                prop="c_name"
                label="城市"
                sortable
                width="278">
                <template slot-scope="scope">
                    {{scope.row.c_name}}
                    <sxly :inputName="scope.row.id"></sxly>                                  
                </template>  
                </el-table-column>
                <el-table-column
                prop="p_name"
                label="省份"
                sortable
                width="208">
                </el-table-column>          
            </el-table>
        </div>       
        <!--楼宇详情 -->
      
    </div>
</template>
<script>
// import Vue from 'vue'
// import { Drawer } from 'iview';
// Vue.component('Drawer', Drawer);
import Lydialog from '@/components/louyuAdmin/Dialog'
import sjpzdialog from '@/components/louyuAdmin/Dialogsjpz'
import lyMsg from '@/components/zhlyMsg/lyMsg'
import sxly from '@/components/louyuAdmin/sxly'
import bjDialog from '@/components/louyuAdmin/bjDialog'
import { getList} from '@/axios/api' //获取楼宇列表
import { Lysearch } from '@/axios/api' //楼宇搜索
import { Lycheck } from '@/axios/api' //左侧单选
import { Lycheckgroup } from '@/axios/api' //左侧多选
export default {
    name:'louyuAdmin',
    inject: ['reload'],
    components:{
        Lydialog,sjpzdialog,lyMsg,sxly,bjDialog
    },
    data(){
        return{
            input21: '',
            activeIndex: '1',
            items: [] ,
            tagName:'楼宇列表',
            loading: false,
            getList:'',
        }
    },
        computed: {
            Itime () {
                return this.$store.state.items  
            }
        },
        mounted(){
            let that = this
          let userInfo = JSON.parse(sessionStorage.getItem('user'));
            // 左侧选择，右侧渲染
         that.getList = function(){
        var typelen = 0;
             getList({                                                  
            }).then(res => {
                if(res.flag == 0){  
                 that.items=[];
                for (const key in res.data) {
                  if(res.data[key].type==1){
                    that.items.push(res.data[key])
                  }else{
                    
                    if(res.data[key].type==0){
                       typelen++ 
                    }
                  }
                }
                // 如果type为0的长度等于json的总长度。（及无选中状态）
                 if(typelen == res.data.length){
                    that.items =res.data
                 }
                } 
            }) 
         }
         that.getList()
        },
    methods:{
        // 点击左侧，右侧渲染。单选
        Lyitems(info){
             Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                     this.getList() 
                     this.$refs.childrenNode.lycensus();
                } 
            }) 
        },
        // 多选
        sayNode(arrId) {
        var str = arrId;
        var arr = str.split(",");// 在每个逗号(,)处进行分解。
          Lycheckgroup({      
            id:arr                                           
            }).then(res => {
                if(res.flag == 0){  
                    this.getList();
                    this.$refs.childrenNode.lycensus();
                } 
            }) 
        },
        // 取消楼宇单个
        delectItems(info){
            Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                    this.getList()
                    this.$refs.childrenNode.lycensus();
                } 
            }) 
        },
        // 楼宇搜索
        search(){
        this.loading = true
        Lysearch({   
            name: this.input21                                              
            }).then(res => {
              
                if(res.flag == 0){  
                this.loading = false
                 this.items = res.data
                }else{
                this.loading = false
                this.$message.error(res.msg)
                this.getList()
                } 
            }) 
        },
        skip(row){
            this.$router.push({
             path: "/lydetails",
             query: {
                id: row.id
              }
            });
               // 获取楼宇详情
          //  getList({                    
          //       id: row.id,                              
          //   }).then(res => {
          //       if(res.flag == 0){  
          //           console.log(JSON.stringify(res))
          //           this.info = res.data[0];
          //       } 
          //   }) 

        },
    }
}
</script>

<style>
.Box-top{
    background-color: #fff;
}
.Box-top .el-input-group__prepend{
    background: none !important;
    border: none;
    cursor: pointer;
}
.demo-input-suffix{
    border-bottom: 1px solid #edf0f2;
    overflow: hidden;
}
.ly-input{
    width: calc(100% - 490px);
    float: left;
}
.ly-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
 
}
.ly-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
.ly-button{
    float: right;
    font-size: 14px;
    text-align: center;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 10px;
    margin-right: 20px;
    padding: 0 15px;
    height: 28px;
}
.ly-content{
    display: inline-block;
    position: relative;
}
.Box-top .sjpz{
    position: absolute;
    right: 14px;
    top: 22px;
}
.Box-bottom{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.Box-bottom .table-header{
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
.Box-bottom .table-header i{
    font-size: 16px;
}
.Box-bottom .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0;
    padding: 0;
}
.Box-bottom .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.Box-bottom .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #6b809f;
    font-size: 14px;
    height: 65px;
}
.Box-bottom .el-table tbody tr td{
    padding: 14px 0;
    border-bottom: 1px solid #e0e0e0;
}
.Box-bottom .el-table tbody tr td .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.lymc-left{
    float: left;
    width: 53px;
    height: 36px;
    background-size: 100% 100%;
}
.lymc-left img{
    width: 100%;
    height: 36px;
    margin: 0px;
    border: 0;
}
.lymc-right{
    width: calc(100% - 64px);
    float: left;
    margin-left: 10px;
    font-size: 14px;
    color: #353b4b;
    text-align: left;
}
.lymc-rigth01{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #353b4b;
    font-weight: 500;
    height: 21px;
    line-height: 21px;
}
.lymc-rigth02{
    font-size: 12px;
    color: #9fa1a8;
    height: 18px;
    line-height: 18px;
}
.Box-bottom .el-table__row{
    cursor: pointer;
}
/* 抽屉 */
.lyDrawer .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.lyDrawer .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.lyDrawer .ivu-drawer-close{
    left: 16px;
} 
.lyDrawerDrawer .ivu-drawer-body{
    padding: 0;
}
.lyDrawer .content{
    height: 100%;
}
.lyDrawer .content .info{
  background-color: #fff;
  border-bottom: 1px solid rgb(234, 235, 236);
}
.lyDrawer .content .info .info-top{
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.lyDrawer .content .info .info-top .info-msg span{
  color: #4494f0;
  font-size: 24px;
}
.lyDrawer .content .info .info-top .info-cz{
  display: flex;
}
.lyDrawer .content .info .info-top .info-cz li{
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828692;
  cursor: pointer;
}
.lyDrawer .content .info .info-top .info-cz li i{
  margin-right: 5px;
  margin-left: 20px;
  font-size: 20px;
}
.lyDrawer .content .info .info-bottom{
  overflow: hidden;
}
.lyDrawer .content .info .info-bottom .info-bottom-left{
  float: left;
  width: 62%;
  margin: 20px;
}
.lyDrawer .content .info .info-bottom .info-bottom-left .ztmsg{
  width: 45%;
  border-right: 1px solid #edeef0;
} 
.lyDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.lyDrawer .content .info .info-bottom .info-bottom-left .ztmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
} 
.lyDrawer .content .info .info-bottom .info-bottom-right{
  display: flex;
  align-items: center;
  height: 98px;
}
.lyDrawer .content .info .info-bottom .info-bottom-right .slmsg{
  margin: 20px;
}
.lyDrawer .content .info .info-bottom .info-bottom-right .slborder div{
  border-right: 1px solid #edeef0;
} 
.lyDrawer .content .info .info-bottom .info-bottom-right .slmsg div:first-child{
  padding-right: 10px;
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  line-height: 18px;
  color: #7085a1;
} 
.lyDrawer .content .info .info-bottom .info-bottom-right .slmsg div:last-child{
  padding-right: 10px;
  width: 100%;
  font-size: 24px;
  color: #353b4b;
}  
.lyDrawer .content .info .info-bottom .info-bottom-right{
  float: right;
  width: 30%;
  display: flex;
  justify-content: flex-end;
} 
.lyDrawer .content .blockmsg{
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
.lyDrawer .content .blockmsg .msg{
  margin-bottom: 20px;
  width: calc(50% - 10px);
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.lyDrawer .content .blockmsg .msg .msg-header{
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
.lyDrawer .content .blockmsg .msg .msg-body{
  padding: 20px;
  overflow: auto;
  height: 452px;
  box-sizing: border-box;
}
/* 第一个板块 */
.lyDrawer .content .blockmsg .msg .msg-bodys{
  width: calc(50% - 10px);
  float: left;
  padding: 0 10px 7px 0;
  min-height: 50px;
  font-size: 12px;
  color: #6b809f;
  margin: 5px 0;
}
.lyDrawer .content .blockmsg .msg .msg-bodys .msg-content{
  padding-right: 10px;
  width: 100%;
  border-right: 1px solid rgb(224, 224, 224);
}
.lyDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-top{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  line-height: 18px;
}
.lyDrawer .content .blockmsg .msg .msg-bodys .msg-content .msg-content-bottom{
  width: 100%;
  color: #353b4b;
  font-size: 14px;
}
.lyDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child{
  width: 100%;
}
.lyDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child{
  width: 100%;
}
.lyDrawer .content .blockmsg .msg .msg-width .msg-bodys:first-child .msg-content{
  border-right: 0;
}
.lyDrawer .content .blockmsg .msg .msg-width .msg-bodys:last-child .msg-content{
  border-right: 0;
}
.lyDrawer .content .blockmsg .msg .msg-bodys:nth-child(odd) .msg-content{
  border-right: 0;
}

</style>
