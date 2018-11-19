<template>
  <div style="width:100%;height:100%;">
       <el-container style="width:100%;height:100%;">
                      <!--头部-->
<el-header class="el-header" style="height:51px;line-height:51px;">
    <el-row :gutter="20">
  <el-col :span="4" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
      <div class="right">
         <el-col :span="1"><div class="grid-content bg-purple"  @click.prevent="collapse"><span><i class="fa fa-outdent" style="cursor:pointer;"></i></span></div></el-col>
  <el-col :span="15"><div class="grid-content bg-purple">
      <el-menu :default-active="isSelect" router class="el-menu-demo nav-ul" mode="horizontal"  @select="handleSelect" background-color="#e9eaeb" text-color="#4a5267"
  >
 <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="nav_li" @click="selectNav(item.name)">
        {{ item.navItem }}
</el-menu-item>
</el-menu>
      </div>
      </el-col>
  <el-col :span="4" style="float:right">
      <div class="grid-content bg-purple" style="text-align:right">
          <!--问卷调查 -->
      <el-dropdown>
        <i class="el-icon-document icon" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>问卷调查</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--下载中心-->
      <el-dropdown>
          <i class="el-icon-download icon" style="margin-right: 15px"></i>
           <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>下载中心</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
       <!-- 个人中心 -->
       <el-dropdown>
       <i class="fa fa-user-o icon" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>赵楠</el-dropdown-item>
          <el-dropdown-item>
             <router-link tag='span' :to="{ path:'/main' }" >个人中心</router-link>
            </el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      </el-col>
      </div>
</el-row>
 </el-header>
  <!--左侧菜单 -->
        <el-aside width="240px" v-show="!collapsed">
    <el-menu style="background-color:#252834">
      <!-- 楼宇列表 -->
      <el-menu class="Llist">
        <li v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass :'']" v-on:click="navClickEvent(items,index)">
          <img :src="item.src" alt="">
              <div class="L-tex">
              <span>{{item.text}}</span><br>
              <span style="color:#828692">{{item.mianji}}</span>
              </div>
        </li>
      </el-menu>
     <!-- 结束-->
     <!-- 楼宇勾选-->
      <el-collapse accordion>
       <div class="title_list">
         <div class="title_info">
          商业项目
           </div>
           <el-collapse-item>
        <i class="el-icon-close"></i>
     <template slot="title">
    </template>
     <el-checkbox-group v-model="checkList">
    <el-checkbox label="高科"></el-checkbox>
    <el-checkbox label="西安绿地"></el-checkbox>
    <el-checkbox label="恒大绿洲"></el-checkbox>
  </el-checkbox-group>
    <el-button type="primary" class="seionBtn">保存</el-button>
  </el-collapse-item>
    </div>
    </el-collapse>
                <div class="addBtn">
      <el-button type="primary" style="margin-top:20px">新建集合</el-button>
      <el-button type="primary">同步集合</el-button>
    </div>
    <!-- 底部两按钮 -->
    </el-menu>
    <div class="boDiv"></div>
  </el-aside>
 <el-container style="max-height:1000px; border: 1px solid #eee;border-top:0px" :class="collapsed?'closeMainBox':'mainBox'">
 <!--中间渲染部分-->
    <el-main>
     <router-view>
    </router-view>
    </el-main>
  </el-container>
</el-container>
 </div>
</template>
<script>
export default {
  name: "Home",
  data() {
      return {
        sysName:'智慧楼宇',
        collapsed:false,
        isSelect:'/',
        navList:[
            {name:'/',navItem:'集合'},
            {name:'/page1',navItem:'工作流'},
        ],
        checkList: [],
        commonClass:'list___2Hba-li',
        activeClass:'active',
          items:[
          {
            text: '海荣名城',
            mianji:'0.31万m²',
            src: require('../assets/3 (1).png'),
            active : false
          },
          {
            text: '海荣名城',
            mianji:'0.31万m²',
            src:require('../assets/3 (1).png'),
            active : false
          },
          {
             text: '海荣名城',
            mianji:'0.31万m²',
            src:require('../assets/3 (1).png'),
            active : false
          },
          {
             text: '海荣名城',
            mianji:'0.31万m²',
            src:require('../assets/3 (1).png'),
            active : false
          }
        ]
      }
    },
     mounted () {
      this.isSelect = this.$route.path
},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
      selectNav (name) {
        this.isSelect = name;
      },
       navClickEvent:function(items,index){
      items[index].active = !items[index].active;
    },
    //折叠导航栏
			collapse:function(){
			this.collapsed=!this.collapsed;
      },
    // 选中状态
  }
};
</script>
<style>
.active{
  border: 1px solid rgba(255,141,31,.8) !important;
  border-radius:2px !important;
}
.el-icon-close{
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 12px;
    font-weight: bold
}
.addBtn button:hover{
      background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button:focus, .addBtn button:hover{
    background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button:active{
   background: #ff8d1f;
    border-color: #ff8d1f;
    color: #fff;
}
.addBtn button{
     width: 125px;
    height: 35px;
    border-radius: 2px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    background-color: #ff8d1f;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    line-height: 35px;
    margin: 10px auto;
    padding: 0;
    border: none;
    margin-left: 10px;
    float: none;
}
.seionBtn{
      float: right;
    width: 50px;
    height: 20px;
    border: 0;
    padding: 0;
    margin: 10px 0;
    outline: 0;
    font-size: 12px;
    background-color: #4494f0;
    margin-right: 20px
}
.el-checkbox{
  display: block;
  text-align: left;
  color: #fff;
  margin-left: 30px;
}
.el-collapse-item__wrap{
background-color: #1a1c24;
border-bottom: none;
color: #fff;
}
.el-collapse-item__content{
  color: #fff;
}
.title_list{
  width:100%;
 background-color: #1a1c24;
 position: relative;
}
.title_info{
  width: 85%;
    height: 48px;
    color: #fff;
    line-height: 48px;
    cursor: pointer;
    font-size: 13px;
    text-align: left;
    text-indent: 30px;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
}
.el-collapse-item__arrow{
  font-size: 16px;
  color:#fff;
  font-weight: bold;
  position:relative;
  z-index: 1;

}
.el-collapse-item{
      width: 100%;
}
.el-collapse{
  border:none;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
      width: 100%;
    position: fixed;
    top: 0px;
    z-index: 100;
    transform: translateY(0px);
}

.el-aside {
  color: #333;
}
.el-header {
  background-color: #e9eaeb;
  padding: 0 11px;
}
.el-menu--horizontal>.el-menu-item{
    width: 160px;
    height:50px;
    line-height:50px
}
.nav_li:focus, .nav_li:not(.is-disabled):hover{
    background-color:#f2f3f5 !important;
}
.nav-ul .is-active{
     border-bottom:2px solid transparent !important;
     background-color:#f3f2f5 !important;
}
.el-collapse-item__header{
 background-color: #1a1c24;
 border-bottom: 0;
}
.icon{
    font-size:18px;
    font-weight:400;
    color:#000;
    margin-right: 30px !important;
    cursor: pointer;
}
.el-dropdown-menu{
    padding:0px 5px;
 }
 	.logo {
				height:51px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				border-right-style: solid;
        color:#fff;
			}
      	.list___2Hba-li img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
        .txt {
					color:#fff;
				}
			.logo-width{
				width:240px;
        background-color:#1c1f27;
			}
			.logo-collapse-width{
				width:0px
			}
      .Llist{
        border-right:none;
        background:#252834;
        color:#fff;
        font-size:14px;
        overflow: hidden;
      }
      .Llist img{
            float: left;
          width: 60px;
          height: 40px;
          background: 50%/cover no-repeat;
      }
      .L-tex{
        float: left;
    width: 110px;
    margin-left: 0px;
    text-align: left;
    font-size: 14px;
    margin-top:10px ;
      }
    .list___2Hba-li{
    display: inline-block;
    width: 210px;
    height: 60px;
    margin-top: 4px;
    /* padding: 8px 10px; */
    border: 1px solid #1a1c24;
    font-weight: 400;
    list-style: none;
    background-color: #1a1c24;
    cursor: pointer;
    transition: all .3s ease;
}
.el-aside{
  position: fixed;
    top: 50px;
    bottom: 0;
    left: -239px;
    z-index: 120;
    /* overflow: hidden; */
    width: 240px;
    height: 100%;
    background-color: #252834;
        transition: transform .2s ease;
    transform: translate3d(240px,0,0);

}
.el-aside::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 0px;
}
.el-aside::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.2);
    background: #5d647b;
}
.el-aside::-webkit-scrollbar-track {/*滚动条里面轨道*/
    opacity: 0.5;
}
.mainBox{
  position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    max-height: 100%;
    height: 100%;
    left:240px;
    width: calc(100% - 240px);
}
.closeMainBox{
  left: 0;
  width: 100%;
}
.boDiv{
  height: 100px;
}
.el-menu{
  border-right:0;
}
.el-main{
    padding: 0;
        padding-top:51px;
        text-align: left;
}
</style>
