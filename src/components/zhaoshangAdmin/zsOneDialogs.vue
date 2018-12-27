<template>
    <el-dialog title="编辑客户" :visible.sync="visible" class="zsOne-dialog" width="1000px" top="100px" center :before-close="modalClose" :append-to-body="true">               
        <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm"> 
            <div class="tc-form-top">
                <div class="tc-form-tops">
                    <div class="tc-form-txt">
                        <span>客户信息</span>
                    </div>
                    <div class="tc-form-content" style="height: 610px;overflow-y: auto;">
                        <div class="tc-form-contents">
                            <el-form-item label="客户" prop="kh">
                                <el-input v-model="info.name" placeholder="请填写租客"  ref="kh"></el-input>
                            </el-form-item>
                            <el-form-item label="跟进人" prop="gjr">    
                                <el-input v-model="ruleForm.gjr" disabled></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="行业" prop="hy">    
                                    <el-select v-model="info.iid" ref="hy">
                                        <el-option
                                        v-for="item in hy"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            <el-form-item label="客户联系人" prop="khlxr">    
                                <el-input v-model="info.linkman" ref="khlxr" placeholder="请填写客户联系人"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="预计签约时间" prop="yjqysj">
                                    <el-date-picker
                                            v-model="info.signtime"
                                            type="date"
                                            placeholder="请选择日期"
                                            ref="yjqysj"
                                            >
                                            </el-date-picker>
                                        </el-form-item>
                            </el-form-item>
                            <el-form-item label="需求数量/㎡" prop="xqsl01,xqsl02" class="two-el-form-item">    
                                <el-input v-model="info.need_min" ref="xqsl01" placeholder="Min"></el-input>
                                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                <el-input v-model="info.need_max" ref="xqsl02" placeholder="Max"></el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents">
                            <el-form-item label="来访时间" prop="lfsj">
                                <el-date-picker
                                v-model="info.visittime"
                                type="date"
                                placeholder="请选择预计签约时间"
                                ref="lfsj"
                                >
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="客户状态" prop="khzt">    
                                <el-select v-model="info.sid" ref="khzt">
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
                                <el-select v-model="info.cid" ref="lfqd">
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
                                  <el-select v-model="info.bid" ref="qdlxr">
                                        <el-option
                                        v-for="item in qdlxr"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">               
                                        </el-option>
                                    </el-select> 
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                            <el-form-item label="备注" prop="bz">    
                                <el-input
                                type="textarea"
                                :rows="1"
                                style="height:100px;"
                                placeholder="请填写备注信息"
                                v-model="info.remark" ref="bz">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div class="tc-form-contents tc-form-contents02">
                         <el-form-item label="成交几率" prop="cjjl">    
                                    <el-slider v-model="ruleForm.cjjl" ref="cjjl" style="float:left;width:90%;"></el-slider>
                                    <span style="float:right;margin-top:4px;">
                                    {{info.probability}}%
                                    </span>
                                </el-form-item>
                        </div>
                    </div>
                </div>
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
                                                    <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.name}}</span>
                                                      <span style="display:inline-block;width:28%;padding-right:100px;padding-left:50px">{{item.level_name}}</span>
                                                        <span style="display:inline-block;width:46%;">{{item.area}}/m²</span>
                                                </el-checkbox>
                                            </div>
                                        </el-checkbox-group>
                                    </el-tab-pane>
                                    <el-tab-pane label="已租" name="second" >
                                        
                                    </el-tab-pane>
                                    <el-tab-pane label="所有房源" name="third" >
                                        
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
                <div class="bottom-txt" @click="show2 = !show2">更多信息</div>
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
                                            <el-input v-model="info.region" ref="cqs" placeholder="请输入城市/区域/商圈"></el-input>
                                        </el-form-item>
                                    </div>
                                    <div class="tc-form-contents">
                                        <el-form-item label="期望价格" prop="qwjg" class="two-el-form-item">
                                            <el-input v-model="info.price_min" ref="qwjg01" placeholder="Min"></el-input>
                                            &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                            <el-input v-model="info.price_max" ref="qwjg02" placeholder="Max"></el-input>
                                        </el-form-item>
                                        <el-form-item label="qwjgdw" prop="qwjgdw" class="fffcolor">    
                                            <el-select v-model="info.unit" ref="qwjgdw">
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
                                            <el-input v-model="info.user_address" ref="dqdz" placeholder="请输入当前地址"></el-input>
                                        </el-form-item>
                                        <el-form-item label="当前合同到期日" prop="dqhtdqr">
                                            <el-date-picker
                                            v-model="info.user_time"
                                            type="date"
                                            placeholder="请选择日期"
                                            ref="dqhtdqr"
                                            >
                                            </el-date-picker>
                                        </el-form-item>
                                    </div>
                                    <div class="tc-form-contents">
                                        <el-form-item label="当前租赁数" prop="dqzls" class="two-el-form-item">
                                            <el-input v-model="info.rent_num" ref="dqzls" placeholder="请输入当前面积"></el-input>
                                            <el-select v-model="ruleForm.dqzls02" style="width: calc(50% - 40px);padding-left: 10px;box-szie:border-box;">
                                                <el-option
                                                label="m²"
                                                value="0">               
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="当前租金" prop="dqzj" class="two-el-form-item">
                                            <el-input v-model="info.user_money" ref="dqzj" placeholder="请输入当前租金"></el-input>
                                            <el-select v-model="info.user_unit" ref="dqzjdw" style="width: calc(50% - 10px);padding-left: 10px;box-szie:border-box;">
                                                <el-option
                                                v-for="item in userUnit"
                                                :key="item.id"
                                                :label="item.label"
                                                :value="item.value">               
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <div>
                                           <!-- <div>{{info.signtime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</div> -->
                                        </div>
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
            <el-button type="primary" @click="save(info.id)">修改</el-button>
        </div>   
    </el-dialog>
</template>
<script>
import fymsg from "@/components/fangyuanAdmin/fymsg"
import { industrylet } from '@/axios/api' //行业
import { clientstatusList } from '@/axios/api'  // 获取客户状态
import { channels } from '@/axios/api' //获取来访渠道列表
import { broker } from '@/axios/api' //获取经纪人列表
import { getList } from '@/axios/api'  //楼宇列表
import { roomFy} from '@/axios/api'  //获取房源
import { clientList } from '@/axios/api' //客户详情
import { editClisent } from '@/axios/api' //编辑客户
export default {
    name: 'zsOneDialogs',
    inject: ['reload'],
    components:{
        fymsg
    },
    props:{
        visible: {
            type: Boolean,
            default: false
        },
      rowId: String,
      required: true
    },
    data(){
        return{
            ruleForm:{
                kh: '',
                gjr: '',
                khzt: '',
                lfqd: '',
                qwjgdw: '',
                dqzls02: '',
                dqzj02: '',
                cjjl:0 
            },
            info:[],
            hy:[],
            rules: {          
            },
            khzt:[],
            lfqd:[],
            qdlxr:[],
            xsgd: '显示更多',
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
            show2: true,
             activeIndex:'0',
            activeName2: 'first',
            fyList:[],
            checkList: [],
            kzs:[
            ]
        }
    },
    mounted(){
        let that = this;
        // 获取客户状态列表
             clientstatusList({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.khzt=res.data; 
                } 
            }) 
          //行业
               industrylet({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.hy=res.data; 
                } 
            }) 
             //获取来访渠道
            channels({                                                 
            }).then(res => {
                if(res.flag == 0){  
                     that.lfqd=res.data; 
                } 
            }) 
               // 获取经纪人列表
              broker({                                                 
            }).then(res => {
                if(res.flag == 0){
                that.qdlxr=res.data; 
                } 
            }) 
        // 客户详情
          clientList({   
               id:that.rowId                                            
            }).then(res => {
                if(res.flag == 0){
                    console.log(JSON.stringify(res))
                    that.info = res.data[0]
                    let value = parseInt(res.data[0].probability)
                    this.ruleForm.cjjl = value;
                       let checkArr = []
                    for (const key in res.data[0].room) {
                        checkArr.push(res.data[0].room[key].rid);
                    }
                 this.checkList = checkArr;
                } 
            })
              // 楼宇列表
               getList({                                                 
            }).then(res => {
                if(res.flag == 0){
                that.fyList=res.data; 
                } 
            }) 

    },
    methods:{  
           handleSelect(key) {
               //获取房源列表
           roomFy({ 
               id:key                                               
            }).then(res => {
                if(res.flag == 0){ 
                this.kzs=res.data; 
                } 
            }) 
            },
         modalClose(){
            // 关闭弹窗，触发父组件修改visible值
            this.$emit('update:visible', false);
        },
        // 修改客户
        save(rowId){
            //编辑客户
           editClisent({ 
               id:rowId,
               rid:this.checkList,
               name: this.$refs.kh.value,
               aid:this.ruleForm.gjr,
               iid:this.$refs.hy.value,
               linkman:this.$refs.khlxr.value,
               signtime:this.$refs.yjqysj.value,
               need_min:this.$refs.xqsl01.value,
               need_max:this.$refs.xqsl02.value,
               visittime:this.$refs.lfsj.value,
               sid:this.$refs.khzt.value,
               cid:this.$refs.lfqd.value,
               bid:this.$refs.qdlxr.value,
               remark:this.$refs.bz.value,
               probability:this.$refs.cjjl.value,
               region:this.$refs.cqs.value,
               price_min:this.$refs.qwjg01.value,
               price_max:this.$refs.qwjg02.value,
               unit:this.$refs.qwjgdw.value,
               user_address:this.$refs.dqdz.value,
               user_time:this.$refs.dqhtdqr.value,
               rent_num:this.$refs.dqzls.value,
               user_money:this.$refs.dqzj.value,
               user_unit:this.$refs.dqzjdw.value,
            }).then(res => {
                if(res.flag == 0){ 
                    console.log(JSON.stringify(res))
                      this.$message({
                            showClose: true,
                            message: '新建成功',
                            type: 'success'
                            });
                        this.dialogFormVisible=false;
                        this.reload();
                } 
            }) 
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


