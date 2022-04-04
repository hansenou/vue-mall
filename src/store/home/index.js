import {reqCategryList,reqgerBannerList,reqFloorList} from '@/api'

//home模块的仓库
//state仓库存储数据的地方
const state = {
    //存三级联动的数据
    categoryList:[],
    //存轮播图的数据
    bannerList:[],
    //存floor的数据
    floorList:[]
}
//actions：操作组件，写业务，处理异步
const actions = {
    //通过API里面的接口函数，向服务器请求，读取服务器数据
    //获取三级联动
    async categoryList(context){
       const result = await reqCategryList()
       if(result.code==200){
            context.commit('CATEGORYLIST',result.data)
       }
    },
    //获取轮播图
    async  getBannerList(context){
        const result = await reqgerBannerList()
        if(result.code==200){
             context.commit('GETBANNERLIST',result.data)
        }
      
    },
    //获取floor数据
    async getFloorList(context){
        const result = await reqFloorList()
        if(result.code==200){
             context.commit('GETFLOORLIST',result.data)
        }
    }
}
//mutations：修改state的地方,操作数据
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}

//getters：Vuex的计算属性
const getters ={

}

export default{
    actions,
    mutations,
    state,
    getters
 }