//登录，注册模块
import { reqlogout,reqgetCode ,reqRegister,reqLogin,reqgetUserInfo} from "@/api"

const state = {
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const actions ={
    //获取验证码
    async getCode(context,phone){
      let result =   await reqgetCode (phone)
      if(result.code == 200){
        context.commit('GETCODE',result.data)
        return 'ok'
      }else{
          return Promise.reject(new Error('faile'))
      }
    },
    //用户注册
    async userRegister(context,user){
        let result =  await reqRegister(user)
        console.log(result)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    },

    //登录业务
    async userLogin(context,data){
        let result = await reqLogin(data)
        if(result.code==200){
            //用户成功且获取到token
            context.commit('USERLOGIN',result.data.token)
            //持久化存储token
            localStorage.setItem('TOKEN',result.data.token)
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    },
    //获取用户信息
    async getUserInfo(context,data){
        let result = await reqgetUserInfo()
        if(result.code==200){
            context.commit('GETUSERINFO',result.data)
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }

    },
    //退出登录
    async getLoginOut(context){
        let result = await reqlogout()
        if(result.code==200){
            context.commit('CLEAR')
            return 'ok'
        }
        else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations={
    GETCODE(state,code){
        state.code  = code
    },
    USERLOGIN(state,token){
        state.token  = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo  = userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo={},
        localStorage.removeItem('TOKEN')
    }
}
const getters={}
export default {
    actions,
    mutations,
    state,
    getters
}