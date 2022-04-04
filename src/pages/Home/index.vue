<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Recommend></Recommend>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
        <Brand></Brand>
 
    </div>
</template>

<script>
import TypeNav from "@/components/TypeNav";
import ListContainer from "./ListContainer/index.vue";
import TodayRecommend from './TodayRecommend/index.vue';
import Recommend from './Recommend/index.vue';
import Like from './Like/like.vue'
import Floor from './Floor/index.vue'
import Brand from './Brand/index.vue'
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
    components: {TypeNav,ListContainer,TodayRecommend,Recommend,Like,Floor,Brand},
    mounted() {
        //派发action，获取floor组件的数据
        this.$store.dispatch('getFloorList')

       
    },
    computed:{
        ...mapState({floorList:state=>state.home.floorList})
    }
}
</script>

<style>

</style>