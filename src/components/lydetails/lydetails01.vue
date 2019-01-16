<template>
    <div class="lydetails01">
        <div class="echars list" v-if="info!=''">
            <p style="text-align:center;width:10%;padding-bpttom:10px;">楼层</p>
             <div v-for="item in info" :key="item.id" class="info">
                 <div class="left1">{{item.name}}</div>
                 <div class="left2">{{item.room_area}}</div>
                 <div class="left3">
                     <div class="infoChiled">
                        <div v-for="(childitem,index) in item.room" :key="index"
                         v-bind:style="{width:childitem.ratio + '%',background:childitem.ratio>50?'#4494F0':childitem.ratio<10?'#4494F0':'#E5E9F3',
                         color:childitem.ratio>50?'#fff':childitem.ratio<10?'#fff':'#000',lineHeight:childitem.ratio>5?'50px':'25px',paddingLeft:childitem.ratio>5?'20px':'0'}" 
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


