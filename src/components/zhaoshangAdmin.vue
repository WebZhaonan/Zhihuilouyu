<template>
    <div class="zs">
        <div class="tabs">
            <div class="tab" v-for="(item,i) in zsSub" :key="i" @click="toggleTab(item.sub,i)" :class="{tabclass:i == nowIndex}">
                {{item.name}}
            </div>
            <el-button icon="el-icon-plus">客户</el-button>
        </div>
        
        <!-- 子组件，显示不同的 tab
        is 特性动态绑定子组件
        keep-alive 将切换出去的组件保留在内存中 -->
        <zsOne :is="currentTab" keep-alive></zsOne>
    </div>
</template>
<script>
import zsOne from '@/components/zhaoshangAdmin/zsOne'
import zsTwo from '@/components/zhaoshangAdmin/zsTwo'

export default {
    name:'Attract',
    components:{
        zsOne,zsTwo
    },
    data(){
        return{
            currentTab:zsOne,
            zsSub:[
                {name:"客户管理",sub:"zsOne"},
                {name:"我的渠道",sub:"zsTwo"}
            ],
            nowIndex: 0
        }
    },
    mounted(){
    },
    methods:{
        toggleTab:function (tab,i){
            this.currentTab = tab; // tab 为当前触发标签页的组件名
            this.nowIndex = i;
        }
    }
}
</script>
<style>
.zs .tabs{
    padding: 0 20px;
    height: 40px;
    color: #6b809f;
    line-height: 40px;
    background-color: #fff;
    border-bottom: 1px solid #edf0f2;
    position: relative;
    z-index: 1;
}    
.zs .tabs .tab{
    float: left;
    padding: 0 20px;
    border-bottom: 2px solid #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 38px;
}
.zs .tabs .tab:hover{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.zs .tabs .tabclass{
    border-bottom: 2px solid #108ee9;
    color: #108ee9;
}
.zs .tabs .el-button{
    float: right;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    padding: 0 15px;
    font-size: 14px;
    height: 28px;
}
.zs .zs-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.zs .table-header{
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
.zs .table-header i{
    font-size: 16px;
}
.zs .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.zs .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.zs .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.zs .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.zs .el-table tbody tr td .cell{
    padding: 0 20px;
}
</style>
