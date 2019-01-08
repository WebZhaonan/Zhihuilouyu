<template>
    <div class="zk-nav">
    <el-menu  :default-active="activeIndex" class="el-menu-demo zk-ul" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" class="tab" @click="toggleTab('zk-list')">租客列表</el-menu-item>
    </el-menu>
    <!-- 子组件，显示不同的 tab
    is 特性动态绑定子组件
    keep-alive 将切换出去的组件保留在内存中 -->
    <zkList :is="currentTab" keep-alive></zkList>
    </div>
</template>
<script>

// 引入子组件
import zkList from '../components/zk-list';
import { Lycheck } from '@/axios/api' //左侧单选
import { Lycheckgroup } from '@/axios/api' //左侧多选
export default {
    name:'Zk',
    inject: ['reload'],
      data() {
      return {
       activeIndex: '1',
       currentTab:'zkList'
      };
    },
     components: {  // 声明子组件
            zkList
        },
    methods: {
          zkitems(info){
              // 点击左侧，右侧渲染。单选
             Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                     this.reload(); 
                } 
            }) 
        },
            // 取消楼宇单个
        delectItems3(info){
            Lycheck({      
            id:info.id                                            
            }).then(res => {
                if(res.flag == 0){  
                    this.reload(); 
                } 
            }) 
        },
        // 多选楼宇
        sayNode3(arrId) {
        var str = arrId;
        var arr = str.split(",");// 在每个逗号(,)处进行分解。
          Lycheckgroup({      
            id:arr                                           
            }).then(res => {
                if(res.flag == 0){  
                    this.reload();
                } 
            }) 
        },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       toggleTab: function(tab) {
      this.currentTab = tab;  // tab 为当前触发标签页的组件名
    }
    }
}
</script>
<style scoped>
.zk-ul .el-menu-item{
    width: auto;
}
.zk-ul .el-menu-item:nth-child(1) {
    margin-left: 20px;
}
.zk-ul .el-menu-item.is-active{
    color: #4494f0 !important;
}
</style>
