<template>
    <div class="main-Box">
        <div class="Box-top">
            <div class="demo-input-suffix">
                <el-input
                    placeholder="搜索楼宇名称"
                    prefix-icon="el-icon-search"
                    v-model="input21">
                </el-input>
                <el-button icon="el-icon-plus">楼宇</el-button>
            </div>
            <ul class="ly-msg">
                <li v-for="(item,i) in txtMsg" :key="i">
                    <div class="li-left">
                        <div style="padding-right: 14px;">
                            <div class="li-top">
                                <span>{{item.name}}</span> 
                                <span>{{item.bfb}}</span>
                                <i class="el-icon-question"></i>       
                            </div>
                            <div class="li-bottom">{{item.sl}}</div>
                        </div>
                    </div>
                    <div class="li-right"></div>
                </li>              
            </ul>
            <span class="jl"> <i class="el-icon-edit-outline"></i></span>          
        </div>
        <div class="Box-bottom">
            <div class="table-header">
                <div>楼宇列表</div>
                <i class="el-icon-more"></i>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%;border: 1px solid #e0e0e0;background-color: #fff;border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;"
                :default-sort = "{prop: 'date', order: 'descending'}"
                height="850">
                <el-table-column
                prop="date"
                label="楼宇名称"
                width="425">
                </el-table-column>
                <el-table-column
                prop="name"
                label="在租均价"
                sortable
                width="255">
                </el-table-column>
                <el-table-column
                prop="zssl"
                label="可招商数量"
                sortable
                width="212">
                </el-table-column>
                <el-table-column
                prop="zzsl"
                label="在租数量"
                sortable
                width="284">
                </el-table-column>
                <el-table-column
                prop="zzhtsl"
                label="再租合同份数"
                sortable
                width="213">
                </el-table-column>  
                <el-table-column
                prop="yjwcl"
                label="预计完成率"
                sortable
                width="214">
                </el-table-column>          
            </el-table>
        </div>        
    </div>
</template>
<script>
export default {
    name:'louyuAdmin',
    data(){
        return{
            input21: '',
            txtMsg:[
                {
                    name:"楼宇数量",
                    bfb:"",
                    sl:"10"
                },
                {
                    name:"管理数量",
                    bfb:"m²",
                    sl:"169,884.26"
                },
                {
                    name:"在租数量",
                    bfb:"29.13%",
                    sl:"49,487.90"
                },
                {
                    name:"在租实时均价",
                    bfb:"",
                    sl:"-"
                },
                {
                    name:"在租合同份数",
                    bfb:"",
                    sl:"80"
                },
                {
                    name:"可招商数量",
                    bfb:"70.67%",
                    sl:"120,052.55"
                },
                {
                    name:"预计完成率",
                    bfb:"",
                    sl:"219.32%"
                }               
            ],
            tableData: [{               
                name: '0.00 元/㎡·天',
                date: '2016-05-02',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {             
                name: '0.00 元/㎡·天',
                date: '2016-05-04',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {               
                name: '0.00 元/㎡·天',
                date: '2016-05-01',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {              
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {               
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {             
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {               
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {              
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }, {               
                name: '0.00 元/㎡·天',
                date: '2016-05-03',
                zssl: '0.31万m² (100%)',
                zzsl: '0.31万m² (0%)',
                zzhtsl: '0',
                yjwcl: '0.00%'
                }]
        }
    }
}
</script>

<style scoped>
.Box-top{
    background-color: #fff;
    position: relative;
}
.demo-input-suffix{
    overflow: hidden;
}
.el-input{
    width: calc(100% - 490px);
    float: left;
}
.el-input input{
    border: 0;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    padding-left: 64px !important;   
}
.el-input span i{
    width: 92px;
    font-size: 16px;
    color: #6f7e95;
}
.el-button{
    float: right;
    font-size: 14px;
    text-align: center;
    color: #585858;
    border-radius: 4px;
    border: .6px solid rgba(130,134,146,.6);
    margin-top: 10px;
    margin-right: 20px;
    padding: 0 15px;
    height: 28px;
}
.ly-msg{
    display: inline-block;
    background-color: #fff;
    padding: 20px 20px 0;
    overflow: hidden;
}
.ly-msg li{
    float: left;
    min-width: 105px;
}
.ly-msg li .li-top{
    height: 25px;
    line-height: 25px;
    color: #828692;
    font-size: 12px;
}
.ly-msg li .li-top span:nth-child(1){
    float: left;
}
.ly-msg li .li-top span:nth-child(2){
    float: right;
    padding-left: 7px;
}
.ly-msg li .li-top i{
    margin-left: 6px;
    color: #4494f0;
    font-size: 16px;
}
.ly-msg li .li-bottom{
    display: inline-block;
    height: 56px;
    line-height: 48px;
    font-size: 24px;
    color: #353b4b;
}
.ly-msg li .li-left{
    color: #353b4b;
    display: inline-block;
    margin-left: 10px;
    padding-right: 14px;
    font-size: 14px;
}
.ly-msg li .li-right{
    width: 2px;
    height: 35px;
    background-color: #edeef0;
    display: inline-block;
    margin-top: 16px;
}
.ly-msg li:last-child .li-right{
    background-color: #fff !important;
}
.Box-top .jl{
    position: absolute;
    right: 74px;
    top: 72px;
    cursor: pointer;
}
.Box-bottom{
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
}
.table-header{
    font-size: 14px;
    height: 50px;
    background: #fff;
    padding: 0 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-bottom: 0px;
}
.table-header i{
    font-size: 16px;
}
.el-table__header-wrapper{
    border-bottom: 1px solid #e0e0e0;  
}   
.el-table thead tr th{
    font-size: 12px;
    color: #7085a1;
    font-weight: normal; 
}
.el-table thead tr th .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
.el-table tbody tr{
    padding: 10px 0;
    background: #fff;
    color: #6b809f;
    font-size: 14px
}
.el-table tbody tr td .cell{
    padding: 0 20px;
    height: 36px;
    line-height: 36px;
}
</style>
