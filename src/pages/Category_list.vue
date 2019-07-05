<template>
    <div class="category_list">
        <header class="header">
            <div class="fix_nav">
                <div class="nav_inner">
                    <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
                    <div class="tit">产品列表</div>
                </div>
            </div>
        </header>
        <div class="container" id="container2">
            <div class="row">
                <ul class="mod-filter clearfix">
                    <div class="white-bg_2 bb1">
                    
                    <li id="default" class="active"><a
                        title="默认排序"  href="javascript:void(0);">默认</a></li>
                    <li id="buys"  ><a title="点击按销量从高到低排序"
                        href="javascript:void(0);" >销量
                        <i class='icon_sort'></i>
                    </a></li>
                    <li id="comments"  ><a title="点击按评论数从高到低排序"
                        href="javascript:void(0);" >评论数
                        <i class='icon_sort'></i>
                    </a></li>
                    <li id="cash"  ><a title="点击按价格从高到低排序"
                        href="javascript:void(0);" >价格
                        <i class='icon_sort'></i>
                    </a></li>
                    </div>
                </ul>
                
                <div class="item-list" id="container" rel="2" status="0">
                    <input type="hidden" id="ListTotal" value="1">
                    <router-link v-for="(item,index) in list"
                     :to="{name:'detail',query:{pid:item.commonProductInfo.pid,pname:item.commonProductInfo.pname,imgPath:item.commonProductInfo.imgPath}}" :key='index'>
                        <div class="hproduct clearfix" style="background:#fff;border-top:0px;">
                            <div class="p-pic"><img style="max-height:100px;margin:auto;" class="img-responsive" :src="item.commonProductInfo.imgPath"></div>
                            <div class="p-info">
                                <p class="p-title">{{item.commonProductInfo.pname}}</p>
                                <p class="p-origin"><em class="price">¥{{item.commonProductInfo.actPrice}}</em></p>
                                <p class="mb0"><del class="old-price">¥{{item.commonProductInfo.jxPrice}}</del></p>
                            </div>
                        </div>
                    </router-link>
                </div>
                
                <div id="ajax_loading" style="display:none;width:300px;margin: 10px  auto 15px;text-align:center;">
                    <img src="images/loading.gif">
                </div>
                <form  action='/m_search/prodlist' method="post" id="list_form">
                        <input type="hidden" id="curPageNO" name="curPageNO"  value=""/>
                        <input type="hidden"  id="categoryId" name="categoryId" value="36" />
                        <input type="hidden" id="orders" name="orders"  value=""/>
                        <input type="hidden" id="hasProd" name="hasProd"  value="" />
                        <input type="hidden" id="keyword" name="keyword"  value="" />
                        <input type="hidden" id="prop" name="prop"  value="" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import * as types from './../store/types'
import { mapGetters } from 'vuex';
export default {
    name:'Category_list',
    props: ['page'],
    activated(){
    this.$store.dispatch(types.VIEW_LIST,this.page)
  },
  computed:mapGetters(['list'])
    
}
</script>
<style scoped>
.hproduct{padding: 10px; height: auto; min-height: 40px;position: relative;border-bottom: 1px solid #e5e5e5;}
.mod-filter{position: fixed;width: 100%;left: 0;z-index:80;height: 45px;position: relative;}
.bb1{border-bottom:1px solid #eee;/* position: fixed; */}
.mod-filter li{width:25%; text-align:center; float:left;}
.mod-filter li a{display: block; height: 44px; line-height: 44px;}
.mod-filter li.active {border-bottom:1px solid #f1382f;}
.mod-filter li.active a{color:#f1382f;}
.white-bg_2{max-width:768px;width:100%; margin:0 auto;height: 45px;background:#fff;}
.icon_sort{background: url(./../assets/images/aim-sprites.png) no-repeat; background-size: 200px 200px;content: ""; display: inline-block; width: 8px; height: 10px;background-position: -170px -30px;margin-left: 4px;}
.item-list{min-height: 230px; /* padding-top: 43px; */width: 100%}
.item-list a{display: block;background-color: #fff}

.item-list .hproduct{width:100%;float:left; border-bottom: 1px solid #e5e5e5;display: flex;}
.item-list .hproduct .p-pic{float:none;width: 30%;margin-right: 10px;}
.item-list .hproduct .p-pic .img-responsive{width:100%;min-width:100px;}
.item-list .hproduct .p-info .p-title{padding:0px 1px;text-overflow: ellipsis;overflow: hidden;color: #333;font-size: 14px;}
.item-list .hproduct .p-info{padding-left:0px; width: 100%;}
.item-list .hproduct .p-info .p-title a{font-size:14px;position:relative;}
.item-list .hproduct .p-info .p-origin{line-height:24px;position:absolute;bottom:10px;}
.item-list .hproduct .p-info .p-origin .price{color: #f63234;font-size: 16px;float: left;font-size:18px; margin-right:5px; vertical-align: top; }
.item-list .hproduct .p-info .p-origin .cx{height:20;background:#00b4ff;text-align:center;color: #fff;display: block;line-height:14px;float: left;border-radius: 5px;padding-left:0;}
.item-list .hproduct .p-info .p-origin .cx{padding-left:3px;}
.item-list .hproduct .p-info .mb0{text-decoration: line-through;font-size: 14px;}
.old-price{color: #999; font-style: normal; font-size:14px;position:absolute;bottom:0px;}

</style>
