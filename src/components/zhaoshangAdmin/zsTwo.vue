<template>
<div>
  <div class="zsTwo">
    <el-input
      placeholder="搜索房号"
      prefix-icon="el-icon-search">
    </el-input>
    <div class="xzdl">
    </div>
    <div class="wdqd">
      <ul>
        <li v-for="(item,i) in wdqd" :key="i">
          <div class="wdqd-content">
            <div>{{item.name}}</div>
            <div>{{item.sl}}</div>
          </div>
        </li>
      </ul>
    </div>  
  </div>
  <div class="zs-table">
    <div class="table-header">
        <div>可招商</div>
        <i class="el-icon-more"></i>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
      height="650"
      :default-sort = "{prop: 'lc', order: 'descending'}">
      <el-table-column
        prop="name"
        label="联系人"
        width="262">
      </el-table-column>
      <el-table-column
        prop="lxfs"
        label="联系方式"
        sortable
        width="291">
      </el-table-column>
      <el-table-column
        prop="sq"
        label="商圈"
        sortable
        width="262">
      </el-table-column>
      <el-table-column
        prop="name"
        label="渠道类型"
        sortable
        width="262">
      </el-table-column>
      <el-table-column
        prop=""
        label="带看量"
        width="262">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="最新带看时间"
        sortable
        width="264">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import { channel } from '@/axios/api' //客户来访渠道列表
export default {
  name: 'zsTwo',
  data () {
    return {
      value6: '',
      wdqd:[
        {name:"自由经纪人",sl:"2"},
        {name:"公司经纪人",sl:"0"},
        {name:"老客户介绍",sl:"0"},
        {name:"政府关系",sl:"0"},
        {name:"股东关系",sl:"0"},
        {name:"第三方个人",sl:"0"},
        {name:"同行介绍",sl:"0"}
      ],  
      tableData: []   
    }
  },
  mounted(){
       let that = this
            // 获取客户列表
             channel({                    
                id: this.$store.state.user.id,                              
            }).then(res => {
              console.log(JSON.stringify(res))
                if(res.flag == 0){  
                     that.tableData=res.data; 
                } 
            }) 
  },
  methods: {
    
  }
}
</script>
<style>
.zsTwo .el-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 64px !important;
    border-bottom: 1px solid #edf0f2;
}
.zsTwo .el-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
.zsTwo .wdqd{
  padding: 10px 30px;
  height: 100px;
  background: #fff;
  box-sizing: border-box;
}
.zsTwo .wdqd ul li{
  width: calc(13.5% - 10px);
  float: left;
  padding: 0 10px 7px 0;
  min-height: 50px;
  margin: 5px 0;
  box-sizing: border-box;
}
.zsTwo .wdqd ul .wdqd-content{
  display: inline-block;
  padding-right: 10px;
  width: 100%;
  border-right: 1px solid rgb(224, 224, 224);
  box-sizing: border-box;
}
.zsTwo .wdqd ul .wdqd-content div:first-child{
  width: 100%;
  min-height: 22px;
  font-size: 12px;
  color: #7085a1;
  margin-top: 8px;
}
.zsTwo .wdqd ul .wdqd-content div:last-child{
  width: 100%;
  color: #353b4b;
  min-height: 36px;
  line-height: 36px;
  font-size: 24px;
  cursor: pointer;
}  

</style>


