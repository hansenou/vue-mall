<template>
  <div class="header">
            <!-- 头部第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <span>尚品汇欢迎您！</span>
                        <!-- 没有用户名就显示 -->
                        <template v-if="!userName">
                        <span>请</span>
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register">注册</router-link>
                        </template>

                        <template v-else>
                            <a >{{userName}}</a>
                            <a  @click="loginOut">退出登录</a>
                        </template>
                        
                    </div>
                    <div class="typeList">
                        
                        <router-link to="/center">我的订单</router-link>
                        
                        <router-link to="/shopcart">我的购物车</router-link>
                        <a href="">我的尚品汇</a>
                        <a href="">尚品汇会员</a>
                        <a href="">企业采购</a>
                        <a href="">关注尚品汇</a>
                        <a href="">合作招商</a>
                        <a href="">商家后台</a>
                    </div>
                </div>


            </div>
            <div class="bottom">
                <div class="logoArea">
                    <router-link to="/home"><img src="./images/logo.png" alt=""></router-link>
                   
                </div>
                <div class="search">
                    <form class="">
                        <input type="text" class="searchInput" v-model="keyword">
                        <button class="searchButton" @click="goSearch">搜索</button>
                    </form>                
                </div>
            </div>

        </div>
</template>

<script>
export default {
    name:'MyHaeder',
    data() {
        return {
            keyword:''
        }
    },
    methods: {
        //搜索按钮的回调函数,需要向search路由进行跳转
        /* goSearch(){
            this.$router.push('/search')
        } */
        goSearch(){
            //如果有query参数，也带带上
            if(this.$route.query){
                let location = {name:'search',params:{keyword:this.keyword || undefined}}
                location.query = this.$route.query
                this.$router.push(location)
            }
  
        },
        //退出登录
        async loginOut(){
           try {
            //清除项目中得数据
            await this.$store.dispatch('getLoginOut')
            this.$router.push('/login')
           } catch (error) {
               
           }
        } 
    },
    mounted() {
        //通过全局事件总线清空关键字
        this.$bus.$on('clear',()=>{
            this.keyword  = ''
        })
    },
    computed:{
        userName(){
            return this.$store.state.user.userInfo.name
        }
    }
}
</script>

<style scoped>
    .top{
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;
    }
    .container{
        width: 1200px;
        margin: 0 auto;
        font-size: 12px;       
    }
    .loginList{
        float: left;
    }
    .typeList{
        float: right;
    }
    .loginList a{
        margin-right: 3px;
    }
    .loginList a+a{
        border-left: 1px solid #b3aeae;
        padding-left: 5px;
    }
    .typeList a+a{
        border-left: 1px solid #b3aeae;
        padding: 0 10px;
    }
    .typeList a{
        padding: 0 10px;
    }
    .bottom{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .logoArea{
        float: left;
    }
    .search{
        float: right;
        margin-top: 35px;
    }
    .bottom .logoArea img{
        width: 175px;
        margin: 25px 45px;
    }
    .searchInput{
        width: 490px;
        height: 32px;
        float: left;
        border: 2px solid red;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .searchButton{
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
    }
</style>