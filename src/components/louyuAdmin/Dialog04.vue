<template>
<div>
    <el-form :model="form" ref="ruleForm"  hide-required-asterisk>               
        <div class="dia04-top">
            <div class="dia04-top-div" @click="addsrmb"><i class="el-icon-plus"></i>收入目标</div>
        </div>
        <div class="dia04-botton">
            <div class="form-top" style="margin-top:6px;position:relative;" v-for="(item,i) in srmbs" :key="i">
                <i class="el-icon-close" @click="move(item)"></i>
                <div class="form-public form-13">
                    <el-form-item label="收入目标" prop="srmb">
                        <el-input v-model="item.srmb" placeholder="请输入收入目标"></el-input>
                        <el-input v-model="form.wy" placeholder="万元" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="预算时间">
                        <el-select v-model="item.yssj">
                            <el-option label="2018" value="2018"></el-option>
                            <el-option label="2019" value="2019"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="Dia_sc">
                    <el-button type="primary" plain style="padding:5px 30px" @click="getItem(item)">收入目标</el-button> 
                     <p> 
                        当前总收入目标: <span>0</span><br>
                        <span>
                            (允许误差 < 0.06)
                            </span>
                    </p>
                </div>
                      <div class="form-bottom Dbottom">
            <ul class="bottom-ul Dli">
                <li>月份</li>
                <li>收入目标</li>
                <li>月份</li>
                <li>收入目标</li>
            </ul>
            <div style="height: auto;overflow: auto;margin-top: 4px;">
                
                <div class="form-public form-07" v-for="(item,i) in form.lcs" :key="i">  
                    <el-form-item>
                        <el-input  disabled :value="i"></el-input> 
                    </el-form-item>
                    <el-form-item>
                        <el-input :value="item"></el-input>
                    </el-form-item>
               
                </div>
            </div>        
        </div>
            </div>
        </div>
    </el-form>
    <div class="xyb">
        <el-button  type="primary" @click="fs">保存</el-button>
    </div>    
</div>
</template>
<script>
import { monthly }  from '@/axios/api'; //生成月收入目标
export default {
    name: 'Dialog04',
    data(){
        return{
            form:{
                wy: '',
                yssj: '',
                lcs:[],
            },
            srmbs:[],
            selectIndex: 4
        }
    },
    methods:{
        // 添加收入目标
        addsrmb(){
            this.srmbs.push({ 
              srmb:''
            })
        },
        // 删除
        move(item){
            var index = this.srmbs.indexOf(item);
            if(index !== -1){
                this.srmbs.splice(index,1);
            }
        },
        // 获取月份收入
        getItem(item){
            monthly({
                money: item.srmb                                        
            }).then(res => {
                if(res.flag == 0){  
                    this.form.lcs = res.data.month
             }
                })
        },
        // 保存提交
        fs(){
            this.$emit("fsval",this.selectIndex);
        }
    }   
}
</script>
<style>
.Dia_sc{
    text-align: center;
    width: 100%;
}
.Dia_sc p{
    width: 30%;
    text-align: left
}
.Dli li{
    width: 25% !important;
    text-align: center 
}
.Dbottom{
    height: auto !important;
}
.Dbottom .form-public{
    display: block !important
}
.Dbottom .el-input__inner{
    width: 90%;
    text-align: center
}
.Dbottom .form-07 .el-form-item{
    float: left;
    width: 25%;
}
.Dbottom .el-input{
    text-align: center
}
</style>




