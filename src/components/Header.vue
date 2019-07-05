<template>
    <div class="_header">
        <div class="fix_nav">
            <div class="nav_inner">
                <a class="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
                <div class="tit">{{tit}}</div>
                <div class="sousuo" id="sousou"><img src="./../assets/images/sou.png"></div>
            </div>
	    </div>

    </div>
</template>

<script>
export default {
    name:'Header_',
    props:{
        routerName:String,
    },
    computed:{
        tit(){
            let titDate = ''
            if(/category/.test(this.routerName))titDate = '分类'
            if(/shopcar/.test(this.routerName))titDate = '购物车'
            if(/detail/.test(this.routerName))titDate = '商品详情'
            
            return  titDate
        }
        
    }
}
</script>
<style>
.fix_nav{height:44px; line-height: 44px;top:0; left: 0; width: 100%; z-index:99; position: fixed; }
.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
.nav-left{left:5px;}
.nav-right{right:5px;text-align: center;}
.back-icon{background:url(./../assets/images/back_icon.png) no-repeat center; background-size: 24px; -webkit-background-size: 24px;}
.tit{color: #fff;/* font-size: 18px; */font-weight: normal;height: 100%; text-align: center;font-size:18px;}
.sousuo{height: 44px;line-height: 44px; position: absolute;right: 10px;top: 0;color:#fff;font-size: 13px;cursor: pointer;}
.sousuo img{width: 25px;}
</style>

