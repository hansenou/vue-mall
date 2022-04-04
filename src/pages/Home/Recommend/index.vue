<template>
 <div class="rank">
            <div class="tab">
                <div class="tab-content">
                    <a href="" class="tab-content-a">
                        <p class="tab-content-p" style="background-position: -35px 0;">
                            <i></i>
                        </p>
                        <p style="color: #ea4a36;">热卖排行</p>
                    </a>
                    <a href="" class="tab-content-a">
                        <p class="tab-content-p">
                            <i></i>
                        </p>
                        <p>热卖排行</p>
                    </a>
                    <a href="" class="tab-content-a">
                        <p class="tab-content-p">
                            <i></i>
                        </p>
                        <p>热卖排行</p>
                    </a>


                </div>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item">
                            <a href=""><img src="./images/1.jpg" alt=""></a>
                            <div class="tab-info">
                                <div class="tab-info-title">
                                    <a href="">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <div class="tab-info-price">
                                    <p>定金：¥100.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="img-item">
                            <a href=""><img src="./images/1.jpg" alt=""></a>
                            <div class="tab-info">
                                <div class="tab-info-title">
                                    <a href="">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <div class="tab-info-price">
                                    <p>定金：¥100.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="img-item">
                            <a href=""><img src="./images/1.jpg" alt=""></a>
                            <div class="tab-info">
                                <div class="tab-info-title">
                                    <a href="">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <div class="tab-info-price">
                                    <p>定金：¥100.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="img-item">
                            <a href=""><img src="./images/1.jpg" alt=""></a>
                            <div class="tab-info">
                                <div class="tab-info-title">
                                    <a href="">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</a>
                                </div>
                                <div class="tab-info-price">
                                    <p>定金：¥100.00</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-info-price{
        padding: 10px 0;
        font-size: 20px;
        color: red;
    }
    .tab-info{
        padding: 10px;
        background: #fafafa;
       
    }
    .tab-info-title a{
        font-size: 13px;

    }
    .content li{
       display: flex;
    }
    
    .img-item{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
    }
    .img-item img{
        width: 200px;
        height: 200px;
    }
    .tab-content-a p{
      margin: 5px 0;
    }
    .tab-content a:hover{
       color: blue;
    }
    .tab-content a{
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tab-content{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
    .rank{
        width: 1200px;
        margin: 0 auto;
    }
    .tab-content-p{
        background: url(./images/bg0.png);
        width: 35px;
        height: 35px;

    }
</style>