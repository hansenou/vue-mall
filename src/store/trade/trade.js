import { reqAddressInfo ,reqOrderInfo} from "@/api"

const state={
    address:[],
    orderInfo:{}
}

const actions={
    //获取用户地址信息
    async getUserAddress(context){
        let result = await reqAddressInfo()
       
        if(result.code == 200){
            context.commit('GRTUSERADDRESS',result.data)
        }
    },
    //获取商品清单数据
    async getOrdaerInfo(context){
        let result = await reqOrderInfo()
        if(result.code == 200){
            context.commit('GRTORDERINFO',result.data)
        }
    }
}
const mutations={
    GRTUSERADDRESS(state,address){
        state.address = address
    },
    GRTORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const getters={}
export default {
    actions,
    mutations,
    state,
    getters
}