<template>
    <el-button type="primary" @click="fs">保存04</el-button>
</template>
<script>
export default {
    name: 'Dialogfooter04',
    data(){
        return{
            selectIndex: 4
        }
    },
    methods:{
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>
