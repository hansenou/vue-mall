//search模块仓库
//state仓库存储数据的地方
import { reqgetSearchInfo } from "@/api"
const state = {
    searchList:{}
}
//actions：操作组件，写业务，处理异步
const actions = {
    //获取search模块的数据
    async getSearchList(context,data={}){
        //调用API时，至少传一个默认参数
        const reslut = await reqgetSearchInfo(data)
        if(reslut.code == 200){
            context.commit('GETSEARCHLIST',reslut.data)
        }
    }
}
//mutations：修改state的地方,操作数据
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}

//getters：Vuex的计算属性
//在项目当中主要作用是简化仓库的数据
const getters ={
    //当前的形参state，是仓库中的state
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
}

export default{
    actions,
    mutations,
    state,
    getters
 }