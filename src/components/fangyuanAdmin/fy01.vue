<template>
    <div class="fy-table">
      <div class="table-header">
          <div>{{name}}</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650"
        :default-sort = "{prop: 'lc', order: 'descending'}"
         @row-click='rowDetail'
         > 
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="178">
        </el-table-column>
        <el-table-column
          prop="level_name"
          label="楼层"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="room_number"
          label="房号"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="price"
          label="预期单价"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="adorn_type"
          label="装修"
          sortable
          width="178">
          <template  slot-scope="scope">
            <span v-if="scope.row.adorn_type=='0'">
              暂无
            </span>
            <span v-else-if="scope.row.adorn_type=='1'">
              不限
            </span>
             <span v-else-if="scope.row.adorn_type=='2'">
              毛坯
            </span>
             <span v-else-if="scope.row.adorn_type=='3'">
              简装
            </span>
             <span v-else-if="scope.row.adorn_type=='4'">
              精装
            </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位"
          width="178">
            <template slot-scope="scope">
              <span v-if="scope.row.unit=='0'">元/平米</span>
              <span v-else-if="scope.row.unit=='1'">元/平米</span>
              <span v-else-if="scope.row.unit=='2'">元/天 </span>
              <span v-else-if="scope.row.unit=='3'">元/月 </span>
              <div class="fydetails-div">
                <!-- <el-button plain class="fydetails-button" @click.stop="open01()"><i class="el-icon-plus"></i>合同</el-button>
                <htDialog ref="openOrder" v-if="openOrderVisible" :visible.sync="openOrderVisible"></htDialog>
                <el-button plain class="fydetails-button" @click.stop="open02()"><i class="el-icon-plus"></i>编辑房源</el-button>
                <fyDialog ref="openOrder" v-if="openOrderVisible01" :visible.sync="openOrderVisible01"></fyDialog> -->
                <!-- <htDialog></htDialog> -->
              <fydetailsDialog :inputName="scope.row.id"></fydetailsDialog>
              </div>                           
            </template>  
        </el-table-column>
        <el-table-column
          prop="area"
          label="面积"
          sortable>
        </el-table-column>
        <el-table-column
          label="房源标签">
          <template slot-scope="scope">
            <el-tag
              type="primary" plan
              disable-transitions
              v-for="item in scope.row.label" :label="item.id" :key="item.id"
              style="margin-right:10px"
              >
              {{item.name}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <!--  -->
      <!-- 详情 -->
                                 <Drawer :closable="true" v-model="rowDr" width="1000" class="ct">
                                <div slot="header" class="drawer-header">房源详情</div>
                                <div class="xx">
                                    <div class="xx01">
                                        <div class="xx01-top">房源信息</div>
                                        <ul class="xx01-buttom">
                                            <li>
                                                <div>楼宇名称</div>
                                                <div>{{info.name}}</div>
                                            </li>
                                            <li>
                                                <div>楼层</div>
                                                <div>{{info.level_name}}</div>
                                            </li>
                                            <li>
                                                <div>面积</div>
                                                <div>{{info.area}}</div>
                                            </li>
                                            <li>
                                                <div>房号</div>
                                                <div>{{info.room_number}}</div>
                                            </li>
                                            <li>
                                                <div>预期单价</div>
                                                <div>{{info.price}}</div>
                                            </li>
                                            <li>
                                                <div>装修</div>
                                                <div>
                                                  <span v-if="info.adorn_type=='0'">未选</span>
                                                  <span v-else-if="info.adorn_type=='1'">不限</span>
                                                  <span v-else-if="info.adorn_type=='2'">毛坯 </span>
                                                  <span v-else-if="info.adorn_type=='3'">简装</span>
                                                  <span v-else-if="info.adorn_type=='4'">精装</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>单位</div>
                                                <div>
                                                    <span v-if="info.unit=='0'">元/平米</span>
                                                    <span v-else-if="info.unit=='1'">元/平米</span>
                                                    <span v-else-if="info.unit=='2'">元/天 </span>
                                                    <span v-else-if="info.unit=='3'">元/月 </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>房源标签</div>
                                                <div>
                                                <el-tag
                                                type="primary" plan
                                                disable-transitions
                                                v-for="item in info.label" :label="item.id" :key="item.id"
                                                style="margin-right:10px"
                                                >
                                                {{item.name}}</el-tag>
                                                </div>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </Drawer>
    </div>
</template>

<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);
import fydetailsDialog from '@/components/fangyuanAdmin/fydetailsDialog'
import fangyuanAdminVue from '../fangyuanAdmin.vue';
import { roomFy } from '@/axios/api' //获取房源列表
import { roomDetail } from '@/axios/api' //获取房源详情
export default {
  name: 'fy01',
  components:{
   fydetailsDialog
  },
  data () {
    return {
      tableData: [],
      name:'可招商',
      rowDr:false,
      info:[]
    }
  },
  mounted(){
    let that = this;
      // 获取房源列表
         roomFy({                                                 
            }).then(res => {
                if(res.flag == 0){ 
                  // console.log(JSON.stringify(res.data))
                    for (const tabIndex in res.data) {
                      if(res.data[tabIndex].let_type!=1){
                        that.tableData.push(res.data[tabIndex])
                      }
                    }
                } 
            }) 
  },
  methods: {
    // 搜索
     searchCh(info){
      //  info 传过来的参数
       this.tableData = info
     },
    // 打开详情
    rowDetail(row){
      this.rowDr = true;
      // 房源详情
       roomDetail({
            id:row.id                                                 
            }).then(res => {
                if(res.flag == 0){ 

                     this.info=res.data[0]; 
                } 
            }) 
    }
  }
}
</script>
<style>
.fy-table .el-table__row{
  cursor: pointer;
}
.fy-table .el-table__row .fydetails-div{
    display: none;
}
.fy-table .el-table__row:hover .fydetails-div{
    display: block;
}
.fy .fydetails-div{
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
}
.fy .fydetails-div .el-button{
    padding: 6px 10px;
    font-size: 12px;
}
.fy .fydetails-div .el-button:first-child{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.fy .fydetails-div .el-button:last-child{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -5px;
}
.ct .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.ct .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.ct .ivu-drawer-close{
    left: 16px;
} 
.ct .ivu-drawer-body{
    padding: 0;
}
.ct .xx{
    background-color: #f4f4f4;
    width: 100%;
    height: calc(100% - 51px);
    box-sizing: border-box;
    padding: 20px;
}
.ct .xx .xx01{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}
.ct .xx .xx01 .xx01-top{
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.ct .xx .xx01 .xx01-buttom{
    padding: 20px;
    overflow: hidden;
}
.ct .xx .xx01 .xx01-buttom li{
    width: 25%;
    float: left;
    padding: 0 10px 7px 0;
    margin-bottom: 24px;
    margin: 5px 0;
}
.ct .xx .xx01 .xx01-buttom li div:first-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.ct .xx .xx01 .xx01-buttom li div:last-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}
</style>


