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
        @row-click="open03">
        <el-table-column
          prop="name"
          label="楼宇名称"
          width="178">
        </el-table-column>
        <el-table-column
          prop="lc"
          label="楼层"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="fh"
          label="房号"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="yqdj"
          label="预期单价"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="zx"
          label="装修"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="dw"
          label="单位"
          width="178">
            <template slot-scope="scope">
              {{scope.row.dw}}
              <div class="fydetails-div">
                <el-button plain class="fydetails-button" @click.stop="open01()"><i class="el-icon-plus"></i>合同</el-button>
                <htDialog ref="openOrder" v-if="openOrderVisible" :visible.sync="openOrderVisible"></htDialog>
                <el-button plain class="fydetails-button" @click.stop="open02()"><i class="el-icon-plus"></i>编辑房源</el-button>
                <fyDialog ref="openOrder" v-if="openOrderVisible01" :visible.sync="openOrderVisible01"></fyDialog>
              </div>                           
            </template>  
        </el-table-column>
        <el-table-column
          prop="mj"
          label="面积"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="gw"
          label="工位"
          sortable
          width="178">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="房源标签"
          :filters="[{ text: '朝南', value: '朝南' }, { text: '朝北', value: '朝北' }, { text: '有窗', value: '有窗' }, { text: '自用', value: '自用' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              type="primary" plan
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
      <fydetailsDialog v-if="isopendarwer"></fydetailsDialog>
    </div>
</template>

<script>
import htDialog from '@/components/hetongAdmin/htDialog'
import fyDialog from '@/components/fangyuanAdmin/fyDialog'
import fydetailsDialog from '@/components/fangyuanAdmin/fydetailsDialog'
import fangyuanAdminVue from '../fangyuanAdmin.vue';

export default {
  name: 'fy01',
  components:{
    htDialog,fyDialog,fydetailsDialog
  },
  data () {
    return {
      openOrderVisible: false,
      openOrderVisible01: false,
      tableData: [{
          name: '003',
          lc: '01',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '朝南'
        }, {
          name: '002',
          lc: '02',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '朝北'
        }, {
          name: '005',
          lc: '03',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '有窗'
        }, {
          name: '001',
          lc: '04',
          fh: '01',
          yqdj: '- 元/㎡·天',
          zx: '精装',
          dw: '元/㎡·天',
          mj: '1,000.00',
          gw: '',
          tag: '自用'
        }
      ],
      isopendarwer: false,
      name:'可招商'
    }
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    open01(){
      this.openOrderVisible= true;
    },
    open02(){
      this.openOrderVisible01= true;
    },
    open03(){
      this.isopendarwer=true;
      // this.$store.commit('ADD-OPEN',true);
    },
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
</style>


