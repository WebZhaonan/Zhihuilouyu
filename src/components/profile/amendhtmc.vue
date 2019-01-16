<template>
    <div style="display: inline-block;margin-right: 10px;">
        <el-button size="mini" icon="el-icon-edit" @click="xgvisible=true">修改</el-button>
        <el-dialog title="修改合同名称" :visible.sync="xgvisible" width="300px" :append-to-body="true" class="xgmcDialog">
            <el-form :model="form" ref="form" class="demo-ruleForm" :rules="rules">
                <el-form-item label="修改合同名称" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入合同名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="xgvisible=false" plain>取 消</el-button>
                <el-button type="primary" @click="save('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div> 
</template>
<script>
import { Modifyworldtemplatename } from '@/axios/api' //修改word列表名称

export default {
    name: 'amendhtmc',
    inject: ['reload'],
    props:{
        xgid:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            form:{
                name: ''
            },
            rules: {        
                name: [{ required: true, message: '请输入合同名称', trigger: 'change' }]
            },
            xgvisible: false
        }
    },
    methods:{
        save(formName) { 
            this.$refs[formName].validate((valid) => {
            if (valid) {
                Modifyworldtemplatename({ 
                id: this.xgid,
                name: this.form.name
                }).then(res => {
                if (res.flag == 0) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    }); 
                    }
                });      
                this.reload();
            } else {
                return false;
            }
        });     
      }
    },
    mounted(){
        this.form.name=this.name;
    }
}
</script>
<style>
.xgmcDialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.xgmcDialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.xgmcDialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.xgmcDialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.xgmcDialog .el-dialog__body .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.xgmcDialog .el-dialog__body .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.xgmcDialog .el-dialog__body .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.xgmcDialog .el-dialog__body .demo-ruleForm .el-form-item .el-select{
    width: 100%;
}
.xgmcDialog .el-dialog__body .demo-ruleForm .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.xgmcDialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.xgmcDialog .el-dialog__footer .el-button{
    padding: 10px 30px;
}
</style>
