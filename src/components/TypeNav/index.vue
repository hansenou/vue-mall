<template>
<div class="type-nav"> 
    <div class="type-nav-container"  @mouseleave="leaveShow">
        
        <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
        <nav class="nav"  @mouseenter="leaveShow">
            <a href="">服装城</a>
            <a href="">美妆馆</a>
            <a href="">超市</a>
            <a href="">全网购</a>
            <a href="">闪购</a>
            <a href="">团购</a>
            <a href="">有趣</a>
            <a href="">秒杀</a>
        </nav>
       
        <div class="sort" v-show="show" >
            <div class="sortList" @click="goSearch">
                <div class="item" v-for="c1 in categoryList.slice(0,15)" :key="c1.categoryId">
                    <h3 style="font-size: 14px;padding: 0 20px;margin: 0;">
                        <a class="item-a" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                    </h3>
                    
                    
                    <div class="item-list">
                        <div class="items" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                            <dl class="dl-list">
                                <dt class="dl-list-dt">
                                    <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                    
                                </dt>
                                <dd v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                    
                                    
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</div>

</template>

<script>
import { mapState } from "vuex"
export default {
    name:'TypeNav',
    data() {
        return {
            show:true
        }
    },
    computed:{
        ...mapState({
            categoryList:(state)=>{
                return state.home.categoryList
            }
        })
    },
    //组件挂载完毕，可以向服务器发请求
    mounted() {
       
        
        if(this.$route.path!='/home'){
            this.show=false
        }
    },
    methods:{
        //商品分类的三级联动路由跳转+参数传递
        goSearch(event){
            //利用编程式导航+事件委托实现
            //存在问题：事件委托，把全部子节点【h3,dt,dl,em】的事件给父节点
            //1、怎么确定点击的是a标签
            //在a标签中加上自定义属性data-categoryName，其他标签是没有的
            //2、确定点的是a标签，怎么区分1，2，3级
            let e = event.target
            //节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
            let {categoryname,category1id,category2id,category3id} = e.dataset
            //如果标签上有categoryname一定是a标签
            if(categoryname){
                //整理路由跳转的参数
                let location = {name:'search'}
                let query = {categoryName:categoryname}
                //1级分类，2级分类，3级分类的a标签
                if(category1id){
                    query.category1Id=category1id
                }else if(category2id){
                    query.category2Id=category2id
                }
                else{
                    query.category3Id=category3id
                }

                //如果路由跳转，带有params参数，也要带过去
                if(this.$route.params){
                    location.params = this.$route.params

                    //整理完参数
                    location.query=query
                
                    //路由跳转
                    this.$router.push(location)
                }
                
            }
        },
        //鼠标移入时，进行商品分类展示
        enterShow(){
            this.show = true
        },
        //鼠标离开时，商品分类隐藏
        leaveShow(){
            if(this.$route.path!='/home'){
                this.show = false
            }
        }

    }

}
</script>

<style scoped>
 /* #region */

 .item-a{
     display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
 }

 .items {
    display: flex;
       justify-content: center;
       align-content: center;
}
    .dl-list-dt a{
        float: left;
    }
    .dl-list dd{
       
        font-size: 12px;
        float: left;
        
    }
    .dl-list a{
        padding: 0 10px;
        border-left: 1px solid #ccc;
        margin-top: 5px;
    }
    .dl-list{
 
        width: 700px;
        height: 30px;
        padding: 3px;
      
    }
    .item:hover .item-list{
        display: block;
    }
    .item a:hover {
        text-decoration:underline;
        background: skyblue;
    }
    .item-list{
        position: absolute;
        top: 0px;
        left: 210px;
        width: 734px;
        height: 460px;
        background:#f7f7f7;
        
        display: none;
    }

    /* .item a{
        padding: 0 20px;
        font-size: 14px;
        line-height: 30px;
    } */
    .sort{
        
        width: 210px;
        height: 460px;
        position: absolute;
        top: 45px;
        background-color: #fff;
        z-index: 999;
        
    }
    .type-nav-container{
        width: 1200px;
        margin: 0 auto;      
        display: flex;
        position: relative;
    }
    .type-nav-container .all{
        width: 210px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        background-color: #ea4a36;
        color: #fff;
        font-size: 15px;
    }
    .nav a{
        margin: 0 30px;  
        line-height: 45px;
        color: black;      
    }
    .nav a:hover{
        background-color: #ea4a36;
        color: #fff;
        text-decoration:underline
    }
    
</style>