<template>
<el-table :data="tableData3" height="650" border style="width: 100%;text-alig:center" :default-sort = "{prop: '', order: 'descending'}">
    <el-table-column prop="name" label="楼宇名称" width="250">
    </el-table-column>
      <el-table-column prop="id" sortable label="序号" width="100">
    </el-table-column>
    <el-table-column prop="znum" sortable label="租赁数" width="100">
    </el-table-column>
    <el-table-column prop="cname" sortable label="租客" width="200">
    </el-table-column>
    <el-table-column prop="strtime" sortable label="开始日">
    </el-table-column>
    <el-table-column prop="endtime" sortable label="结束日" width="200">
      <template slot-scope="scope">
        {{scope.row.endtime}}
        <httabDialog :httabid="scope.row.id"></httabDialog>   
      </template> 
    </el-table-column>
    <el-table-column prop="uname" label="跟进人" >
    </el-table-column>
    <el-table-column prop="url" label="合同下载" >
        <template slot-scope="scope">
            <el-button
            size="mini"
            type="primary"
            plain
            @click="download(scope.row)">下载</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { contractlist } from '@/axios/api' //获取合同列表
import httabDialog from '@/components/hetongAdmin/httabDialog'
import { Lycheck } from '@/axios/api' //左侧单选
import { Lycheckgroup } from '@/axios/api' //左侧多选
export default {
    name:'hdTab',
    components:{
      httabDialog
    },
    data() {
        return{
          tableData3: [],
        }
    },
    props:{
        tablelists:{
            type: Array,
            required: true
        }
    },
    watch:{
        tablelists(val,oldval){
                this.tableData3=val;             
        }
    },
    mounted(){
        this.contractlist =function(){
            contractlist({                         
        }).then(res => {
            if(res.flag == 0){ 
                this.tableData3=res.data;
            } 
        }) 
        }
        this.contractlist();
    },
       methods: {
          download(row){
            window.location.href=row.url;
        },
        //    单选
           httab(info){
           // 点击左侧，右侧渲染。单选
             Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                     this.contractlist(); 
                } 
            }) 
           },
               // 取消
    httab1(info){
          Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                     this.contractlist();
                } 
            })    
    },
    // 多选
    httab2(arrId){
          var str = arrId;
        var arr = str.split(",");// 在每个逗号(,)处进行分解。
          Lycheckgroup({      
            id:arr                                           
            }).then(res => {
                if(res.flag == 0){  
                    this.contractlist();
                } 
            }) 
    }
        }
}
</script>
<style>
.container .tabBtn{
display: none;
}
.container .el-table__row:hover .tabBtn{
display: block
}
.container .el-table__row td{
  text-align: center;
}
.container .el-table th.is-leaf{
  text-align: center
}

</style>


