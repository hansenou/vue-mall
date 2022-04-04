<template>
   <div class="today-recommend">
            <div class="py-container">
                <ul class="recommend">
                    <li class="colck">
                        <div class="time">
                            <img src="./images/clock.png" alt="">
                            <h3>今日推荐</h3>
                        </div>
                    </li>
                    <li>
                        <img src="./images/today01.png" alt="">
                    </li>
                    <li>
                        <img src="./images/today02.png" alt="">
                    </li>
                    <li>
                        <img src="./images/today03.png" alt="">
                    </li>
                    <li>
                        <img src="./images/today04.png" alt="">
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
.recommend li{
        flex: 1;
    }
    .recommend{
       
        background-color: #eaeaea;
        display: flex;
        margin: 10px 0;
    }
    .time{
        margin: 30px 0;
    }
    .colck{
        text-align: center;
        background-color: #5c5251;
        color:#eaeaea ;
    }
    .py-container{
        width: 1200px;
        margin: 0 auto;
       
    }
</style>