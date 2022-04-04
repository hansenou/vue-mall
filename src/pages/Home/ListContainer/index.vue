<template>
  <!-- 中间轮播和右边的新闻 -->
        <div class="list-container">
            <div class="clearfix-list-container">
                <div class="center">
                  <Carousel :list="bannerList"></Carousel>
                </div>
                
               
                <div class="right">
                    <div class="news">
                        <h4><em>消息快报</em><span class="news-span">更多 ></span></h4>
                        <ul>
                            <li><span class="news-li-span">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li><span class="news-li-span">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li><span class="news-li-span">[特惠]</span>备战开学季 全民半价购数码
                            </li>
                            <li><span class="news-li-span">[公告]</span>备战开学季 全民半价购数码
                            </li>
                            <li><span class="news-li-span">[特惠]</span>备战开学季 全民半价购数码
                            </li>

                            
                        </ul>
                    </div>
                    <ul class="life">
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        <li class="life-item">
                            <i class="list-item"></i>
                            <span>话费</span>
                        </li>
                        
                    </ul>
                    <div class="asd">
                        <img src="./images/ad1.png" alt="">
                    </div>
                    
                </div>
            </div> 
        </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
    mounted() {
        //发送请求，将数据存到仓库中
        this.$store.dispatch("getBannerList");
    },
    computed: {
        ...mapState({ bannerList: state => state.home.bannerList })
    },

   
}
</script>

<style>
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.asd {margin-top: 5px;}
    .life-item span{
        line-height: 22px;
        font-size: 13px;
    }
    .life-item{
        width: 25%;
        height: 65px;
        text-align: center;
        border-left: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        margin-right: -1px;
        
    }
    .list-item{
        background-image: url(./images/icons.png);
        width: 61px;
        height: 40px;
        display: block;
       
    }
    .life{
        display: flex;
        flex-wrap: wrap;
        border-right: 1px solid #e4e4e4;
        
    }
    .news{
        border: 1px solid #e4e4e4;
        margin-top: 5px;
    }
    .news li{
        padding: 5px 5px;
        font-size: 13px;
        text-align: center;
    }
    .news-li-span{
        font-weight: 700;
    }
    .news h4{
        border-bottom: 1px solid #e4e4e4;
        padding: 5px 10px;
    }
    .news-span{
        float: right;
    }
    .right{
        float: left;
        width: 250px;
        
    }
    .center {
        box-sizing: border-box;
        width: 740px;
        height: 100%;
        padding:0 10px;
        float: left;
            box-sizing: border-box;
            overflow: hidden;
       
    }
    .clearfix-list-container{
      
        padding-left: 210px;
        height: 460px;
    }
    .list-container{
        width: 1200px;
        margin: 0 auto;
    }
/*     .swiper {
        width: 730px;
        height: 455px;
    }   */
</style>