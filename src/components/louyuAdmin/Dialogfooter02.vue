<template>
    <el-button type="primary" @click="fs">保存&下一步02</el-button>
</template>
<script>
export default {
    name: 'Dialogfooter02',
    data(){
        return{
            selectIndex: 2
        }
    },
    methods:{
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>
