//当前这个模块，对API进行统一管理
import requests from "./request";
import mockRquest from './mockAjax'

//三级联动接口
// /api/product/getBaseCategoryList  get 无参数
export const reqCategryList = ()=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

//获取banner（home首页轮播图接口）
export const reqgerBannerList = ()=>{
    return mockRquest.get('/banner')
}

//获取floor接口
export const reqFloorList = ()=>{
    return mockRquest.get('/floor')
}

//获取搜索模块的接口： 地址：/api/list   方式：post 需要带参数
//给服务站传一个默认的参数，至少识一个空对象
export const reqgetSearchInfo = (data)=>{
    return requests({url:'/list',method:'post',data:data})
}

//获取详情商品的接口：地址/api/item/{ skuId } 方式 get 需要带参数
export const reqgetDeatilInfo = (skuId)=>{
    return requests({url:`/item/${skuId}`,method:'get'})
}

//商品加入购物车 地址/api/cart/addToCart/{ skuId }/{ skuNum } 方式post 需要参数
export const reqAddShopCart = (skuId,skuNum) =>{
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

}

//获取购物车 地址 /api/cart/cartList get
export const reqCartList = ()=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:'/cart/cartList',method:'get'})
}

//删除购物车商品接口 地址 /api/cart/deleteCart/{skuId}
export const reqDeleteCartList = (skuId)=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
}

//切换商品选中状态 地址：/api/cart/checkCart/{skuID}/{isChecked}
export const reqIsCheack = (skuId,isChecked)=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}

//注册页面，获取验证码接口 地址：/api/user/passport/sendCode/{phone}  get
export const reqgetCode = (phone)=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
}

//用户注册  地址：/api/user/passport/register
export const reqRegister = (data)=>{
    //发请求，axios发请求返回的结果是Promise对象
    return requests({url:`/user/passport/register`,data,method:'post'})
}

//用户登录 地址：/api/user/passport/login 
export const reqLogin = (data) =>{
    return requests({url:`/user/passport/login`,data,method:'post'})
}

//获取用户得信息（需要带着用户得token向服务器拿信息）
//地址：/user/passport/auth/getUserInfo get
export const reqgetUserInfo = () =>{
    return requests({url:`/user/passport/auth/getUserInfo`,method:'get'})
}

//退出登录 地址：/api/user/passport/logout
export const reqlogout = () =>{
    return requests({url:`/user/passport/logout`,method:'get'})
}

//获取用户地址信息 地址：/userAddress/auth/findUserAddressList
export const reqAddressInfo = () =>{
    return requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})
}

//获取商品清单  地址：/api/order/auth/trade
export const reqOrderInfo = () =>{
    return requests({url:`/order/auth/trade`,method:'get'})
}

//提交订单  地址 /api/order/auth/submitOrder?tradeNo={tradeNo}  post
export const reqsubmitOrder = (tradeNo,data) =>{
    return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
}

//获取支付信息 地址 /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId)=>{
    return requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
}

//查询支付订单状态 地址 /api/payment/weixin/queryPayStatus/{orderId}
export const reqqueryPayStatus = (orderId)=>{
    return requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
}
//获取我的订单列表 地址 /api/order/auth/{page}/{limit} get
export const reqMyorderList = (page,limit)=>{
    return requests({url:`/order/auth/${page}/${limit}`,method:'get'})
}
