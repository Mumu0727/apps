<template>
    <div class="home">
        <header class="header">
            <div class="fix_nav">
                <div style="max-width:768px;margin:0 auto;height: 44px;position: relative;background:#000000;">
                    <form action="/m_search/list" method="get" id="searchform" name="searchform">
                        <div class="navbar-search left-search">
                                <input type="text" id="keyword" name="keyword" value="" placeholder="搜索商品" class="form-control">
                        </div>
                        <div class="nav-right">
                            <input type="button" value="搜索" onclick=";" class="img-responsive" style="text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:42px;display:block;"/>
                        </div>
                    </form>
                </div>
            </div>
        </header>
        <Banner></Banner>
        <div class="row category">
            <a href="/m_search/list?param.hot='Y'" class="col-3">
                <img class="img-responsive" src="../assets/img/icon_rm.png">
                <h4>热门</h4>
            </a>
            <a href="/m_search/list?param.commend='Y'" class="col-3">
                <img class="img-responsive" src="./../assets/img/icon_tm.png">
                <h4>精品</h4>
            </a>
            <a href="/theme/allThemes" class="col-3">
                <img class="img-responsive" src="./../assets/img/theme.png">
                <h4>专题列表</h4>
            </a>
            <a href="/brand" class="col-3">
                <img class="img-responsive" src="./../assets/img/icon_pp.png">
                <h4>品牌</h4>
            </a>
        </div>
        <div class="row">
            <Product :page='1' tit="白酒" :src='src1'></Product>
            <Product :page='2' tit="洋酒" :src='src2'></Product>
            <Product :page='3' tit="啤酒" :src='src3'></Product>
        </div>

    </div>
    
</template>

<script>
import Banner from './../components/Banner'
import Product from './../components/Product'


export default {
    name:'Home',
    components:{
        Banner,Product
    },
    data(){
        return {
            src1: ['https://img06.jiuxian.com/bill/2019/0610/ea5f4dd3f68046c8891ad3c41563141c.jpg','https://img08.jiuxian.com/bill/2019/0610/6a6ee77cb35a4afd883b52b8d4dacf78.jpg'],
            src2: ['https://img10.jiuxian.com/bill/2019/0611/cd5b6fe14dac4cdb8f9f162505a96074.jpg','https://img06.jiuxian.com/bill/2019/0613/f288bb0888d04ce7ad5013105cd2a2d5.jpg'],
            src3: ['https://img06.jiuxian.com/bill/2019/0527/2620b0e9c0164eee8936a2e4e61852a2.jpg','https://img06.jiuxian.com/bill/2019/0419/f7616e3b87da4fa4b675912c5f3cfddd.jpg']
        }
    },
    
    mothods: {
        list_1(){
            
        }
    },
    // computed:mapGetters(['list','list2','list3']),
    
}
</script>
<style scoped>
.header{height:44px;position: relative;}
.fix_nav{height:44px; line-height: 44px;top:0; left: 0; width: 100%; z-index:99;/* position: fixed; */}

.member_mp_img{position: absolute;width: 35px;top: 10px;right:10px;height: 44px;}
.member_mp_img img{width:35px;}

.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
.navbar-search{height: 100%; top:0; position: absolute; width: auto !important;}
.left-search{padding-right: 0;left:5px;right: 55px;}
.right-search{padding-right: 0;right:5px;left: 55px;}
.left-search .form-control{background:#fff url(./../assets/images/search.jpg) no-repeat 5px center; background-size: 25px;padding-left: 30px;margin-top:5px;height: 34px;}
.right-search .form-control{background:#fff url(./../assets/images/search.jpg) no-repeat right center; background-size: 25px; margin-top:5px;}
.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
.nav-left{left:5px;}
.nav-right{right:5px;text-align: center;z-index: 99}
.tit{color: #fff;/* font-size: 18px; */font-weight: normal;height: 100%; text-align: center;font-size:18px;}
.fixed-foot{height: 50px; z-index: 999; position: fixed; bottom: 0;left: 0; right: 0;width:100%; }
.fixed_inner{margin:0 auto;position: relative;background:#fff;border-top:1px solid #ccc; max-width: 768px;}

.category{padding:10px 0; text-align:center; background:#fff; border-bottom:1px solid #e5e5e5;margin-bottom: 10px;}
.category img{width:75%;}
.category h4{margin:5px 0 0 0; font-size:12px;}
@media screen and (min-width: 767px){	
	.category h4{margin:5px 0 10px 0; font-size:16px;}
	.category img{width:50%;}
}
.category img{margin:0 auto;}
</style>

