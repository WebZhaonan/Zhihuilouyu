<template>
<div>
    <el-form :model="form" :rules="rules2" ref="form">
        <div class="form-top">
            <div class="form-public form-06">
                <el-form-item label="添加楼层数量">
                    <el-select v-model="form.luoceng">
                    <el-option label="单层" value="danceng"></el-option>
                    <!-- <el-option label="多层" value="duoceng"></el-option> -->
                    </el-select>
                </el-form-item>
                <el-form-item
                    label="楼层名称"
                    prop="lcname">
                    <el-input v-model="form.lcname"></el-input>
                </el-form-item>
                <el-form-item label="楼层面积/m²">
                    <el-input v-model="form.lcmj" disabled="disabled"></el-input>
                </el-form-item>
            </div>
            <div class="tjly"><el-button @click="addlcs('form')"><i class="el-icon-plus"></i>添加楼层</el-button></div>
        </div>
        <div class="form-bottom">
            <ul class="bottom-ul">
                <li>楼层</li>
                <li>面积</li>
                <li>房源数量</li>
            </ul>
            <div style="height: 390px;overflow: auto;margin-top: 4px;">
                <div class="form-public form-07" v-for="(item,i) in form.lcs" :key="i">
                    <el-form-item>
                        <el-input v-model="item.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.name02" disabled></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.name03" disabled placeholder="0"></el-input>
                    </el-form-item>
                    <el-button class="button-07" @click="move(item)"><i class="el-icon-delete"></i></el-button>
                </div>
            </div>        
        </div>
    </el-form>
    <div class="xyb">
        <el-button type="primary" @click="fs">保存&下一步</el-button>
    </div>
</div>
</template>
<script>
import { buildlevel } from '@/axios/api' //添加楼层
import { buildlevelList } from '@/axios/api' //获取楼层列表
import { buildEdit } from '@/axios/api' //编辑楼层
export default {
    name: 'Dialog02',
      props: {
      rowId: String,
      required: true
    },
    data(){
        var lcevent = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入楼层名称'));
            }else {
                callback();
            }
        };
        return{
            form:{
                region: '',
                name02: '',
                name03: '',
                lcname: '',
                lcmj: '',
                nianyue: '年月',
                luoceng: '单层',
               lcs:[],
            },
            rules2: {              
                lcname: [
                    { validator: lcevent, trigger: 'blur' }
                ]
            },
            selectIndex: 2
        }
    },
    mounted(){
            if(this.rowId){
                 buildlevelList({                    
                 id:this.rowId                           
            }).then(res => {
                if(res.flag == 0){  
                    this.form.lcs = res.data;
                } 
            }) 
            }
    },
    methods:{
        addlcs(refName){
            this.$refs[refName].validate((valid) => {
                if (valid) {
                    if(this.rowId){
                    this.form.lcs.push({
                    name:this.form.lcname,
                    id:0
                    })
                    }else{
                        this.form.lcs.push({name:this.form.lcname})
                    }
                } else {
                    return false;
                }
                
            });
        },
        move(item){
            this.$confirm('你确定要删除楼层?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                var index = this.form.lcs.indexOf(item);
                if(index !==-1){
                     this.form.lcs.splice(index,1);
                }
                }).catch(() => {         
            });
        },
        fs(){
            if(this.rowId){
            // 编辑路层
            let bid = this.rowId;
            let editLcs = this.form.lcs;
            let editArr = [];
              for (const i in editLcs) {
                editArr.push({
                    name:editLcs[i].name,
                    id:editLcs[i].id
                })
            }
                           buildEdit({
                 bid:bid,
                 name:editArr                                                
            }).then(res => {
                if(res.flag == 0){
                    this.$message({
                      message: '修改成功',
                      type: 'success',
                      duration: 1000
                    });
                   this.$emit("fsval",this.selectIndex);
                } 
            })
            }else{
        // 添加路层点击方法
        let bid = JSON.parse(sessionStorage.getItem('bid'));
        var lcs = this.form.lcs;
        var newArr = [];
                    for (const i in lcs) {
                        newArr.push(lcs[i].name)
                    }
             buildlevel({
                 bid:bid.id,
                 name:newArr                                                
            }).then(res => {
                if(res.flag == 0){
                    this.$message({
                      message: '保存成功',
                      type: 'success',
                      duration: 1000
                    });
                   this.$emit("fsval",this.selectIndex);
                } 
            })
            }
        }
    }
}
</script>


