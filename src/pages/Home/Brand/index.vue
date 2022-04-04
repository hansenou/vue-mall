<template>
   <div class="brand"> 
            <div class="brand-container">
                <ul class="brand-list">
                    <li class="brand-item"><img src="./images/brand_03.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_05.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_07.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_09.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_11.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_13.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_15.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_17.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_19.png" alt=""></li>
                    <li class="brand-item"><img src="./images/brand_21.png" alt=""></li>
                </ul>
            </div>
        </div>

</template>

<script>
export default {

}
</script>

<style>
.brand-item img{
        border-left: 1px dotted #ccc;
        padding: 0 10px;
        
    }
    .brand-item{
        flex: 1;
    }
    .brand-container{
        margin: 15px 0;
    }
    .brand{
        width: 1200px;
        margin: 0 auto;
    }
    .brand-list{
        display: flex;
        background: #f7f7f7;
        padding: 15px 0;
        
    }
</style>