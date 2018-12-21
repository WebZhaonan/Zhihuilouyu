<template>
    <div>
        <el-form :model="form" hide-required-asterisk ref="numberValidateForm" :rules="rules"> 
            <div class="dia03-txt">合同信息</div>              
            <div class="form-top">           
                <div class="form-public form-08">
                    <el-form-item label="默认押金单位" class="form-08-item">
                        <el-select v-model="form.mryjdw">
                        <el-option label="月" value="2"></el-option>
                        <el-option label="元" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="form-08-div">
                        <el-form-item label="默认租赁单位数量">
                            <el-select v-model="form.mrzldwsl">
                            <el-option label="m²" value="1"></el-option>
                            <el-option label="工位" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="默认基础单价单位">
                            <el-select v-model="form.mrjcdjdw">
                            <el-option label="元/m²·天" value="1"></el-option>
                            <el-option label="元/m²·月" value="2"></el-option>
                            <el-option label="元/天" value="3"></el-option>
                            <el-option label="元/月" value="4"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>             
                </div>
                <div class="form-public form-09">
                    <el-form-item label="默认计算精度">
                        <el-select v-model="form.mrjsjd">
                            <el-option label="精确计算结果保留两位小数" value="1"></el-option>
                            <el-option label="每步计算保留两位小数" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item 
                    label="默认支付类型(几月一付)" 
                    prop="lyjzmj"
                    > 
                        <el-input v-model="form.lyjzmj"  placeholder="请填写默认支付类型"></el-input>
                        <span class="form-03-span">月</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-10">
                    <el-form-item class="form-10-item">       
                        <div class="form-10-item-div">
                            默认计费类型
                            <el-tooltip placement="top">
                                <div slot="content">1、天单价=实际输入天单价 或者 月单价*12/年天数<br/>2、月单价=实际输入月单价 或者 天单价*年天数/12<br/>3、总价=（月单价*月数*面积）+（天单价*实际天数*面积）<br/>4、以天记租时没有月数，即套用公式3计算，其中月数为0计算<br/>5、以月记租时，整月按公式3第一项计算，余下的天数按照公式3的第二项计算<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.jf">
                            <el-option label="按实际天数计算" value="1"></el-option>
                            <el-option label="按月计费" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="form-10-div">
                        <el-form-item label="默认提前付款时间">
                            <el-input v-model="form.fktime" placeholder="请输入提前付款时间"></el-input>
                        </el-form-item>
                        <el-form-item label="日期">
                            <el-select v-model="form.rq">
                            <el-option label="工作日" value="1"></el-option>
                            <el-option label="自然日" value="2"></el-option>
                            <el-option label="指定日期" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>   
                </div>
                <div class="form-public form-09">
                    <el-form-item 
                    label="默认天数"
                    prop="mrnts"
                    >
                        <el-input v-model="form.mrnts"></el-input>
                        <span class="form-03-span">天</span>
                    </el-form-item>
                    <el-form-item 
                    label="单价保留小数点"
                    prop="xsd"
                    >
                        <el-input v-model="form.xsd"></el-input>
                        <span class="form-03-span">位</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-11">
                    <el-form-item>       
                        <div class="form-11-div">
                            租期划分方式
                            <el-tooltip placement="top">
                                <div slot="content">按起始日划分<br/>次月按自然月划分(仅一月一付有效)<br/>按自然月划分(首月非整自然月划入第一期)<br/>按自然月划分(首月非整自然月算一个月)<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.zqhffs">
                            <el-option label="按起始日划分" value="1"></el-option>
                            <el-option label="次月按自然月划分(仅一月一付有效)" value="2"></el-option>
                            <el-option label="按自然月划分(首月非整自然月划入第一期)" value="3"></el-option>
                            <el-option label="按自然月划分(首月非整自然月算一个月)" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>       
                        <div class="form-11-div">
                            天单价换算规则
                            <el-tooltip placement="top">
                                <div slot="content">按年换算，按自然月换算</div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.hsgz">
                            <el-option label="按年换算" value="1"></el-option>
                            <el-option label="按自然月换算" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>   
            <div class="dia03-txt">物业信息</div>              
            <div class="form-top">
                <div class="form-public form-09">
                    <el-form-item label="物业类型">
                        <el-select v-model="form.wylx">
                            <el-option label="写字楼" value="1"></el-option>
                            <el-option label="住宅" value="2"></el-option>
                            <el-option label="商用" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item 
                    label="物业默认支付类型"
                     prop="wyzflx"
                    >
                        <el-input v-model="form.wyzflx" placeholder="请输入物业默认支付类型"></el-input>
                        <span class="form-03-span">月</span>
                    </el-form-item>      
                </div>
                <div class="form-public form-12">
                    <el-form-item 
                    label="默认物业费"
                     prop="mrwyf"
                    >
                        <el-input class="form-12-input" v-model="form.mrwyf" placeholder="请输入默认物业费"></el-input>
                        <el-select v-model="form.wyytf">
                            <el-option label="元/㎡·月" value="2"></el-option>
                            <el-option label="元/㎡·天" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="物业费提前付款时间">
                        <el-input class="form-12-input" v-model="form.wyfkrq" placeholder="请输入物业费提前付款时间"></el-input>
                        <el-select v-model="form.wyrq">
                            <el-option label="工作日" value="1"></el-option>
                            <el-option label="自然日" value="2"></el-option>
                            <el-option label="指定日期" value="3"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item label="物业费默认押金单位">
                        <el-select v-model="form.wyyjdw">
                            <el-option label="元" value="1"></el-option>
                            <el-option label="月" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="默认计算精度">
                        <el-select v-model="form.wy_mrjsjd">
                            <el-option label="精确计算结果保留两位小数" value="1"></el-option>
                            <el-option label="每步计算保留两位小数" value="2"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item 
                    label="单价保留小数点"
                     prop="djblxsd"
                    >
                        <el-input v-model="form.djblxsd"></el-input>
                        <span class="form-03-span">位</span>
                    </el-form-item>
                    <el-form-item label="默认物业费计费类型">
                        <el-select v-model="form.mrwyfjflx">
                            <el-option label="按实际按天数计费" value="1"></el-option>
                            <el-option label="按月计费" value="2"></el-option>
                        </el-select>
                    </el-form-item>      
                </div>
                <div class="form-public form-09">
                    <el-form-item 
                    label="默认年天数"
                     prop="wymrnts"
                    >
                        <el-input v-model="form.wymrnts"></el-input>
                        <span class="form-03-span">天</span>
                    </el-form-item>  
                    <el-form-item></el-form-item> 
                </div>
                <div class="form-public form-11">
                    <el-form-item>       
                        <div class="form-11-div">
                            租期划分方式
                            <el-tooltip placement="top">
                                <div slot="content">按起始日划分<br/>次月按自然月划分(仅一月一付有效)<br/>按自然月划分(首月非整自然月划入第一期)<br/>按自然月划分(首月非整自然月算一个月)<br/></div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.wyzqhffs">
                            <el-option label="按起始日划分" value="1"></el-option>
                            <el-option label="次月按自然月划分(仅一月一付有效)" value="2"></el-option>
                            <el-option label="按自然月划分(首月非整自然月划入第一期)" value="3"></el-option>
                            <el-option label="按自然月划分(首月非整自然月算一个月)" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>       
                        <div class="form-11-div">
                            天单价换算规则
                            <el-tooltip placement="top">
                                <div slot="content">按年换算，按自然月换算</div>
                                <i class="el-icon-question"></i>
                            </el-tooltip>
                        </div>
                        <el-select v-model="form.wyhsgz">
                            <el-option label="按年换算" value="1"></el-option>
                            <el-option label="按自然月换算" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </div>
            <div class="dia03-button">
                <div class="dia03-button-content" v-for="(item,i) in shuilvs" :key="i">            
                    <div class="dia03-txt">税率信息</div>
                    <i class="el-icon-close" @click="hide(item)"></i>
                    <div class="form-top">
                        <div class="form-public form-09">
                            <el-form-item label="费用类型">
                                <el-select v-model="item.coid">
                                    <el-option :label="typeItem.name" :value="typeItem.id" v-for="(typeItem, index) in type" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="货物名称">
                             <el-autocomplete
                            v-model="item.value"
                            :fetch-suggestions="querySearchAsync"
                            placeholder="请输入货物名称"
                            @select="handleSelect"
                            style="width:100%"
                            ></el-autocomplete>
                            </el-form-item>      
                        </div>
                        <div class="form-public form-09">
                            <el-form-item label="商品编码">
                                <el-input v-model="item.goods_code" placeholder="请输入商品编码"></el-input>
                            </el-form-item>
                            <el-form-item label="税率">
                                <el-input v-model="item.set" placeholder="请输入税率"></el-input>
                            </el-form-item>      
                        </div>
                        <div class="form-public form-09">
                            <el-form-item label="优惠政策标识">
                                <el-select v-model="item.discount_type">
                                    <el-option label="是" value="1"></el-option>
                                    <el-option label="否" value="0"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="优惠政策名称">
                                <el-input v-model="item.discount" placeholder="请输入优惠政策名称"></el-input>
                            </el-form-item>      
                        </div>
                    </div>
                </div>
         <el-button @click="addsls()"><i class="el-icon-plus"></i>税率信息 |</el-button>
            </div>     
             <div class="dia03-txt">收据编号</div>    
             <div class="form-top">
                 <div class="form-public form-09">
                            <el-form-item label="收据编号规则" prop="bhruls">
                                <el-select v-model="form.bhruls"> 
                                    <el-option :label="ruleItem.name" :value="ruleItem.id" v-for="(ruleItem, index) in rule" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
     
                        </div>
            </div> 
            <div class="dia03-txt">默认入账方式</div>
            <div class="form-top form-radio">
                <el-radio v-model="radio01" label="1" >权责发生制（默认）</el-radio>
                <el-radio v-model="radio01" label="2">收付实现制</el-radio>
            </div> 
            <div class="dia03-txt">摊销方式</div>
            <div class="form-top form-radio">
                <el-radio v-model="radio02" label="1" >按租金条款（默认）</el-radio>
                <el-radio v-model="radio02" label="2">按合同总价分摊</el-radio>
                <el-radio v-model="radio02" label="3">按租金条款起始日分摊</el-radio>
            </div> 
        </el-form>
        <div class="xyb">
            <el-button  type="primary" @click="commitUp('numberValidateForm')">保存</el-button>
        </div>     
    </div>  
</template>

<script>
import { costtype }  from '@/axios/api'; //通用费用类型
import { goodsname } from '@/axios/api' //货物名称
import { buildset } from '@/axios/api' //默认设置
import { receiptrule } from '@/axios/api' //收据编号规格
import { buildsetDetail } from '@/axios/api' //获取默认设置详情
import { buildsetEdit } from '@/axios/api' //编辑默认设置
export default {
    name: 'Dialog03',
    inject: ['reload'],
       props: {
      rowId: String,
      required: true
    },
    data(){
        return{
            form:{
                lyjzmj:'',
                mryjdw: '1',
                mrzldwsl: '1',
                mrjcdjdw: '1',
                mrjsjd: '1',
                jf: '1',
                rq: '1',
                fktime:'',
                mrnts: '365',
                xsd: '2',
                zqhffs: '1',
                hsgz: '1',
                wylx: '1',
                wyzflx:'',
                wyytf: '1',
                wyfkrq:'',
                wyrq: '1',
                wyyjdw: '1',
                wy_mrjsjd:'1', 
                wymrnts:'365',      
                wyzqhffs:'1',  
                wyhsgz:'1',  
                mrwyf:'',     
                djblxsd: '2',
                mrwyfjflx: '2',
                yhName:'',
                hyname:'',
                bhruls:'',
            },
             rules: {
          lyjzmj: [{ required: true, message: '请输入默认支付类型(数字)', trigger: 'change' }],
          mrwyf: [{ required: true, message: '请输入默认物业费(数字)', trigger: 'change' }],
          bhruls: [{ required: true, message: '请选择编号规则', trigger: 'change' }],
            },
            shuilvs:[
            ],
            restaurants: [],
            timeout:  null,
            type:[],
            rule:[],
            value:'',
            radio01: '1',
            radio02: '1',
            selectIndex: 3
        }
    },
    mounted(){
        // 获取默认设置详情
      if(this.rowId){
           buildsetDetail({   
            id:this.rowId                                             
            }).then(res => {
                // console.log(JSON.stringify(res))
                if(res.flag == 0){ 
                    this.form.mryjdw = res.data.deposit_unit;
                    this.form.mrzldwsl = res.data.number_unit;
                    this.form.mrjcdjdw = res.data.price_unit;
                    this.form.mrjsjd =res.data.precision;
                    this.form.lyjzmj = res.data.pay_type;
                    this.form.jf =res.data.billing_type;
                    this.form.fktime = res.data.pay_time;
                    this.form.rq = res.data.pay_time_type;
                    this.form.mrnts = res.data.year_num;
                    this.form.xsd = res.data.pay_retain;
                    this.form.zqhffs = res.data.divide;
                    this.form.hsgz = res.data.matrixing;
                    this.form.wylx = res.data.wy_type;
                    this.form.wyzflx = res.data.wy_pay_type;
                    this.form.mrwyf = res.data.wy_price;
                    this.form.wyytf = res.data.wy_price_unit;
                    this.form.wyfkrq = res.data.wy_pay_time;
                    this.form.wyrq = res.data.wy_pay_time_type;
                    this.form.wyyjdw = res.data.wy_deposit_unit;
                    this.form.wy_mrjsjd = res.data.wy_precision;
                    this.form.djblxsd = res.data.wy_pay_retain;
                    this.form.mrwyfjflx = res.data.wy_billing_type;
                    this.form.wymrnts = res.data.wy_year_num;
                    // this.form.bhruls = res.data.wy_receipt
                    if(res.data.wy_receipt ==0){
                        this.form.bhruls=''
                    }else{
                       this.form.bhruls= res.data.wy_receipt 
                    }
                    this.radio01 = res.data.wy_post_way;
                    this.radio02 = res.data.wy_amortization;
                    this.shuilvs = res.data.tax;	
                    // console.log(JSON.stringify(this.shuilvs))
                }
            })
      }
 // 通用费用类型
            let that = this
             costtype({                                                
            }).then(res => {
                if(res.flag == 0){ 
                    that.type = res.data
                } 
            })
//  货物名称
         goodsname({                                                
            }).then(res => {
                if(res.flag == 0){ 
                 this.restaurants =res.data
                }
            }) 
// 收据编号
          receiptrule({                                                
            }).then(res => {
                if(res.flag == 0){ 
                 this.rule =res.data
                }
            })
         
    },
    methods: {
        // 远程搜索
           querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
      },
    //   添加税率信息
       addsls(){
          if(this.rowId){
                 this.shuilvs.push({
               id: 0
           }); 
          }else{
               this.shuilvs.push({
            //    key: Date.now()
           });
          }
       },
    //    删除税率
       hide(item){
           var index = this.shuilvs.indexOf(item);
           if(index !== -1){
                this.shuilvs.splice(index,1);
                console.log(JSON.stringify(this.shuilvs))
           }        
       },
    //    保存提交
       commitUp(formName){
           if(this.rowId){
               let bid = this.rowId;
               let shuilvs = this.shuilvs;
               let BigArr = []
                   for (const i in shuilvs) {
                     BigArr = this.shuilvs;
                     BigArr[i].bid = bid
                }
                console.log(JSON.stringify(BigArr))
             this.$refs[formName].validate((valid) => {
            if (valid) {
                // 编辑默认设置
                 buildsetEdit({
                 bid:bid,
                 deposit_unit:this.form.mryjdw,
                 number_unit:this.form.mrzldwsl,
                 price_unit:this.form.mrjcdjdw,
                 precision:this.form.mrjsjd,
                 pay_type:this.form.lyjzmj,
                 billing_type:this.form.jf,
                 pay_time:this.form.fktime,
                 pay_time_type:this.form.rq,
                 year_num:this.form.mrnts,
                 pay_retain:this.form.xsd,
                 divide:this.form.zqhffs,
                 matrixing:this.form.hsgz,
                 wy_type:this.form.wylx,
                 wy_pay_type:this.form.wyzflx,
                 wy_price:this.form.mrwyf,
                 wy_price_unit:this.form.wyytf,
                 wy_pay_time:this.form.wyfkrq,
                 wy_pay_time_type:this.form.wyrq,
                 wy_deposit_unit:this.form.wyyjdw,
                 wy_precision:this.form.wy_mrjsjd,
                 wy_pay_retain:this.form.djblxsd,
                 wy_billing_type:this.form.mrwyfjflx,
                 wy_year_num:this.form.wymrnts,
                 wy_divide:this.form.wyzqhffs,
                 wy_matrixing:this.form.wyhsgz,
                 wy_post_way:this.radio01,
                 wy_amortization:this.radio02,
                 wy_receipt:this.form.bhruls,
                 tax:BigArr,
            }).then(res => {
                if(res.flag == 0){ 
                     this.$message({
                      message: '修改成功',
                      type: 'success',
                      duration: 1000
                    });
                    this.reload();
                  this.$emit("fsval",this.selectIndex);
                }else{
                       this.$message({
                      message: res.msg,
                      type: 'error',
                      duration: 1000
                    });
                }
            }) 
            }
                })
           }else{
            //    新建默认设置
            let bid = JSON.parse(sessionStorage.getItem('bid'));
            let shuilvs = this.shuilvs;
            let BigArr = []
                   for (const i in shuilvs) {
                     BigArr = this.shuilvs;
                     BigArr[i].bid = bid.id
                }
                this.$refs[formName].validate((valid) => {
            if (valid) {
                 buildset({
                 bid:bid.id,
                 deposit_unit:this.form.mryjdw,
                 number_unit:this.form.mrzldwsl,
                 price_unit:this.form.mrjcdjdw,
                 precision:this.form.mrjsjd,
                 pay_type:this.form.lyjzmj,
                 billing_type:this.form.jf,
                 pay_time:this.form.fktime,
                 pay_time_type:this.form.rq,
                 year_num:this.form.mrnts,
                 pay_retain:this.form.xsd,
                 divide:this.form.zqhffs,
                 matrixing:this.form.hsgz,
                 wy_type:this.form.wylx,
                 wy_pay_type:this.form.wyzflx,
                 wy_price:this.form.mrwyf,
                 wy_price_unit:this.form.wyytf,
                 wy_pay_time:this.form.wyfkrq,
                 wy_pay_time_type:this.form.wyrq,
                 wy_deposit_unit:this.form.wyyjdw,
                 wy_precision:this.form.wy_mrjsjd,
                 wy_pay_retain:this.form.djblxsd,
                 wy_billing_type:this.form.mrwyfjflx,
                 wy_year_num:this.form.wymrnts,
                 wy_divide:this.form.wyzqhffs,
                 wy_matrixing:this.form.wyhsgz,
                 wy_post_way:this.radio01,
                 wy_amortization:this.radio02,
                 wy_receipt:this.form.bhruls,
                 tax:BigArr,
            }).then(res => {
                if(res.flag == 0){ 
                     this.$message({
                      message: '保存成功',
                      type: 'success',
                      duration: 1000
                    });
                    this.reload();
                  this.$emit("fsval",this.selectIndex);
                }else{
                       this.$message({
                      message: res.msg,
                      type: 'error',
                      duration: 1000
                    });
                }
            }) 
            }
                })
           }
            // this.$emit("fsval",this.selectIndex);
        }
    }
}
</script>


