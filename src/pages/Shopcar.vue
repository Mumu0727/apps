<template>
    <div class="shopcar">
        <div class="container ">
            <div class="row rowcar">
                <ul class="list-group" style="width:100%">
                    <li class="list-group-item text-primary">
                        <div class="icheck pull-left mr5">
                                    <input type="checkbox" checked="checked" class="ids" prodStatus="1"  itemkey=""/>
                                        <label class="checkLabel">
                                <span></span>
                                </label>
                        </div>
                        朗尊软件</li>
                    <li class="list-group-item hproduct clearfix">
                        
                            <div class="p-info">
                                <a href="/views/663"><p class="p-title">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</p></a>
                                <p class="p-attr">
                                    <span>颜色：红色；</span></p>
                                <p class="p-origin">
                                    <a class="close p-close" onclick="deleteShopCart('','艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女','663','1358')" href="javascript:void(0);">×</a>
                                    <em class="price">¥179.00</em>
                                </p>
                            </div>
                    </li>
                    <li class="list-group-item clearfix" style="display:flex;justify-content: space-between;">
                        <div class="pull-left mt5">
                            <span class="gary">小计：</span>
                            <em class="red productTotalPrice">¥179.00</em>
                        </div>
                        <div class="btn-group btn-group-sm control-num">
                            <a onclick="disDe(this)" href="javascript:void(0);" class="btn btn-default"><span class="glyphicon glyphicon-minus gary"></span></a>
                            <input type="tel" class="btn gary2 Amount" readonly="readonly" value="1" maxlength="4" itemkey="" prodId="663" skuId="1358">
                            <a onclick="increase(this)" href="javascript:void(0);" class="btn btn-default"><span class="glyphicon glyphicon-plus gary"></span></a>
                        </div>
                    </li>
                    </ul>
            </div>
        </div>
        <div class="fixed-foot">
            <div class="fixed_inner">
                <div class="pay-point">
                    <div class="icheck pull-left mr10">
                        <input type="checkbox" checked="checked" id="buy-sele-all" value="1">
                        <label for="buy-sele-all">
                            <span class="mt10"></span>全选
                        </label>
                    </div>
                    <p>合计：<em class="red f22">¥<span id="totalPrice">179.00</span></em></p>
                </div>
                <div class="buy-btn-fix">
                    <a href="javascript:submitShopCart();" class="btn btn-danger btn-buy">去结算</a>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>

export default {
    name:'Shopcar',
    beforeRouteEnter(to,from,next){
    axios({
      url:'mumu/user',
    }).then(
      res=>{
        
        if(res.data.err===1){
            alert("请先登录！")
        next('/longin')
      }else{
        next()
      }}

    )
  }
}
</script>

<style scoped>
.control-num a{display: block;width: 10px;height: 10px;background: #333;margin-top: 5px;}
.p-info .p-title{color: #333; height: 40px;line-height:20px;overflow: hidden;word-break: break-all; margin:0;}

.rowcar{padding-bottom: 50px;}
.buy-btn-fix{padding:8px; position:absolute; right:0; top:0;}

.list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}
.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}
.member_list_group .list-group-item{border-left:none; min-height:100px; text-align:center; padding:15px 0;}
.member_list_group .list-group-item .m_name{margin:5px 0 3px; color:#333;}
.list-group-item_3{border-top:none;}
.icheck input[type="checkbox"],.icheck input[type="radio"] {display: none;}
.icheck label{margin-bottom:0;}
.icheck input[type="checkbox"] + label span,
.icheck input[type="radio"] + label span {display:inline-block;width:30px;height:30px;position: relative;top: -5px; float:left; cursor:pointer; background:url(../assets/images/icon.png) no-repeat; background-size: 300px 95px;}
.icheck input[type="checkbox"] + label span{background-position:-252px 0px;}
.icheck input[type="radio"] + label span{background-position:-253px -35px;}
.icheck input[type="checkbox"]:checked + label span{background-position:-216px 0px;}
.icheck input[type="radio"]:checked + label span{background-position:-217px -35px;}
.hproduct{padding: 10px; height: auto; min-height: 40px;position: relative;border-bottom: 1px solid #e5e5e5;}
.buy-area .btn-share .glyphicon{background:#fff; border-radius:50%; color:#f63234; padding:2px; font-size:10px; margin:1px 3px 0 0; float:left;}
.fixed-foot{height: 50px; z-index: 999; position: fixed; bottom: 0;left: 0; right: 0;width:100%; }
.fixed_inner{margin:0 auto;position: relative;background:#fff;border-top:1px solid #ccc; max-width: 768px;}
.pay-point{line-height:50px; padding:0 10px;}

</style>
