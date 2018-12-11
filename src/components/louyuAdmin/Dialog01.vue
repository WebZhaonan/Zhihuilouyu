<template>
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules" class="LyruleForm">               
        <div class="form-top">
            <div class="form-public form-01">
                <el-form-item label="楼宇类型" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择楼宇类型">
                    <el-option :label="itemType.name" :value="itemType.id" v-for="(itemType, index) in itemAgg" :key="index"></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form-public form-02">
                <el-form-item label="省份" prop="shengfen">
                    <el-select v-model="ruleForm.shengfen"  clearable placeholder="选择省份">
                    <el-option :label="item.name" :value="item.adcode" v-for="(item, index) in province" :key="index" @click.native="provinceAd(item.adcode)">
                         <span style="float: left">{{ item.name }}</span>
                         <span style="float: right; color: #8492a6; font-size: 13px">{{ item.pinyin }}</span>
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="城市" prop="chengshi">
                    <el-select v-model="ruleForm.chengshi"  clearable placeholder="选择城市">
                    <el-option :label="cityItem.name" :value="cityItem.adcode" v-for="(cityItem, index) in city" :key="index" @click.native="cityAd(cityItem.adcode)"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域" prop="quyu">
                    <el-select v-model="ruleForm.quyu"  clearable placeholder="选择区域">
                    <el-option :label="areaItem.name" :value="areaItem.adcode" v-for="(areaItem, index) in area" :key="index"></el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="form-public form-03">
                <el-form-item label="楼宇名称" prop="lymc">
                    <el-input v-model="ruleForm.lymc" placeholder="请输入楼宇名称"></el-input>
                </el-form-item>
                <el-form-item label="具体位置" prop="jtwz">
                    <el-input v-model="ruleForm.jtwz" placeholder="请输入具体位置"></el-input>
                </el-form-item>
            </div>
            <div class="form-public form-03">
                <el-form-item label="招商联系电话" prop="zslxdh">
                    <el-input v-model="ruleForm.zslxdh" placeholder="请输入招商联系电话"></el-input>
                </el-form-item>
                <el-form-item label="所有权人" prop="syrq">
                    <el-input v-model="ruleForm.syrq" placeholder="请填写所有权人"></el-input>
                </el-form-item>
            </div>
            <div class="form-public form-03">
                <el-form-item label="楼宇建筑面积">
                    <el-input v-model="ruleForm.lyjzmj" placeholder="请填写楼宇建筑面积"></el-input>
                    <span class="form-03-span">m²</span>
                </el-form-item>
                <el-form-item label="用途">
                    <el-input v-model="ruleForm.yt" placeholder="请填写用途"></el-input>
                </el-form-item>
            </div>
            <div class="form-public form-03">
                <el-form-item label="占地面积">
                    <el-input v-model="ruleForm.zdmj" placeholder="请填写占地面积"></el-input>
                    <span class="form-03-span">m²</span>
                </el-form-item>
                <el-form-item label="建成时间">
                    <el-date-picker
                    v-model="ruleForm.value"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </div>
            <div class="form-public form-03">
                <el-form-item label="管理面积">
                    <el-input v-model="ruleForm.glmj" placeholder="请输入管理面积" disabled></el-input>
                    <span class="form-03-span">m²</span>
                </el-form-item>
                <el-form-item label="账单提前提醒天数">
                    <el-input v-model="ruleForm.zdtq" placeholder="请输入账单提前提醒天数"></el-input>
                    <span class="form-03-span">天</span>
                </el-form-item>
            </div>
            <div class="form-public form-04">
                <el-form-item label="合同编号">
                    <el-input v-model="ruleForm.htph" placeholder="请填写合同编号标识"></el-input>
                </el-form-item>
                <el-form-item label="年月" class="form-04-item">
                    <el-select v-model="ruleForm.nianyue">
                    <el-option label="年" value="nian"></el-option>
                    <el-option label="年月" value="nianyue"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="htbh">
                        返还作废合同的合同编号
                        <el-tooltip content="当勾选此项后，再新建合同的编号则优先填充因作废合同空缺的编号" placement="top">
                            <i class="el-icon-question"></i>
                        </el-tooltip>
                    </el-checkbox>
                    <el-input v-model="ruleForm.xl" placeholder="序号" disabled></el-input>
                </el-form-item>
            </div>
            <div class="form-public form-05">
                <el-form-item label="合同编号">
                    <el-upload
                        class="avatar-uploader"
                        action="http://dev.xibei.co/builadmin/upload/upload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                </el-form-item>
            </div>
        </div>
        <div class="hide-bottom">
            <span class="hide-bottom-span" @click="msgShow">更多信息</span>  
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">
                    <div class="form-public form-03">
                        <el-form-item label="项目名称">
                            <el-input v-model="ruleForm.xmmc" placeholder="请输入项目名称"></el-input>
                        </el-form-item>
                        <el-form-item label="注册地址">
                            <el-input v-model="ruleForm.zcdz" placeholder="请输入注册地址"></el-input>
                        </el-form-item>
                    </div>
                    <div class="form-public form-03">
                        <el-form-item label="收款人">
                            <el-input v-model="ruleForm.skr" placeholder="请输入收款人"></el-input>
                        </el-form-item>
                        <el-form-item label="收款公司">
                            <el-input v-model="ruleForm.skgs" placeholder="请输入收款公司"></el-input>
                        </el-form-item>
                    </div>
                    <div class="form-public form-03">
                        <el-form-item label="开户行">
                            <el-input v-model="ruleForm.khh" placeholder="请输入开户行"></el-input>
                        </el-form-item>
                        <el-form-item label="开户行账号">
                            <el-input v-model="ruleForm.khxmc" placeholder="请输入开户行账号"></el-input>
                        </el-form-item>
                    </div>
                    <div class="form-public form-03">
                        <el-form-item label="通知地址">
                            <el-input v-model="ruleForm.tzdz" placeholder="请输入通知地址"></el-input>
                        </el-form-item>
                    </div>                   
                </div>
            </transition> 
               <div slot="footer" class="dialog-footer" @click="commitUp('ruleForm')">
                <el-button type="primary">{{footermsg}}</el-button>
            </div>  
        </div>
    </el-form>
</template>

<script>
import {province} from '@/axios/api' //获取省份
import {city} from '@/axios/api' // 获取市
import {area} from '@/axios/api' // 获取区县
import { creatLy } from '@/axios/api'  //创建楼宇
import { buildType } from '@/axios/api' //获取楼宇类型

export default {
    name: 'Dialog01',
    data(){
        return{
             footermsg:'保存&下一步',
            ruleForm:{
                region: '',
                name: '',
                lymc: '',
                jtwz: '',
                zslxdh: '',
                lyjzmj: '',
                yt: '',
                zdmj: '',
                glmj: '',
                zdtq: '',
                htph: '',
                xl: '',
                xmmc: '',
                zcdz: '',
                skr: '',
                skgs: '',
                khh: '',
                khxmc: '',
                tzdz: '',
                nianyue: '年月'
            },
         rules: {
          region: [{ required: true, message: '请选择楼宇类型', trigger: 'change' }],
          shengfen: [{ required: true, message: '请选择省份', trigger: 'change' }],
          chengshi: [{ required: true, message: '请选择城市', trigger: 'change' }],
          quyu: [{ required: true, message: '请选择区域', trigger: 'change' }],
          lymc: [{ required: true, message: '请输入楼宇名称', trigger: 'change' }],
          jtwz: [{ required: true, message: '请输入具体位置', trigger: 'change' }],
          zslxdh: [{ required: true, message: '请输入联系电话', trigger: 'change' }],
          syrq: [{ required: true, message: '请输入所有权人', trigger: 'change' }],
        },
            htbh: false,
            imageUrl: '',
            show: false,
            value: '',
            province:[],
            city: [],
            area: [],
            itemAgg:[]
        }
    },
    mounted () {
        let that = this;
          // 获取省
             province({                                             
            }).then(res => {
                if(res.flag == 0){  
                     that.province=res.data;
                } 
            }) 
            // 获取楼宇类型
              buildType({                                                
            }).then(res => {
                if(res.flag == 0){
                   that.itemAgg=res.data;
                } 
            })
    },
    methods: {
        handleAvatarSuccess(res, file) {
            if(res.flag==0){
                 this.$message({
                      message: '上传成功',
                      type: 'success',
                      duration: 1000
                    });
                this.imageUrl = res.data.b;
            }else{
              this.$message.error('上传失败!');  
            }
            
        },
        beforeAvatarUpload(file) {
            const testmsg=/^image\/(jpeg|png|jpg)$/.test(file.type);
            const isLt2M = file.size / 1024 / 1024 < 2;
        if (!testmsg) {
          this.$message.error('上传图片格式不对!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return testmsg && isLt2M;
      
        },
        msgShow(){
          this.show= !this.show;
        },
        provinceAd(adcode){
              city({                    
                 adcode:adcode                            
            }).then(res => {
                if(res.flag == 0){  
                    this.city = res.data
                } 
            }) 
        },
        cityAd(adcode){
            area({                    
                 adcode:adcode                            
            }).then(res => {
                if(res.flag == 0){  
                    this.area = res.data
                } 
            })  
        },
        // 创建楼宇详细信息
        commitUp(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
        creatLy({   
            name:this.ruleForm.lymc,
            tid:this.ruleForm.region,
            build_area:this.ruleForm.lyjzmj,
            floor_area:this.ruleForm.zdmj,   
            province:this.ruleForm.shengfen,
            city:this.ruleForm.chengshi,
            area:this.ruleForm.quyu,
            address:this.ruleForm.jtwz,
            username:this.ruleForm.syrq,
            phone:this.ruleForm.zslxdh,
            use:this.ruleForm.yt,
            buildtime:this.ruleForm.value,
            bill_reminders:this.ruleForm.zdtq,
            contract_number:this.ruleForm.htph,
            images:this.imageUrl,
            more_name:this.ruleForm.xmmc,
            more_address:this.ruleForm.zcdz,
            more_payee:this.ruleForm.skr,
            more_company:this.ruleForm.skgs,
            more_bank:this.ruleForm.khh,
            more_bank_number:this.ruleForm.khxmc,
            more_notice_address:this.ruleForm.tzdz                      
            }).then(res => {
                console.log(JSON.stringify(res))
                if(res.flag == 0){  
                } 
            }) 
          }
        });
        }
    }
}
</script>
<style scoped>
 .dialog-footer{
    height: 60px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #e9e9e9;
}
</style>



