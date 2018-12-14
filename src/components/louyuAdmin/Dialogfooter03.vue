<template>
    <el-button type="primary" @click="fs">保存&下一步03</el-button>
</template>
<script>
export default {
    name: 'Dialogfooter03',
    data(){
        return{
            selectIndex: 3
        }
    },
    methods:{
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>
