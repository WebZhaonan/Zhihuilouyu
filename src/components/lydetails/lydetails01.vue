<template>
    <div class="lydetails01">
        <div class="echars list" v-if="info!=''">
            <div class="title">
                <p style="text-align:center;width:10%;padding-bpttom:10px;">楼层</p>
                <div class="tips">
                    <span class="color1">未租</span>
                    <span class="color2">已租</span>
                    <span class="color3">15天后到期</span>
                    <span class="color4">30天后到期</span>
                </div>
            </div>

             <div v-for="item in info" :key="item.id" class="info">
                 <div class="left1">{{item.name}}</div>
                 <div class="left2">{{item.room_area}}</div>
                 <div class="left3">
                     <div class="infoChiled">
                        <div v-for="(childitem,index) in item.room" :key="index"
                         v-bind:style="{width:childitem.ratio + '%',background:childitem.type===0?'#999':childitem.type===1?'#4494F0':childitem.type===2?'#DD5044':'#FCD11C',
                         color:'#fff',
                         lineHeight:childitem.ratio>4?'50px':'25px',
                         paddingLeft:childitem.ratio>5?'20px':'0'
                         }" 
                         class="childRoom">
                            <span  class="fjh">{{childitem.room_number}}</span>
                            <span v-bind:style="{paddingLeft:childitem.ratio>5?'10px':'0'}">
                                {{childitem.area}}
                            </span>
                            </div>
                     </div>
                    </div>
                </div>
            </div>
                    <div class="echars nolist" v-else> 
                <img src="../../assets/nolist.png" alt="">
                <p>暂无数据</p>
        </div>
    </div>
</template>
<script>
import { Poum } from '@/axios/api' //剖面图 
export default {
    name: 'lydetails01',
      props: {
      pmId: String,
      required: true
    },
  data() {
    return {
        info:[],
        infochild:[]
    }
  },
  mounted() {
      let that = this
        // 获取楼宇详情
           Poum({                    
                bid: this.pmId,                              
            }).then(res => {
                if(res.flag == 0){  
                that.info = res.data
                } 
            }) 
  },
  methods: {
  }
}
</script>
<style>
.lydetails01 .nolist{
    width: 100%;
    padding-top: 100px;
}
.lydetails01 .title{
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
}
.lydetails01 .title p{
    float: left;
    font-weight: bold;
    font-size: 18px;
}
.lydetails01 .title .tips{
    width: 90%;
    float: left;
}
.lydetails01 .title .tips span{
    padding-right: 20px;
    position: relative;
    width: 100px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: #333
}
.lydetails01 .title .tips span::before{
    content: '';
    width: 40px;
    height: 20px;
    position: absolute;
    top: -2px;
  left:-15px;
}
.lydetails01 .title .tips .color1::before{
    background: #999;
}
.lydetails01 .title .tips .color2::before{
    background: #4494F0;
}
.lydetails01 .title .tips .color3::before{
    background: #DD5044;
    left: -38px;
}
.lydetails01 .title .tips .color3{
    padding-right: 30px;
    margin-left: 20px;
}
.lydetails01 .title .tips .color4{
    padding-right: 30px;
    margin-left: 30px;
}
.lydetails01 .title .tips .color4::before{
    background: #FCD11C;
    left: -38px;
}
.lydetails01 .info{
    width: 100%;
    height: 50px;
    overflow: hidden;
    line-height: 50px;
    background: #fff;
    margin: 5px 0;
}
.lydetails01 .list{
    padding-top: 10px;
}
.lydetails01 .info .left1{
    width: 10%;
    float: left;
    text-align: center;
    font-size: 18px;
    font-weight: bold
}
.lydetails01 .info .left2{
float: left;
width: 5%;
}
.lydetails01 .info .left3{
    width: 85%;
    /* background: #000; */
    float: left;
    height: 50px;
    overflow: hidden;
}
.lydetails01 .info .left3 .childRoom{
    float: left;
    border-right: 5px solid #fff;
    text-align: left;
       overflow: hidden;
    text-overflow: ellipsis
}
.left3 .fjh{
}
</style>


