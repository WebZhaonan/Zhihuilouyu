<template>
    <ul class="pm">  
        <li>
            <div class="ul-left">
                <div class="ul-top">
                    管理数量
                    <el-tooltip placement="top">
                        <div slot="content">系统当前录入的所有面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                        <i class="fa fa-question-circle-o" aria-hidden="true" style="margin-left: 6px;color: #4494f0;font-size:16px;"></i>
                    </el-tooltip>
                    <span style="float: right;padding-left: 7px;">m²</span>
                </div>
                <div class="ul-botton">{{info.sumarea}}</div>
            </div>
            <div class="ul-right"></div>
        </li>
        <li>
            <div class="ul-left">
                <div class="ul-top">
                    在租数量
                    <el-tooltip placement="top">
                        <div slot="content">当前在租面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                        <i class="fa fa-question-circle-o" aria-hidden="true" style="margin-left: 6px;color: #4494f0;font-size:16px;"></i>
                    </el-tooltip>    
                </div>
                <div class="ul-botton">{{info.sumk}}</div>
            </div>
            <div class="ul-right"></div>
        </li>
        <li>
            <div class="ul-left">
                <div class="ul-top">
                    可招商数量
                    <el-tooltip placement="top">
                        <div slot="content">当前可招商的面积总和，若楼宇中同时存在面积和工位则无法统计。</div>
                        <i class="fa fa-question-circle-o" aria-hidden="true" style="margin-left: 6px;color: #4494f0;font-size:16px;"></i>
                    </el-tooltip>
                </div>
                <div class="ul-botton">
                    -
                </div>
            </div>
            <div class="ul-right"></div>
        </li>
        <li>
            <div class="ul-left">
                <div class="ul-top">
                    在租均价 元/㎡·天
                    <el-tooltip placement="top">
                        <div slot="content">对所有在租租赁条款的单价与面积进行加权平均计算，并按设定的单位展示，若楼宇中同时存在按面积计算和按工位计算、则无法统计。</div>
                        <i class="fa fa-question-circle-o" aria-hidden="true" style="margin-left: 6px;color: #4494f0;font-size:16px;"></i>
                    </el-tooltip>
                </div>
                <div class="ul-botton">{{info.sumc}}</div>
            </div>
            <div class="ul-right"></div>
        </li>
        <li>
            <div class="ul-left">
                <div class="ul-top">再租合同份数</div>
                <div class="ul-botton">{{info.sumb}}</div>
            </div>
            <div class="ul-right"></div>
        </li>
    </ul>
</template>
<script>
import { Lycensus } from '@/axios/api' //单个楼宇统计
export default {
    name: 'pmMsg',
      props: {
      arrId: String,
      required: true
    },
    data(){
        return{
            info:[]
        }
    },
    mounted(){
        let that = this;
        var str = this.arrId;
        var ceId = str.split(",");// 在每个逗号(,)处进行分解。
        // 获取单个楼宇统计详情
           Lycensus({                    
                bid: ceId,                              
            }).then(res => {
                if(res.flag == 0){  
                that.info = res.data
                } 
            }) 
    }
}
</script>
<style scoped>
.pm{
    overflow: hidden;
}
.pm li{
    float: left;
    min-width: 105px;
}
.pm li .ul-left{
    margin-left: 10px;
    padding-right: 14px;
    font-size: 14px;
    font-weight: 400;
    color: #353b4b;
    float: left;
}
.pm li .ul-left .ul-top{ 
    height: 25px;
    line-height: 25px;
    color: #828692;
    font-size: 12px;
    padding-right: 14px;
}
.pm li .ul-left .ul-botton{ 
    height: 56px;
    line-height: 48px;
    font-size: 24px;
    color: #353b4b;
    padding-right: 14px;
}
.pm li .ul-right{
    width: 2px;
    height: 35px;
    background-color: #edeef0;
    margin-top: 16px;
    float: right;
}
</style>

