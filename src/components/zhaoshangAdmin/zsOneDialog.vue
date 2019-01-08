<template>
    <div class="zsOneDialog">
        <el-button class="button-dialog" icon="el-icon-plus" plain @click="dialogFormVisible = true">客户</el-button>
        <el-dialog title="新建客户" :visible.sync="dialogFormVisible" class="zsOne-dialog" width="1000px" top="100px" center 
        append-to-body
        :close-on-click-modal="false"
        >               
            <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" hide-required-asterisk> 
                <div class="tc-form-top">
                    <div class="tc-form-tops">
                        <div class="tc-form-txt">
                            <span>客户信息</span>
                        </div>
                        <div class="tc-form-content" style="height: 610px;overflow-y: auto;">
                            <div class="tc-form-contents">
                                <el-form-item label="客户" prop="kh">
                                    <el-input v-model="ruleForm.kh" placeholder="请填写租客"></el-input>
                                </el-form-item>
                                <el-form-item label="跟进人" prop="gjr">    
                                    <el-input v-model="ruleForm.gjr" disabled></el-input>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                  <el-form-item label="行业" prop="hy">    
                                    <el-select v-model="ruleForm.hy">
                                        <el-option
                                        v-for="item in hy"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="客户联系人" prop="khlxr">    
                                    <el-input v-model="ruleForm.khlxr" placeholder="请填写客户联系人"></el-input>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="预计签约时间" prop="yjqysj">
                                    <el-date-picker
                                    v-model="ruleForm.yjqysj"
                                    type="date"
                                    placeholder="请选择预计签约时间">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="需求数量/㎡" prop="xqsl01,xqsl02" class="two-el-form-item">    
                                    <el-input v-model="ruleForm.xqsl01" placeholder="Min"></el-input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                    <el-input v-model="ruleForm.xqsl02" placeholder="Max"></el-input>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents">
                                <el-form-item label="来访时间" prop="lfsj">
                                    <el-date-picker
                                    v-model="ruleForm.lfsj"
                                    type="date"
                                    placeholder="请选择预计签约时间">
                                    </el-date-picker>
                                </el-form-item>
                                <el-form-item label="客户状态" prop="khzt">    
                                    <el-select v-model="ruleForm.khzt">
                                        <el-option
                                        v-for="item in khzt"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents tc-form-contents02">
                                <el-form-item label="来访渠道" prop="lfqd">    
                                    <el-select v-model="ruleForm.lfqd">
                                        <el-option
                                        v-for="item in lfqd"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents tc-form-contents02">
                                <el-form-item label="渠道联系人" prop="qdlxr">   
                                      <el-select v-model="ruleForm.qdlxr">
                                        <el-option
                                        v-for="item in qdlxr"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select> 
                                    <!-- <el-input v-model="ruleForm.qdlxr" placeholder="请填写渠道联系人"></el-input> -->
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents tc-form-contents02">
                                <el-form-item label="备注" prop="bz">    
                                    <el-input
                                    type="textarea"
                                    :rows="1"
                                    style="height:100px;"
                                    placeholder="请填写备注信息"
                                    v-model="ruleForm.bz">
                                    </el-input>
                                </el-form-item>
                            </div>
                            <div class="tc-form-contents tc-form-contents02">
                                <el-form-item label="成交几率" prop="cjjl">    
                                    <el-slider v-model="ruleForm.cjjl" style="float:left;width:90%;"></el-slider><span style="float:right;margin-top:4px;"></span>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <!-- 房源 -->
                <div class="tc-form-tops">
                                    <div class="tc-form-txt">
                                        <span>房源信息</span>
                                    </div>
                     <div class="tc-form-content" style="overflow:hidden;height: 610px;">
                    <div class="scroll" style="overflow-y: scroll;height: 100%;width: 471px;;">
                    <el-menu class="el-menu-vertical-demo" background-color="#fff" text-color="rgba(0,0,0,.85)" 
                    active-background-color="#fff"
                    :default-active="activeIndex"
                     @open="handleSelect"
                     mode="vertical"
                     unique-opened
                    >
                    <template v-for="item  in fyList">
                        <el-submenu  :index='item.id' :key="item.id">
                            <template slot="title">
                                <div style="position: relative;">
                                    <img :src="item.images" style="height:38px;width:60px">
                                    <div style="display: inline-block;margin-left:6px;">
                                        <div style="line-height:22px;">{{item.name}}
                                       </div>
                                       <div style="line-height:18px;color: #9fa1a8;font-size: 12px;">{{item.p_name}}{{item.c_name}}{{item.a_name}}</div>
                                    </div>
                                </div>
                            </template>
                            <el-menu-item-group>
                                <el-tabs v-model="activeName2" type="card">
                                    <el-tab-pane label="可招商" name="first" >
                                        <el-checkbox-group v-model="checkList">
                                            <div class="checkli" v-for="(item,index) in kzs" :key="index">
                                                <el-checkbox :label="item.id">
                                                    <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.level_name}}</span>
                                                      <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.room_number}}号</span>
                                                        <span style="display:inline-block;width:46%;">{{item.area}}/m²</span>
                                                </el-checkbox>
                                            </div>
                                        </el-checkbox-group>
                                    </el-tab-pane>
                                    <el-tab-pane label="已租" name="second" >
                                         <el-checkbox-group v-model="checkList1">
                                         <div class="checkli" v-for="(item,index) in kzs1" :key="index">
                                                <el-checkbox :label="item.id" disabled>
                                                    <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.level_name}}</span>
                                                      <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.room_number}}号</span>
                                                        <span style="display:inline-block;width:46%;">{{item.area}}/m²</span>
                                                </el-checkbox>
                                            </div>
                                        </el-checkbox-group>
                                    </el-tab-pane>
                                    <el-tab-pane label="所有房源" name="third" >
                                         <el-checkbox-group v-model="checkList2">
                                         <div class="checkli" v-for="(item,index) in kzs2" :key="index">
                                                <el-checkbox :label="item.id">
                                                    <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.level_name}}</span>
                                                      <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.room_number}}号</span>
                                                        <span style="display:inline-block;width:46%;">{{item.area}}/m²</span>
                                                </el-checkbox>
                                            </div>
                                        </el-checkbox-group>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-menu-item-group>                                     
                        </el-submenu>   
                        </template>     
                    </el-menu>    
                </div>
                        </div>
                    </div>
                </div>
                <div class="tc-form-bottom">
                    <div class="bottom-txt" @click="isbh,show2 = !show2">{{xsgd}}</div>
                    <transition name="el-zoom-in-top">
                        <div v-show="show2" class="transition-box">
                            <div class="tc-form-top">
                                <div class="tc-form-tops">
                                    <div class="tc-form-txt">
                                        <span>需求信息</span>
                                    </div>
                                    <div class="tc-form-content">
                                        <div class="tc-form-contents">
                                            <el-form-item label="城市/区域/商圈" prop="cqs" style="width: 100%;">
                                                <el-input v-model="ruleForm.cqs" placeholder="请输入城市/区域/商圈"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="tc-form-contents">
                                            <el-form-item label="期望价格" prop="qwjg" class="two-el-form-item">
                                                <el-input v-model="ruleForm.qwjg01" placeholder="Min"></el-input>
                                                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                                <el-input v-model="ruleForm.qwjg02" placeholder="Max"></el-input>
                                            </el-form-item>
                                            <el-form-item label="qwjgdw" prop="qwjgdw" class="fffcolor">    
                                                <el-select v-model="ruleForm.qwjgdw">
                                                    <el-option
                                                    v-for="item in qwjgdw"
                                                    :key="item.id"
                                                    :label="item.label"
                                                    :value="item.value">               
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                                <div class="tc-form-tops">
                                    <div class="tc-form-txt">
                                        <span>客户当前信息</span>
                                    </div>
                                    <div class="tc-form-content ">
                                        <div class="tc-form-contents">
                                            <el-form-item label="当前地址" prop="dqdz">
                                                <el-input v-model="ruleForm.dqdz" placeholder="请输入当前地址"></el-input>
                                            </el-form-item>
                                            <el-form-item label="当前合同到期日" prop="dqhtdqr">
                                                <el-date-picker
                                                v-model="ruleForm.dqhtdqr"
                                                type="date"
                                                placeholder="请选择日期">
                                                </el-date-picker>
                                            </el-form-item>
                                        </div>
                                        <div class="tc-form-contents">
                                            <el-form-item label="当前租赁数" prop="dqzls" class="two-el-form-item">
                                                <el-input v-model="ruleForm.dqzls01" placeholder="请输入当前面积"></el-input>
                                                <el-select v-model="ruleForm.dqzls02" style="width: calc(50% - 40px);padding-left: 10px;box-szie:border-box;">
                                                    <el-option
                                                    label="m²"
                                                    value="0">               
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                            <el-form-item label="当前租金" prop="dqzj" class="two-el-form-item">
                                                <el-input v-model="ruleForm.dqzj01" placeholder="请输入当前租金"></el-input>
                                                <el-select v-model="ruleForm.dqzj02" style="width: calc(50% - 10px);padding-left: 10px;box-szie:border-box;">
                                                    <el-option
                                                    v-for="item in userUnit"
                                                    :key="item.id"
                                                    :label="item.label"
                                                    :value="item.value">               
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition> 
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel('ruleForm')" plain>取 消</el-button>
                <el-button type="primary" @click="save('ruleForm')">保 存</el-button>
            </div>   
        </el-dialog>
    </div>
</template>
<script>
import { clientstatusList } from '@/axios/api'  // 获取客户状态
import { channels } from '@/axios/api' //获取来访渠道列表
import { industrylet } from '@/axios/api' //行业
import { getList } from '@/axios/api'  //楼宇列表
import { housinglist } from '@/axios/api' //客户对话框房源列表  
import { client } from '@/axios/api' //添加楼层
import { broker } from '@/axios/api' //获取经纪人列表
export default {
    name: 'zsOneDialog',
    inject: ['reload'],
    components:{
    },
    data(){
        return{
            dialogFormVisible: false,
            ruleForm:{
                kh: '',
                gjr: '',
                khlxr:'',
                yjqysj:'',
                xqsl01:'',
                xqsl02:'',
                lfsj: new Date(),
                qwjgdw: '0',
                dqzls02: 'm2',
                dqzj02: '0'
            },
            rules: {        
            },
            khzt:[
            ],
            lfqd:[
            ],
            hy:[],
            xsgd: '显示更多',
            qdlxr:[],
            qwjgdw:[
                { label:'元/㎡·天',value:'0' },
                { label:'元/㎡·月',value:'1' },
                { label:'元/天',value:'2' },
                { label:'元/月',value:'3' }
            ],
            userUnit:[
                { label:'元/㎡·天',value:'0' },
                { label:'元/㎡·月',value:'1' },
                { label:'元/天',value:'2' },
                { label:'元/月',value:'3' }
            ],
            badgeval: '',
            show2: false,
            activeIndex:'0',
            activeName2: 'first',
            fyList:[],
            checkList: [],
            kzs:[],
            checkList1: [],
            kzs1:[],
            checkList2: [],
            kzs2:[],
        }
    },
    mounted(){
        let that =this
         // 获取客户状态列表
             clientstatusList({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.khzt=res.data; 
                } 
            }) 
        //获取来访渠道
            channels({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.lfqd=res.data; 
                } 
            }) 
            //行业
               industrylet({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.hy=res.data; 
                } 
            }) 
            // 楼宇列表
               getList({                                                 
            }).then(res => {
                if(res.flag == 0){
                that.fyList=res.data; 
                } 
            }) 
            // 获取经纪人列表
              broker({                                                 
            }).then(res => {
                if(res.flag == 0){
                that.qdlxr=res.data; 
                } 
            }) 
      },
    methods:{
         handleSelect(key) {
            //获取房源列表
                this.kzs = [];
                this.kzs2 = []
           housinglist({ 
               id:'['+ key +']'                                               
            }).then(res => {
                if(res.flag == 0){ 
                    console.log(JSON.stringify(res))
                    this.kzs2 = res.data
                   for (const tabIndex in res.data) {
                      if(res.data[tabIndex].let_type!=1){
                        this.kzs.push(res.data[tabIndex])
                      }else{
                          this.kzs2.push(res.data[tabIndex])
                      }
                    }
                // this.kzs=res.data; 
                } 
            }) 
            },
        isbh(){
            if(this.xsgd=="显示更多"){
                this.xsgd="收起";
            }else{
                this.xsgd="显示更多";
            }
            
        },
        save(formName){

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 新建合同
                     client({   
                        name:this.ruleForm.kh,
                        iid:this.ruleForm.hy,
                        linkman:this.ruleForm.khlxr,
                        signtime:this.ruleForm.yjqysj,
                        need_min:this.ruleForm.xqsl01,
                        need_max:this.ruleForm.xqsl02,
                        visittime:this.ruleForm.lfsj,
                        sid:this.ruleForm.khzt,
                        cid:this.ruleForm.lfqd,
                        bid:this.ruleForm.qdlxr,
                        remark:this.ruleForm.bz,
                        probability:this.ruleForm.cjjl,
                        region:this.ruleForm.cqs,
                        price_min:this.ruleForm.qwjg01,
                        price_max:this.ruleForm.qwjg02,
                        unit:this.ruleForm.qwjgdw,
                        user_address:this.ruleForm.dqdz,
                        user_time:this.ruleForm.dqhtdqr,
                        rent_num:this.ruleForm.dqzls01,
                        user_money:this.ruleForm.dqzj01,
                        user_unit:this.ruleForm.dqzj02,
                        rid:this.checkList

                    }).then(res => {
                        if(res.flag == 0){  
                            // that.lfqd=res.data; 
                             this.$message({
                            showClose: true,
                            message: '新建成功',
                            type: 'success'
                            });
                        this.dialogFormVisible=false;
                        this.reload();
                        }else{
                            this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'error'
                            });
                        }
                    }) 
                  
                } 
            });
        },
        cancel(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogFormVisible=false;
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
<style>
.zsOneDialog .button-dialog{
    float: right;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 6px;
    padding: 0 15px;
    font-size: 14px;
    height: 28px;
}
.zsOne-dialog .el-dialog__header{
    height: 50px;
    text-align: center;
    padding: 13px 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 500;
    color: #1d2b3b;
    border-bottom: 1px solid #e9e9e9;
}
.zsOne-dialog .el-dialog__header .el-dialog__headerbtn{
    top: 14px;
}
.zsOne-dialog .el-dialog__body{
    background-color: #f4f4f4;
    font-size: 12px;
    padding: 0;
}
.zsOne-dialog .demo-ruleForm{
    padding: 20px;
}
.zsOne-dialog .demo-ruleForm label{
    text-align: left;
    font-size: 12px;
    color: #6b809f;   
    min-height: 22px;
    line-height: 18px;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-form-item__content{
    line-height: 30px;
}
.zsOne-dialog  .demo-ruleForm .el-form-item input{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 12px;
    padding: 0 8px;
}

.zsOne-dialog .demo-ruleForm .el-select{
    width: 100%;
}
.zsOne-dialog  .demo-ruleForm .el-select .el-input__icon{
    line-height: 30px;
    font-size: 12px;
    width: 18px;
}

.zsOne-dialog .demo-ruleForm .el-form-item textarea{
    padding: 4px 7px;
    max-height: 90px;
    font-size: 12px;
    height: 100px;
    max-height: 100px;
}

.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor.el-input{
    width: 100%;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor span{
    left: auto;
    right: 5px;
}
.zsOne-dialog .demo-ruleForm .el-form-item .el-date-editor span i{
    line-height: 30px;
}
.zsOne-dialog  .demo-ruleForm .tc-form-top{
    display: flex;
    justify-content: space-between;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops{
    width: calc(50% - 9px);
}
.zsOne-dialog .demo-ruleForm .tc-form-txt{
    padding: 10px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.zsOne-dialog .demo-ruleForm .tc-form-content{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
}
.zsOne-dialog .demo-ruleForm .tc-form-content .tc-form-contents{
    display: flex;
    justify-content: space-between;
}
.zsOne-dialog  .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .el-form-item{
    width: calc(50% - 10px);
    padding-right: 10px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .two-el-form-item .el-form-item__content{
    width: 100%;
    display: flex;
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-content .two-el-form-item .el-form-item__content .el-input{
    width: calc(50% - 10px);
}
.zsOne-dialog .demo-ruleForm .tc-form-top .tc-form-tops .tc-form-contents02 .el-form-item{
    width: 100%;
}

.zsOne-dialog .tc-form-bottom .bottom-txt{
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #108ee9;
    cursor: pointer;
}
.zsOne-dialog .fffcolor label{
    color: #fff;
}
.zsOne-dialog .tc-form-bottom .el-select .el-input{
    width: 100% !important;
}
.zsOne-dialog .el-dialog__footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
</style>


