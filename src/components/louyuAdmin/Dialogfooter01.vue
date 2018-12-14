<template>
    <el-button type="primary" @click="fs">保存&下一步</el-button>
</template>
<script>
export default {
    name: 'Dialogfooter01',
    data(){
        return{
            selectIndex: 1
        }
    },
    methods:{
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>

