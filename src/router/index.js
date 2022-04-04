import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
//引入store
import store from '@/store'
//引入一级路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
//引入二级路由组件
import MyOrder from '../pages/Center/myOrder'
import GroupOrder from '../pages/Center/groupOrder'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)}

 const router = new VueRouter({
    //路由配置
    routes:[
        {   
            name:"center",
            path:'/center',
            //路由懒加载引入
            component:()=>import('../pages/Center'),
            meta:{show:true},
            //二级路由
            children:[
                {
                    path:'myorder',
                    component:()=>import('../pages/Center/myOrder'),
                },
                {
                    path:'grouporder',
                    component:()=>import('../pages/Center/groupOrder') 
                },
                {
                    path:'/center',
                    redirect:'/center/myorder'
                }
            ]
        },
        {   
            name:"paysuccess",
            path:'/paysuccess',
            component:()=>import('../pages/PaySuccess'),
            meta:{show:true}
        },
        {   
            name:"pay",
            path:'/pay',
            component:()=>import('../pages/Pay'),
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path=='/trade'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {   
            name:"trade",
            path:'/trade',
            component:()=>import('../pages/Trade'),
            meta:{show:true},
            //路由守卫
            beforeEnter: (to, from, next) => {
                if(from.path=='/shopcart'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {   
            name:"shopcart",
            path:'/shopcart',
            component:()=>import('../pages/ShopCart'),
            meta:{show:true}
        },
        {   
            name:"addcartsuccess",
            path:'/addcartsuccess',
            component:()=>import('../pages/AddCartSuccess'),
            meta:{show:true}
        },
        {
            path:'/detail/:skuId',
            component:()=>import('../pages/Detail'),
            meta:{show:true}
        },
        {
            path:'/home',
            component:()=>import('../pages/Home'),
            meta:{show:true}
        },
        {
            path:'/login',
            component:()=>import('../pages/Login'),
            meta:{show:false}
        },
        {
            path:'/register',
            component:()=>import('../pages/Register'),
            meta:{show:false}
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:()=>import('../pages/Search'),
            meta:{show:true}
        },
        //重定向，项目跑起来的访问首页
        {
            path:'/',
            redirect:'/home'
        },

     ],
     //滚动行为
     scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { y: 0 }
    },
 })

 //全局守卫：前置守卫（在跳转前进行判断）
 router.beforeEach(async (to,from,next)=>{
    //用户登录了，才会有token
     let token = store.state.user.token
     //用户信息
     let name = store.state.user.userInfo.name
     //用户登录了
     if(token){
         if(to.path=='/login'){
             next('/home')
         }
         else{
             //登录了，但去的不是login
             //如果有用户名
          if(name){
              next()
          }
          //没有用户民则派发action，让仓库存储用户信息
          else{
              try {
                  //获取1用户信息成功
                await store.dispatch('getUserInfo')
                next()
              } catch (error) {
                  //token失效了，获取不到用户信息，重新登录
                  //清除token
                  await store.dispatch('getLoginOut')
                  next('/login')
              }
          }
         }
     }
     //未登录
     else
     {
        //未登录，不能去相关的支付页面
        /* next() */
   
        let toPatg = to.path
        if(toPatg.indexOf('/trade')!=-1 ||toPatg.indexOf('/pay')!=-1||toPatg.indexOf('/center')!=-1){
            next('/login?redirect='+toPatg)
        }
        else{
            next()
        }
     }
 })
 export default router