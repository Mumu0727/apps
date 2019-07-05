<template>
    <div class="product">
        <div class="tb_box">
			<h2 class="tab_tit">
                <router-link class="more" :to="{name:'categoryList',query:{page:page}}">
                    更多
                </router-link>
				{{tit}}
            </h2>
			
			<div class="tb_type tb_type_even clearfix" style="width:100%">
                <a class="tb_floor" 
                v-for="(item,index) in src" :key='index'>
                    <img :src="item" class="tb_pic" style="width:100%;">
                </a>
            </div>
		</div>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props:['page','tit','src'],
    
}
</script>
<style scoped>
.img-responsive{line-height: 32px;}
.tb_box{background:#fff; border-top:1px solid #e5e5e5; border-bottom:1px solid #e5e5e5; margin-bottom:10px;width: 100%}
.tb_box .tab_tit{margin:0; padding:10px; font-size:20px; font-weight: normal; color:#333;width: 100%;box-sizing: border-box;}
.tb_box .tab_tit .more{float:right; font-size:14px; margin-top:3px; color:#6a91ee; position:relative; padding-right:13px;}
.tb_box .tab_tit .more:after{content:"";width:10px;height:10px;border-right:1px solid #6a91ee; border-bottom:1px solid #6a91ee;top:50%; right:5px;margin-top:-5px;position:absolute;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg); -ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}
.tb_type{border-top:1px solid #e5e5e5; overflow:hidden;width: 100%;}
.tb_type .tb_pic{width:100%; display:block;padding: 5px;}
.tb_type .th_link{border-bottom: 1px solid #dadada;border-width: 0 0 1px;float: right; width: 50%;}
.tb_floor{width:50%;float:left;border-right: 1px solid #dadada; margin-left:-1px;} 
.tb_type .tb_last{border-bottom:none;}
.tb_type_even .tb_floor{float:right; border-left: 1px solid #dadada; border-right:none;}
.tb_type_even .th_link{float:left;}


</style>
