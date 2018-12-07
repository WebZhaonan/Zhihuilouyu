<template>
    <Drawer :closable="true" width="1000" class="isct" v-model="isopendarwer" @on-close='aaa'>
        <div slot="header" class="drawer-header">楼宇信息</div>
        <div class="xx">
            <div class="xx01">
                <div class="xx01-top">楼宇信息</div>
                <ul class="xx01-buttom">
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                    <li>
                        <div>省份</div>
                        <div>北京市</div>
                    </li>
                </ul> 
            </div>
        </div>
    </Drawer>
</template>
<script>
import Vue from 'vue'
import { Drawer } from 'iview';
Vue.component('Drawer', Drawer);
export default {
    name: 'fyct',
    data(){
       return{
           isopendarwer:true
       }
    },
    methods:{
        aaa(){
        }
    }
}
</script>
<style>
.fyct .ivu-drawer-header{
    height: 51px;
    line-height: 1.5;
}
.fyct .drawer-header{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #1a2838;
}
.fyct .ivu-drawer-close{
    left: 16px;
} 
.fyct .ivu-drawer-body{
    padding: 0;
}
.fyct .xx{
    background-color: #f4f4f4;
    width: 100%;
    height: calc(100% - 51px);
    box-sizing: border-box;
    padding: 20px;
}
.fyct .xx .xx01{
    width: 100%;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}
.fyct .xx .xx01 .xx01-top{
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    color: #1a2838;
}
.fyct .xx .xx01 .xx01-buttom{
    padding: 20px;
    overflow: hidden;
}
.fyct .xx .xx01 .xx01-buttom li{
    width: 25%;
    float: left;
    padding: 0 10px 7px 0;
    margin-bottom: 24px;
    margin: 5px 0;
}
.fyct .xx .xx01 .xx01-buttom li div:first-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: #7085a1;
    line-height: 18px;
}
.fyct .xx .xx01 .xx01-buttom li div:last-child{
    border-right: 1px solid rgb(224, 224, 224);
    padding-right: 10px;
    width: 100%;
    color: #353b4b;
    font-size: 14px;
}
</style>


