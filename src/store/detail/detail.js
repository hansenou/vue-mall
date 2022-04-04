//detail模块的仓库
import { reqgetDeatilInfo,reqAddShopCart } from "@/api"
//封装游客身份模块uuid --生成一个随机字符串
import {getUUID} from '@/utils/uuid_token'
const state={
    deatillist:{},
    //游客的临时身份
    uuid_token:getUUID()
}
//actions：操作组件，写业务，处理异步
const actions={
    //获取产品信息的
    async getDeatilInfo(context,skuId){
        const result = await reqgetDeatilInfo(skuId)
        if(result.code==200){
             context.commit('GETDEATILLIST',result.data)
        }
    },

    //将商品添加到购物车中
    async addShopCart (context,{skuId,skuNum}){
        const result = await reqAddShopCart(skuId,skuNum)
        //代表服务器加入购物车成功
        if(result.code==200){
            /* context.commit('GETDEATILLIST',result.data) */
            /* console.log(result) */
            return 'ok'
       }else{
           return Promise.reject(new Error('fail'))
       }
    }
}
//mutations：修改state的地方,操作数据
const mutations={
    GETDEATILLIST(state,deatillist){
        state.deatillist = deatillist
    }
}
//getters：简化数据而生
const getters ={
    //路径导航简化
    categoryView(state){
        return state.deatillist.categoryView || {}
    },
    //简化产品信息
    skuInfo(state){
        return state.deatillist.skuInfo || {}
    },
    //简化售卖属性
    spuSaleAttrList(state){
        return state.deatillist.spuSaleAttrList || []
    }
}
export default{
    actions,
    mutations,
    state,
    getters
 }