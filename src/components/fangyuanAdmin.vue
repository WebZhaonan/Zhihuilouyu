<template>
    <div class="fy">
        <fyPublic></fyPublic>
        <router-view/>   
    </div>
    
</template>
<script>
import fyPublic from '@/components/fangyuanAdmin/fyPublic'

export default {
    name:'fangyuanAdmin',
    data(){
        return {
            
        }
    },
    methods: {
     
    },
    components:{
        fyPublic
    }
}
</script>
<style>
.fy .fy-table{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.fy .table-header{
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
.fy .table-header i{
    font-size: 16px;
}
.fy .el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
    border-bottom: 1px solid #e0e0e0 !important;
    padding: 0;
}
.fy .el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.fy .el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #353b4b;
    font-size: 14px;
}
.fy .el-table tbody tr td{
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}
.fy .el-table tbody tr td .cell{
    padding: 0 20px;
}
</style>
