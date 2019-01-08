<template>
    <div class="zs-table">
        <div class="table-header">
            <div>我的渠道</div>
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
        prop="tel"
        label="联系方式"
        sortable
        width="291">
      </el-table-column>
      <el-table-column
        prop="sq"
        label="商圈"
        sortable
        width="262">
        <template slot-scope="scope">
              <span v-if="scope.row.buid=='0'">暂无</span>      
              <span v-else-if="scope.row.buid!='0'">-</span>               
            </template> 
      </el-table-column>
      <el-table-column
        prop="b_name"
        label="渠道类型"
        sortable
        width="262">
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司名称"
        width="262">
      </el-table-column>
      <el-table-column
        prop="address"
        label="通讯地址"
        sortable
        width="264">
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
import { broker } from '@/axios/api' //客户来访渠道列表
export default {
    name: 'zsTwotable',
    data(){
        return{
            tableData: [
            ]   
        }   
    },
    created(){
            let that = this
            // 获取客户列表
             broker({                    
                // id: this.$store.state.user.id,                              
            }).then(res => {
                if(res.flag == 0){  
                     that.tableData=res.data; 
                } 
            }) 
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
</style>


