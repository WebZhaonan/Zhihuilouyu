<template>
<div class="ht-nav">
   <el-menu  :default-active="activeIndex" class="el-menu-demo ht-ul" mode="horizontal">
  <el-menu-item index="1" class="tab" @click="toggleTab('ht-list')">合同列表</el-menu-item>
  <el-menu-item index="2" class="tab" @click="toggleTab('htGd')">归档合同</el-menu-item>
</el-menu>
<!-- 子组件，显示不同的 tab
 is 特性动态绑定子组件
 keep-alive 将切换出去的组件保留在内存中 -->
<htList :is="currentTab" keep-alive ref="htList"></htList>
<el-button icon="el-icon-plus" class="btnHt" plain @click="open()">合同</el-button>
<htDialog v-if="openOrderVisible" :visible.sync="openOrderVisible"></htDialog>
</div>
</template>

<script>
// 引入子组件
import htList from '../components/ht-list';
import htGd from '../components/htGd';
import htDialog from '@/components/hetongAdmin/htDialog';
export default {
    name:'Ht',
    inject: ['reload'],
      data() {
        return {
            activeIndex: '1',
            currentTab:'htList',
            openOrderVisible: false
        };
    },
    components: {  // 声明子组件
        htList,htGd,htDialog
    },
    methods: {
          htitems(info){
            this.$refs.htList.htdx(info);
        },
            // 取消楼宇单个
        delectItems4(info){
        this.$refs.htList.htqx(info);
        },
        // 多选楼宇
        sayNode4(arrId) {
            this.$refs.htList.htdouble(arrId);
        },
        open(){
            this.openOrderVisible= true;
        },
        toggleTab: function(tab) {
            this.currentTab = tab;    
        }
    }
}
</script>
<style>
.ht-nav{
    position: relative;
}
.ht-nav .btnHt {
    padding: 7px 14px;
    position: absolute;
    right: 10px;
    top: 16px;
}
.ht-nav .btnHt:hover,
.ht-nav .btnHt:active {
  color: #409eff;
  border-color: #409eff;
  background-color: #fff;
}
.ht-ul .el-menu-item{
    width: auto;
}
.ht-ul .el-menu-item:nth-child(1) {
    margin-left: 20px;
}
.ht-ul .el-menu-item.is-active{
    color: #4494f0 !important;
}
</style>
