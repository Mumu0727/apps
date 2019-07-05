import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from './../pages/Home.vue'
import Category from './../pages/Category'
import CategoryList from './../pages/Category_list'
import Detail from './../pages/Detail'
import Shopcar from './../pages/Shopcar'
import User from './../pages/User'
import Longin from './../pages/Longin'
import Reg from './../pages/Reg'
import Err from './../components/Err'

let routes =[
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/category',component:Category},
    {path:'/shopcar',component:Shopcar},
    {path:'/user',component:User},
    {path:'/longin',component:Longin},
    {path:'/reg',component:Reg},
    
    {path:'/detail',name:'detail',component:Detail,props:(route)=>({
        pid:route.query.pid,pname:route.query.pname,imgPath:route.query.imgPath
    })},
    // {path:'/categoryList',component:CategoryList},
    {path:'/categoryList',name:'categoryList',component:CategoryList,props:(route)=>({
        page:route.query.page
    })},

    {path:'*',component:Err},
]



let router = new VueRouter({
    routes
})
export default router;