<template>
<div>
  <MyHearder></MyHearder>
  <!-- 路由出现的地方 -->
  <router-view></router-view>
  <MyFooter v-show="$route.meta.show"></MyFooter>
</div>
  



</template>

<script>

import MyHearder from './components/Haeader/MyHaeder.vue'
import MyFooter from './components/Foorer/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHearder,MyFooter
  },
  mounted() {
     /* //通知Vuex发请求，获取数据，存储在仓库中
    this.$store.dispatch('categoryList') */
  },
  created() {
    console.log('MALL')
  }
}
</script>

<style>
    *{
        padding: 0px;
        margin: 0px;
    }
    a { text-decoration: none; color: #666;}
    ul, ol { list-style: none; }
</style>
