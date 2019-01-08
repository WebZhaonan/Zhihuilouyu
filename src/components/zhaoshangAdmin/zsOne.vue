<template>
  <div>
    <div class="zsOne">
      <!-- <div class="block">
        <ul>
          <li>今日</li>
          <li>昨日</li>
          <li>本周</li>
          <li>本月</li>
        </ul>
        <el-date-picker
          class="date-input"
          v-model="value6"
          size="mini"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
          <el-input 
          class="zsOne-input"
          placeholder="搜索房号"
          prefix-icon="el-icon-search">
        </el-input>
      </div> -->
      <div class="xzdl">
      </div>
      <ul class="khgl">
        <li>
            <div class="khgl-content">
                <div>初次接触</div>
                <div>{{info.cc}}</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>潜在客户</div>
                <div>{{info.qz}}</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>意向客户</div>
                <div>{{info.yx}}</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>成交客户</div>
                <div>{{info.cj}}</div>
            </div>
        </li>
        <li>
            <div class="khgl-content">
                <div>流失客户</div>
                <div>{{info.ls}}</div>
            </div>
        </li>
    </ul> 
    </div>
    <zsOnetable></zsOnetable>
  </div>
  
</template>

<script>
import zsOnetable from '@/components/zhaoshangAdmin/zsOnetable'
import { Khcensus } from '@/axios/api' // 客户管理统计
export default {
  name: 'zsOne',
  components:{
    zsOnetable
  },
  data () {
    return {
      value6: '',
      info:[]
    }
  },
  mounted(){
    let that = this
      // 客户管理统计
             Khcensus({                                                  
            }).then(res => {
                if(res.flag == 0){  
                that.info= res.data
                } 
            }) 
  },
  methods: {
      
  }
}
</script>
<style>
.khgl{
  padding: 20px 30px;
  background: #fff;
}
.khgl li{
  padding-left: 20px;
  display: inline-block;
  min-width: 120px;
  cursor: pointer;
  box-sizing: border-box;
}
.khgl .khgl-content{
  font-size: 12px;
  margin: 5px 0;
  padding-right: 10px;
  border-right: 1px solid rgb(224, 224, 224);
}
.khgl .khgl-content div:first-child{
  width: 100%;
  min-height: 22px;
  color: #7085a1;
}
.khgl .khgl-content div:last-child{
  width: 100%;
  color: #353b4b;
  min-height: 36px;
  line-height: 36px;
  font-size: 24px;
} 
.zsOne{
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.zsOne .block{
  height: 50px;
  border-bottom: 1px solid #edf0f2;
  padding: 0 20px;
}
.zsOne .block ul{
  float: left;
  overflow: hidden;
}
.zsOne .block .zsOne-input{
  width: calc(100% - 640px);
}
.zsOne .block .date-input{
  margin-top: 12px;
}
.zsOne .zsOne-input{
  margin-left: 8px;
}
.zsOne .zsOne-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 32px;
}
.zsOne .el-input span i{
    font-size: 16px;
    color: #6f7e95;
}
.zsOne .block ul li{
  float: left;
  height: 50px;
  color: #000;
  line-height: 50px;
  margin: 0 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 12px;
}  
</style>


