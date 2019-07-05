<template>
  <div id="app">
    <Header v-show="bNav" :routerName='$route.path'></Header>
    <transition
    enter-active-class = "animated bounceInLeft"
    
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Footer v-show="bFoot"></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer'
import Header from './components/Header'
import {mapGetters} from 'vuex';
import * as types from './store/types'
export default {
  name: 'App',
  components: {
    Footer,Header
  },
  watch:{
    // 监听路由
    $route:{
      handler(to){
        let path = to.path
        // console.log(path)
        if(/category|detail/.test(path)){
          this.$store.commit(types.VIEW_NAV,true)
          this.$store.commit(types.VIEW_FOOT,true)
          // console.log('category',this.bNav,this.bFoot)
        }
        if(/home|user/.test(path)){
          this.$store.commit(types.VIEW_NAV,false)
          this.$store.commit(types.VIEW_FOOT,true)
          // console.log('home',this.bNav,this.bFoot)
        }
        if(/shopcar|detail/.test(path)){
          this.$store.commit(types.VIEW_NAV,true)
          this.$store.commit(types.VIEW_FOOT,false)
          // console.log('home',this.bNav,this.bFoot)
        }
        
        // console.log(/category/.test(path))
      },
      immediate:true
    }
  },
  computed:mapGetters([
    'bNav','bFoot'
  ]),
  
}
</script>

<style scoped>


</style>

