<template>
    <div class="fy-table">
      <div class="table-header">
          <div>所有房源</div>
          <i class="el-icon-more"></i>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
        height="650">
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="149">
        </el-table-column>
        <el-table-column
          prop="level_name"
          label="楼层"
          sortable
          >
        </el-table-column>
        <el-table-column
          prop="room_number"
          label="房号"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="adorn_type"
          label="装修"
          >
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
          prop="area"
          label="面积"
          sortable
         >
        </el-table-column>
        <el-table-column
          prop="tag"
          label="房源标签"
          width="350"
         >
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
        <!-- <el-table-column
          prop="zk"
          label="租客"
          width="150">
        </el-table-column> -->
        <!-- <el-table-column
          prop="jzr"
          label="计租日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="jsr"
          label="结束日"
          width="200">
        </el-table-column>
        <el-table-column
          prop="htdj"
          label="合同单价"
          width="150">
        </el-table-column>
        <el-table-column
          prop="htdjdw"
          label="合同单价单位"
          width="150">
        </el-table-column>
        <el-table-column
          prop="ssdj"
          label="实时单位"
          width="150">
        </el-table-column> -->
      </el-table>
    </div>
</template>

<script>
import { roomFy } from '@/axios/api' //获取房源列表
import { Lycheck } from '@/axios/api' //左侧单选
import { Lycheckgroup } from '@/axios/api' //左侧多选
export default {
  name: 'fy03',
  data () {
    return {
      tableData: [
      ]
    }
  },
  mounted(){
     let that = this;
      // 获取房源列表
      that.roomFy = function(){
         roomFy({                                                 
            }).then(res => {
                if(res.flag == 0){ 
                     that.tableData=res.data; 
                } 
            }) 
      }
      that.roomFy();
  },
  methods: {
     // 搜索
     searchCh(info){
       this.tableData = info
     },
          //  单选
     fyTable(info){
          // 点击左侧，右侧渲染。单选
             Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                     this.roomFy(); 
                } 
            }) 
     },
      // 取消
    cencal(info){
             Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                   this.roomFy(); 
                } 
            })
    },
    // 多选
    dabcheck(arrId){
             var str = arrId;
        var arr = str.split(",");// 在每个逗号(,)处进行分解。
          Lycheckgroup({      
            id:arr                                           
            }).then(res => {
                if(res.flag == 0){  
                    this.roomFy(); 
                } 
            }) 
    },
  }
}
</script>

