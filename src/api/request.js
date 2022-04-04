import axios from "axios";
import store from "@/store";
//1、利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，因为接口路径都带有api
    baseURL:'api',
    //代表请求超时的时间5s
    timeout:5000,
})

//请求拦截器
requests.interceptors.request.use((config)=>{
   //cofig:配置对象，对象里面有一个属性很重要，headers请求头
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    } 
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    return config
})

//相应拦截器
requests.interceptors.response.use((res)=>{
    //相应成功的回调函数
    return res.data
},(error)=>{
    //相应失败
    return Promise.reject(new Error('faile'))
})

export default requests