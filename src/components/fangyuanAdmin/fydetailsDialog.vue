<template>
    <div class="bjly">
        <el-button plain class="bily-button" @click.stop="dialogFormVisible = true" ><i class="el-icon-plus"></i>编辑房源</el-button>
        <el-dialog title="编辑房源" :visible.sync="dialogFormVisible" class="fy-dialog" width="700px" top="100px" center 
        :append-to-body="isbody" 
        :close-on-click-modal="false"
        @close="gb">               
            <div class="menu-ul">
                <div class="menu-li">
                    <editDialig :rowId="inputName">
                    </editDialig></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import editDialig from '@/components/fangyuanAdmin/editDialig'
// import Dialog04 from '@/components/louyuAdmin/Dialog04'
export default {
    name: 'fydetailsDialog',
     inject: ['reload'],
    components:{
        editDialig
    },
      props: {
      inputName: String,
      required: true
    },
    data(){
        return{          
            dialogFormVisible: false,
            isbody: true,

        }
    },
    mounted(){
    },
    methods:{

        gb(){
        },

    }
}
</script>
<style>
</style>
