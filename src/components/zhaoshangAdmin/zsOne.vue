<template>
  <div>
    <div class="zsOne">
      <div class="block">
        <ul>
          <li>今日</li>
          <li>昨日</li>
          <li>本周</li>
          <li>本月</li>
        </ul>
        <el-date-picker
          class="date-input"
          v-model="value6"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
          <el-input 
          class="zsOne-input"
          placeholder="搜索房号"
          prefix-icon="el-icon-search">
        </el-input>
      </div>
      <div class="xzdl">
      </div>
      <zsMsg></zsMsg>  
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
        </el-table-column>
        <el-table-column
          prop="linkman"
          label="最新备注"
          sortable
          width="220">
        <template slot-scope="scope">
          <span style="color: #353b4b;font-size: 14px;display:block;height:16px;line-height:16px;margin-bottom: 4px;">{{ scope.row.linkman }}<i style="color:red;">●</i>{{ scope.row.createtime }}</span>
          <span style="color: #7085a1;font-size: 12px;margin-left: 4px;display:block;height:16px;line-height:16px;">{{scope.row.i_name}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="s_name"
          label="客户状态"
          sortable
          width="194">
          <template slot-scope="scope">
            <span>{{scope.row.s_name}}</span><i class="el-icon-arrow-down" style="margin-left: 8px;"></i>
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
        </el-table-column>
        <el-table-column
          prop="xqgwd"
          label="需求工位段"
          sortable
          width="195">
        </el-table-column>
        <el-table-column
          prop="i_name"
          label="行业"
          width="194">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="预计签约时间"
          width="194">
        </el-table-column>
        <el-table-column
          prop="linkman"
          label="跟进人"
          width="195">
        </el-table-column>
      </el-table>
    </div>
  </div>
  
</template>

<script>
import zsMsg from '@/components/zhlyMsg/zsMsg'
import { CustomerList } from '@/axios/api' // 客户列表 
export default {
  name: 'zsOne',
  components:{
    zsMsg
  },
  data () {
    return {
      value6: '',
      tableData: [
      ]     
    }
  },
  mounted(){
              let that = this
            // 获取客户列表
             CustomerList({                    
                id: this.$store.state.user.id,                              
            }).then(res => {
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
.zsOne{
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.zsOne .block{
  height: 50px;
  border-bottom: 1px solid #edf0f2;
  padding: 0 20px;
}
.zsOne .block ul{
  float: left;
  overflow: hidden;
}
.zsOne .block .zsOne-input{
  width: calc(100% - 640px);
}
.zsOne .block .date-input{
  margin-top: 12px;
}
.zsOne .zsOne-input{
  margin-left: 8px;
}
.zsOne .zsOne-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 32px;
}
.zsOne .el-input span i{
    font-size: 16px;
    color: #6f7e95;
}
.zsOne .block ul li{
  float: left;
  height: 50px;
  color: #000;
  line-height: 50px;
  margin: 0 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
}  
</style>


