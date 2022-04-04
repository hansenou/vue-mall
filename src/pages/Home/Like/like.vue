<template>
  <div class="like">
            <div class="like-container">
                <div class="like-title">
                    <h3 style="font-size: 30px;">猜你喜欢</h3>
                    <a href="">换一换</a>
                </div>
                <div class="like-item">
                    <ul>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_01.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_03.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_01.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_02.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_03.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        <li class="favouirte">
                            <a href=""><img src="./images/like_01.png" alt=""></a>
                            <div class="favouirte-container">
                                <div class="favouirte-text">
                                    <a href="">阳光美包新款单肩包女包时尚子母包四件套女</a>
                                </div>
                                <div class="favouirte-pirce">
                                    <p>¥222.00</p>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.favouirte img:hover{
        transform: scale(1.1);
    }
    .favouirte img{
        
        transition: all 400ms;
        cursor: pointer;
        
    }
    .favouirte-container{
        border-right: 1px solid #b3aeae;
        
    }
    .favouirte-pirce{
        color: #ea4a36;
        font-size: 20px;
        padding-top: 10px;
    }
    .favouirte-text{
       
        font-size: 13px;
    }
    .like-item{
        border: 1px solid #e4e4e4;
    }
    .like-item ul{
        display: flex;
    }
    .favouirte{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        margin: 15px;
        
       
    }
    .like-title a:hover{
        color: blue;
    }
    .like{
        padding-top: 20px;
    }
    .like-title{
        display: flex;
        justify-content: space-between;
    }
    .like-container{
        width: 1200px;
        margin: 0 auto;
    }
</style>