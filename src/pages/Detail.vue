<template>
    <div class="detail">

        <div class="container_top"></div>


        <div class="view"><img :src="imgPath" alt=""></div>
        <div class="container">
            <div class="row gary-bg">
            <div class="white-bg p10 details_con">
                <h1 class="item-name" id="prodName">{{pname}}</h1>
                <ul>
                    <li>
                        <label>商城价格：</label>
                        <span class="price">¥<span class="price" id="prodCash">{{detail.jxPrice}}</span></span>
                    </li>
                    <li id="choose_0" index="0" >
                            <label id="propName" propname="颜色">优惠：</label>
                            <dl>
                                <dd key="208:635" valId="635" >{{detail.proBasicPromo[0].slogan1}}</dd>
                                
                            </dl>
                    </li>
                    <li>
                        <label>数量：</label>
                        <div class="count_div" style="height: 30px; width: 130px;">
                            <a href="javascript:void(0);" class="minus" ></a>
                            <input type="text" class="count" value="1" id="prodCount" readonly="readonly"/>
                            <a href="javascript:void(0);" class="add" ></a>
                        </div>
                    </li>
                </ul>
                </div>
                <div style="height:50px;width:100%"></div>
            </div>
        </div>

        <div class="fixed-foot">
            <div class="fixed_inner">
                <a class="btn-fav" href="javascript:void(0);" onclick="addInterest(this,'663');">
                <i class="i-fav"></i><span>收藏</span>
                </a>
                <a class="cart-wrap" href="/shopcart">
                    <i class="i-cart"></i>
                    <span>购物车</span>
                    <span class="add-num" id="totalNum">0</span>
                </a>
                <div class="buy-btn-fix">
                    <a class="btn btn-info btn-cart"  onclick="addShopCart();" href="javascript:void(0);">加入购物车</a>
                    <a class="btn btn-danger btn-buy" onclick="buyNow();" href="javascript:void(0);">立即购买</a>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
import * as types from './../store/types'
import {mapGetters} from 'vuex'
export default {
    name:'Detail',
    components:{
        
    },
    props:['pid','pname','imgPath'],
    activated(){
    this.$store.dispatch(types.VIEW_DETAIL,this.pid)
  },
  computed:mapGetters(['detail'])

}
</script>

<style scoped>
img{width: 100%}
.fanhui_cou{position: fixed;bottom:60px;right:10px;z-index: 10000;opacity:0.8;background:#fff;width:52px;height:52px;border-radius: 50%;text-align: center;color:#909ca9;border:1px solid #8f9caa;display:none;}
.fanhui_1{background:url(../assets/images/bot_top_arrow.png) no-repeat;width:14px;height:14px;background-size:14px;font-size: 12px;text-align: center;margin: 10px auto 0;}
.fanhui_ding{padding-top: 2px;}

#slide{margin:0 auto; position:relative; overflow:hidden; }
#slide .hd{width:100%; height:11px;  position:absolute; z-index:1; bottom:10px; text-align:center;  }
#slide .hd ul li{font-size:0; display:inline-block; width:10px; height:10px; -webkit-border-radius:10px; -moz-border-radius:10px; border-radius:10px; background:#fff; margin:0 5px;  vertical-align:top; overflow:hidden;border: 1px solid red;}
#slide .hd ul .on{ background:#e9553b;}
#slide .bd{position:relative; z-index:0; }
#slide .bd li img{display: block; width:100%; background:url(../assets/images/loading.gif) center center no-repeat;}
#slide .bd li a{ -webkit-tap-highlight-color:rgba(0, 0, 0, 0);}

.container-narrow > hr {
  margin: 30px 0;
}
.white-bg{background:#fff;}
.gary-bg{background:#eee;width: 100%;}
.white-bg_2{max-width:768px;width:100%; margin:0 auto;height: 45px;background:#fff;}
.item-name{margin:0; color: #333;overflow: hidden;font-size: 14px;font-weight: 400;line-height: 20px;max-height: 40px;}
.price{color: #f63234; font-style: normal; font-size:18px; margin-right:5px; vertical-align: top; font-family: "Helvetica Neue";}
.count_div{display: inline-block;}
.details_con{position:relative;width: 100%;}

.details_con ul li{color: #999;font-size: 13px;padding: 10px 0px;}
.details_con label{margin-top:5px;margin-right: 5px;margin-left:5px;}
.details_con ul li .parities{padding: 5px 0 10px 0;border-bottom:1px solid #ddd;}
.details_con ul li .black{color: #333;}
.details_con ul li .price{font-size: 20px;color: #ce0000;}
.details_con ul li dl{display: inline-block;width: 82%;vertical-align: top;margin-top: -3px;}

.details_con .selected{color: #ce0000;font-size: 16px; padding-bottom:10px; display:block;}



.details_con .count_div{display: inline-block;}
.details_con .count { color: #333; font-size: 13px; height: 25px; vertical-align: middle; width: 40px;-webkit-appearance:none;}
.details_con .minus,.details_con .add{font-size: 18px;color: #333;font-weight: bold;width: 10px;text-align: center;height: 25px;vertical-align: middle;background: url(../assets/images/addIcon.png) no-repeat center 90%;background-size: auto 600%;}
.details_con .minus{background-position: center 50%;}
.details_con .disabled{background-position: center 10%;}
.fixed-foot{height: 50px; z-index: 999; position: fixed; bottom: 0;left: 0; right: 0;width:100%; }
.fixed_inner{margin:0 auto;position: relative;background:#fff;border-top:1px solid #ccc; max-width: 768px;}
.btn-fav,.cart-wrap,.i-fav-active{width:55px; height: 50px; display:inline-block; text-align:center; position:relative;}
.goods-content{border-top:1px solid #e5e5e5; margin-top:20px;width: 100%;}
.goods-content .hd{height:40px; line-height:40px; padding:0 10px; border-bottom:1px solid #e5e5e5; position:relative;}
.goods-content .hd ul li{float:left; width:33.33%; color:#666; font-size:16px; text-align:center; cursor: pointer;}
.goods-content .hd ul .on{border-bottom:2px solid #f63234; color:#f63234; height:40px;}
.i-fav,.i-cart{display: block; width: 28px; height: 28px; margin:0 auto; background:url(../assets/images/icon.png) no-repeat; background-size: 310px 100px;}
.add-num{background-color:#f63234; display:block; position:absolute; right:0; top:5px; width:15px; height:15px; line-height:15px; font-size:12px; border-radius:50%; color:#fff;}
.i-fav{background-position:-150px -1px;}
.i-cart{background-position: -76px -37px;}
.buy-btn-fix{padding:8px; position:absolute; right:0; top:0;}
.btn-cart{background-color: #6a94e7;border-color: #6a94e7;color: #fff;}
.btn-buy{background-color: #f63234;border-color: #f63234;color: #fff;}
.btn-buy-fail{background-color: #cccccc;border-color: #cccccc;color: #fff;}
.btn-buy-fail:HOVER {
    color: #fff;
}

</style>


