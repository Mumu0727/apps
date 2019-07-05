<template>
<div>
<swiper :options="swiperOption" ref="mySwiperA" class="banner_box">
    <!-- 幻灯内容 -->
    <swiper-slide v-for="(item,index) in src" :key="index"><img class="img_banner" :src='item' alt="" srcset=""></swiper-slide>     
    
    <!-- 以下控件元素是可选的，需要在这里声明，并且在下面data配置 -->
    <div class="swiper-pagination"  slot="pagination"></div>   
</swiper>
</div>
</template>
<script>
 import { swiper, swiperSlide } from 'vue-awesome-swiper'    //导入组件
 import './../assets/css/swiper.css'
    export default{
        components: {
            swiper,          //定义组件
            swiperSlide
        },
        // props:{
        //     bannerData:Array
        // },
        data(){
            return {
                src: [
                    'https://img07.jiuxian.com/bill/2019/0701/e0e5552f91eb4e23a5a94fcc487356cb.jpg','https://img06.jiuxian.com/bill/2019/0702/5d0ceee6326645a9b52807f9c94c5180.jpg','https://img07.jiuxian.com/bill/2019/0622/c2d6dc5958304b19a5bfe099ca214157.jpg','https://img10.jiuxian.com/bill/2019/0622/ab3fd99c76cd4dca841e5171804a7e98.jpg'
                ],
                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）  
// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    autoplay: true,
                    disableOnInteraction: false,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    pagination : '.swiper-pagination',
                    onTransitionStart(swiper){
                      console.log(swiper)
                    }
            }
        }
    },
    computed: {     
// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        swiper() {
          return this.$refs.mySwiperA.swiper
        }
    },
}
</script>
<style>
    .img_banner{width: 100%;display: block;}
</style>
