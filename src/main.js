import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//三级联动组件----全局组件
import TypeNav from './components/TypeNav'
//轮播图组件----全局组件
import Carousel from './components/Carousel'
//分页组件--全局组件
import Page from './components/Page'
//引入饿了么UI
import {MessageBox} from 'element-ui'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//注册全局组件：第一个参数 组件名 第二个参数 哪个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Page.name,Page);
//引入路由
import router from './router'
//引入Vuex仓库
import store from './store'
//引入mockServer------mock数据
import '@/mock/mock'
//引入swiper样式
import 'swiper/css/swiper.css'
//统一引入接口api
import * as API from '@/api'
//引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
//使用图片懒加载插件
Vue.use(VueLazyload)
import '@/plugins/vaildate'

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
    Vue.prototype.$API =  API
    }
})
