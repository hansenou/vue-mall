//shopCart模块的仓库
import { reqCartList ,reqDeleteCartList,reqIsCheack} from "@/api"
const state = {
    cartList:[]
}
//actions：操作组件，写业务，处理异步
const actions = {
    //获取产品信息的
    async getCarList(context) {
        const result = await reqCartList()
        if (result.code == 200) {
            context.commit('GETCARLIST', result.data)
        }
       
    },

    //删除购物车某个产品
    async deleteCartListByskuId(context,skuId){
        const result = await reqDeleteCartList(skuId)
        if (result.code == 200) {
           return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    },

    //切换产品选中状态
    async isCheack(context,{skuId,isChecked}){
        const result = await reqIsCheack(skuId,isChecked)
        if (result.code == 200) {
           return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    },
    //删除勾选的产品
    deleteAllIsChecked({dispatch,getters}){
        //获取商品中的全部产品
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1? dispatch('deleteCartListByskuId',item.skuId):''
            PromiseAll.push(promise)
        })

        return Promise.all(PromiseAll)
    },
    //修改全部勾选按钮操作
    updateCartChecked({dispatch,state},checked){
        let PromiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('isCheack',{skuId:item.skuId,isChecked:checked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
//mutations：修改state的地方,操作数据
const mutations = {
    GETCARLIST(state,cartList){
        state.cartList = cartList
    },

}
//getters：简化数据而生
const getters = {
    //路径导航简化
    cartList(state){
        return state.cartList[0] || {}
    },
   /*  //计算出来购物数据
    cartInfoList(state){
        return state.cartList.cartInfoList
    } */
}
export default {
    actions,
    mutations,
    state,
    getters
}