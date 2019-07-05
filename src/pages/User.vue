<template>
<div class="maincontainer">
    <div class="container" style="max-width:768px;margin:0 auto;backgeound:">
        <div class="row">
        <a  style="width:100%">
            <div class="member_top member_top_1" >
                <div class="member_top_bg"><img  src="../assets/images/member_bg.png"></div>
                <div class="member_m_pic member_m_pic_1">
                    <img class="img-circle" 
                    :src="'http://localhost:3000/'+user.icon">
                        </div>
                <div  class="member_m_z member_m_z_1">
                    <div class="member_m_x">{{user.username}}</div>
                    </div>
                <div class="member_m_r" v-show="user">账户管理、收货地址&gt;
                </div>
                <router-link to='/longin' class="member_m_r" v-show="!user">登录&gt;
                </router-link>
            </div></a>
            <div class="member_mp_img" style="color:#fff;font:12px/1 ''" @click="logout">注销</div>
            <div class="list-group mb10" style="width:100%;">
                <a href="/p/userOrder" class="list-group-item tip" style="overflow: hidden;">
                    <div class="list_group_img" style="float:left;">
                    <img src="../assets/images/member_img16.png"></div>
                    我的订单
                    <span class="gary pull-right" style="float:right">查看全部</span>
                </a>
                <div class="list-group-item p0 clearfix" style="display:flex;">
                    <div class="col-xs-3 p0">
                        <a class="order_tab_link" href="/p/userOrder?state_type=1">
                            <em class="order_img">
                            <img src="../assets/images/order_bg_3.png"></em>待付款
                            
                            </a>
                    </div>
                    <div class="col-xs-3 p0">
                        <a class="order_tab_link" href="/p/userOrder?state_type=2">
                            <em class="order_img">
                            <img src="../assets/images/order_bg_2.png"></em>待发货
                            </a>
                    </div>
                    <div class="col-xs-3 p0">
                        <a class="order_tab_link" href="/p/userOrder?state_type=3">
                            <em class="order_img">
                                <img src="../assets/images/order_bg_1.png">
                            </em>待收货
                            </a>
                    </div>
                    <div class="col-xs-3 p0">
                        <a class="order_tab_link" href="/p/userOrder?state_type=4">
                            <em class="order_img">
                            <img src="../assets/images/order_bg.png"></em>已完成
                            </a>
                    </div>
                </div>
            </div>
            <div class=" mb10 member_list_group clearfix" style="width:100%;overflow:hidden;margin-top:10px;">
                <a href="/p/collect" class="list-group-item col-xs-4">
                    <div class="m_img"><img src="../assets/images/order_bg_5.png"></div>
                    <p class="m_name">我的收藏</p>
                    <span class="red">0</span>
                </a>
                <a href="/p/userComments" class="list-group-item col-xs-4">
                    <div class="m_img"><img src="../assets/images/order_bg_8.png"></div>
                    <p class="m_name">我的评论</p>
                    <span class="red">&nbsp;&nbsp;</span>
                </a>
                <a href="/p/inbox" class="list-group-item col-xs-4">
                    <div class="m_img"><img src="../assets/images/order_bg_4.png"></div>
                    <p class="m_name">收件箱</p>
                    <span class="red">&nbsp;&nbsp;</span>
                </a>

                <a href="/p/systemMessages" class="list-group-item col-xs-4">
                    <div class="m_img"><img src="../assets/images/order_bg_7.png"></div>
                    <p class="m_name">系统消息</p>
                    <span class="red">&nbsp;&nbsp;</span>
                </a>
                
            </div>
                    
            <div class="list-group mb10" style="width:100%">
                <a href="/p/help" class="list-group-item tip" style="width:100%">
                    <div class="list_group_img"><img src="../assets/images/order_bg_10.png"></div>
                    常见问题
                </a>
                <a href="/p/feedbacks" class="list-group-item tip" style="width:100%">
                    <div class="list_group_img"><img src="../assets/images/order_bg_9.png"></div>
                    意见反馈
                </a>
            </div>
            
        </div>
    </div>
    
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from './../store/types'
export default {
    name:'User',
    activated(){
        this.$store.dispatch(types.UPDATA_USER)
    },
    updata(){
        console.log(this.user)
    },
    methods:{
        logout(){
            this.$store.dispatch(types.LOGOUT)
            this.$router.push('/')
        }
    },
    computed:mapGetters(['user']),

}
</script>
<style scoped>
.col-xs-4{float: left !important; width: 25%;text-align: center;}
.col-xs-3{width: 25% !important;text-align: center !important;}
.list-group-item_3{border-top:none;}
.order_tab_link .order_img{display: block; margin: 0 auto; text-align: center; width: 30%; margin-bottom:3px;}
.order_tab_link .order_img img,.member_list_group .m_img img{max-width:100%; display:inline-block;}

.list-group-item:first-child{border-top-left-radius:0; border-top-right-radius:0;}
.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}
.list_group_img{float:left; margin-top:-3px; margin-right:5px;}
.list_group_img img{width: 23px;}

.maincontainer {
    height: auto !important;
    margin: 0 auto;
    max-width: 768px;
    padding-bottom: 110px;
    position: relative;
}
/* Customize container */
@media (min-width: 760px) {
  .container {
    position: relative;/*background:#fff;*/
  }
}
.member_top{}
.member_top_bg img{width:100%;}
.member_top{overflow:hidden;position: relative;}
.member_m_pic{width:25%;text-align: center;position: absolute;top:6%;left: 3%;height: 100%}
.member_m_pic img{width:100%;height:90%;border-radius: 50%;}
.member_m_z{width:30%;position: absolute;left: 32%;top:10%;}
.member_m_x{color: #fff;font-size: 15px;}
.member_m_s{padding-top: 2px;color: #fff;font-size: 12px;}
.member_m_bz{color: #366cce;width: 95%;background:url(./../assets/images/member_mp_img.png) no-repeat;width: 130px;height: 30px;background-size:60% 60%;padding-left:25px;font-size: 12px;padding-top:1px;margin-top:9%;}
.member_m_bz_1{color: #366cce;width: 95%;width: 130px;height: 30px;background-size:60% 60%;padding-left:15px;font-size: 12px;padding-top:1px;margin-top:9%;}
.member_m_bz img{border-radius: 5px;width:100%;}
.member_m_bz span{position: absolute;font-size: 12px;left:37%;top:16%;}
.member_m_r{width:33%;position: absolute;right:4%;text-align: right;bottom: 10%;color: #fff;font-size: 10px;}
.member_mp_img{position: absolute;width: 35px;top: 10px;right:10px;height: 44px;}
.member_mp_img img{width:35px;}

</style>

