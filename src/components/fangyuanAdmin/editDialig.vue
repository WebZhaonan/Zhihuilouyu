<template>     
    <div>             
            <div class="empty"></div> 
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <div class="fyform">
                    <el-form-item label="选择楼宇">
                        <el-select v-model="info.bid" ref="ly" disabled>
                            <el-option
                            v-for="item in xzly"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"                            
                            style="height:58px;line-height:58px;display:flex;">     
                            {{item.name}}          
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="fyform02">
                    <div class="fyform02-txt">房源信息</div>
                    <div class="fyform-content">
                        <div class="fyform-contents">
                            <el-form-item label="选择楼层" prop="lc">
                                <el-select v-model="ruleForm.lc"  placeholder="请选择楼层" no-data-text="没有楼层呀">
                                    <el-option
                                    v-for="item in xzlc"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="房号" prop="fh">    
                                <el-input v-model="info.room_number" ref="fh" placeholder="请输入房号"></el-input>
                            </el-form-item>
                        </div>
                        <div class="fyform-contents">
                            <el-form-item label="建筑面积"  prop="mj">
                                <el-input v-model="info.area" ref="mj" placeholder="请输入面积"></el-input>
                            </el-form-item>
                            <el-form-item label="装修">    
                                <el-select v-model="info.adorn_type" ref="zx" placeholder="装修选择">
                                    <el-option
                                    v-for="item in zx"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div> 
                        <div class="fyform-contents">
                            <el-form-item label="登记人"  prop="djr">
                                <el-input v-model="info.booker" ref="djr" placeholder="请输入登记人"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号"  prop="sfz">
                                <el-input v-model="info.id_number"  ref="sfz" placeholder="请输入身份证号"></el-input>
                            </el-form-item>
                         </div>
                          <div class="fyform-contents">
                            <!-- <el-form-item label="建筑面积"  prop="jzmj">
                                <el-input v-model="info.covered_area"  ref="jzmj" placeholder="请输入建筑面积"></el-input>
                            </el-form-item> -->
                            <el-form-item label="所有人住址"  prop="syrzz">
                                <el-input v-model="info.address" ref="syrzz" placeholder="请输入所有人住址"></el-input>
                            </el-form-item>
                            <el-form-item label="使用面积"  prop="symj">
                                <el-input v-model="info.utilization_area" ref="symj" placeholder="请输入使用面积"></el-input>
                            </el-form-item>
                         </div>
                           <div class="fyform-contents">
                            <el-form-item label="所有人电话"  prop="syrdh">
                                <el-input v-model="info.tel" ref="syrdh" placeholder="请输入所有人电话"></el-input>
                            </el-form-item>
                         </div>
                        <!-- <div class="fyform-contents fyform-contents01">
                            <el-form-item label="工位" prop="gw">
                                <el-input v-model="ruleForm.gw" placeholder="工位"></el-input>
                            </el-form-item>
                        </div>                      -->
                    </div>
                    <div class="fyform-content fyform-content01">
                          <div class="fyform-contents">
                            <el-form-item label="招商状态">
                                <el-select v-model="info.let_type" ref="zszt">
                                    <el-option
                                    v-for="item in zszt"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">               
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <div class="fyform-contents-right">
                                <el-form-item label="预租单价">    
                                    <el-input v-model="info.price" ref="yzdj" placeholder="请输入预租单价"></el-input>
                                </el-form-item>
                                <el-form-item label="房号">    
                                    <el-select v-model="info.unit" ref="dj">
                                        <el-option label="元/平米·天" value="0"></el-option>
                                        <el-option label="元/平米·月" value="1"></el-option>
                                        <el-option label="元/天" value="2"></el-option>
                                        <el-option label="元/月" value="3"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>                       
                        </div>                   
                    </div>
                </div>
                <div class="fyform02 ">
                    <div class="fyform02-txt">
                        <span>房源信息</span>
                        <span>标签管理</span> 
                    </div>
                    <div class="fyform-content">
                        <div class="fyform-contents">
                            <el-form-item style="width:100%;">
                                <el-checkbox-group v-model="ruleForm.checkboxGroup1">
                                    <el-checkbox-button v-for="city in cities" :label="city.id" :key="city.id">{{city.name}}</el-checkbox-button>
                                </el-checkbox-group>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm01('ruleForm')">修改</el-button>
            </div>         
        <el-dialog
            :visible.sync="dialogVisible01"
            width="400px"
            :modal="false"
            center
            class="fy-dialog02">
            <div class="fy-dialog02-div">
                <i class="el-icon-success"></i>
                <p>修改成功</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="gb01('ruleForm')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { roomAdd } from '@/axios/api'; //添加房源
import { getList} from '@/axios/api' //获取楼宇列表
import { buildlevelList} from '@/axios/api'  //获取楼层
import { roomTip } from '@/axios/api' //获取房源标签
import { roomDetail } from '@/axios/api'  //获取房源详情
import { roomEdit } from '@/axios/api' //编辑房源
// const cityOptions = [];
export default {
    name: 'editDialig',
    inject: ['reload'],
     props: {
      rowId: String,
      required: true
    },
    components:{
        
    },
    data(){
        return{
            dialogFormVisible: false,
            dialogVisible01: false,
            dialogVisible02: false,
            ruleForm: {
                ly: '',
                lc: '',
                fh: '',
                mj: '',
                zx: '1',
                gw: '',
                zszt: '0',
                yzdj: '',
                dj: '0',
                djr:'',
                sfz:'',
                // jzmj:'',
                symj:'',
                syrzz:'',
                syrdh:'',
                checkboxGroup1: []
            },
            cities: [],
            xzly: [],
            xzlc:[],
            info:[],
            zx:[
                {
                    label: '不限',
                    value: '1'
                },
                {
                    label: '毛坯',
                    value: '2'
                },
                {
                    label: '简装',
                    value: '3'
                },
                {
                    label: '精装',
                    value: '4'
                }
            ],
            zszt:[
                {
                    label: '可招商',
                    value: '0'
                },
                {
                    label: '不可招商',
                    value: '1'
                }
            ],
            rules: {
            }
        }
    },
    mounted(){
        let that = this;
        // 获取详情
          roomDetail({
            id:this.rowId                                                 
            }).then(res => {
                if(res.flag == 0){  
                this.ruleForm.lc = res.data[0].lid;
                    that.info = res.data[0]
                    let checkArr = []
                    for (const key in res.data[0].label) {
                        checkArr.push(res.data[0].label[key].id);
                    }
                 this.ruleForm.checkboxGroup1 = checkArr;
                    buildlevelList({ 
                    id:res.data[0].bid                                                
                    }).then(res => {
                        if(res.flag == 0){ 
                            this.xzlc=res.data; 
                        } 
                    })  
                } 
            }) 
        // 获取楼宇列表
          getList({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.xzly=res.data; 
                } 
            }) 
        // 获取房源标签
          roomTip({                                                 
            }).then(res => {
                if(res.flag == 0){                
                     that.cities=res.data; 
                } 
            }) 
    },
    methods:{
        submitForm01(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //编辑房源
                      roomEdit({
                          id:this.rowId,
                          bid:this.$refs.ly.value,
                          lid:this.ruleForm.lc,
                          room_number:this.$refs.fh.value,
                          area:this.$refs.mj.value,
                          adorn_type:this.$refs.zx.value,
                          let_type:this.$refs.zszt.value,
                          price:this.$refs.yzdj.value,
                          unit:this.$refs.dj.value,
                          booker:this.$refs.djr.value,
                          id_number:this.$refs.sfz.value,
                        //   covered_area:this.$refs.jzmj.value,
                          utilization_area:this.$refs.symj.value,
                          address:this.$refs.syrzz.value,
                          tel:this.$refs.syrdh.value,
                          tid:this.ruleForm.checkboxGroup1                                              
                        }).then(res => {
                            if(res.flag == 0){   
                                this.dialogVisible01=true;
                            }else{
                                this.$message.error(res.msg);
                            }
                        }) 
                    
                } else {
                    return false;
                }
            });
        },
        gb01(formName){
            this.dialogVisible01=false;  
            this.reload()                
        },
        modalClose(){
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
        }
    },
}
</script>

<style>
.fy-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.fy-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.fy-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.fy-dialog .el-dialog__body .empty{
    width: 100%;
    height: 21px;
    background-color: #fff;
    margin-bottom: 16px;
}
.fy-dialog .el-dialog__body .demo-ruleForm{
    padding: 20px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item{
    display: flex;
    flex-direction: column; 
    width: 100%;
    padding-right: 10px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item .el-select{
    width: 100%;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform .el-form-item .el-select input{
    height: 58px;
    line-height: 58px; 
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02{
    width: 100%;
    margin-top: 10px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform02-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents{
    display: flex;
    justify-content: space-between;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item{
    width: calc(50% - 10px);
    padding-right: 10px;
    display: flex;
    flex-direction: column;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-form-item__content{
    line-height: 30px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-select{
    width: 100%;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .el-form-item .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content .fyform-contents01{
    justify-content: flex-start;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-content01{
    margin-top: 10px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right{
    width: calc(50% - 10px);
    display: flex;
    justify-content: space-between;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right .el-form-item{
    width: 50%;   
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform-contents-right .el-form-item:last-child label{
    color: #fff;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .fyform02-txt span:last-child{
    font-size: 12px;
    cursor: pointer;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .el-checkbox-button{
    margin-right: 12px;
}
.fy-dialog .el-dialog__body .demo-ruleForm .fyform02 .el-checkbox-button .el-checkbox-button__inner{
    padding: 6px 16px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #d9d9d9;
}
 .dialog-footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
.fy-dialog02 .fy-dialog02-div{
    text-align: center;
}
.fy-dialog02 .fy-dialog02-div i{ 
    font-size: 84px;
}
.fy-dialog02 .fy-dialog02-div p{
    font-size: 18px;
    color: #979797;
    margin-top: 20px;
}
.fy-dialog02 .el-button{
    padding: 8px 42px;
}
</style>
