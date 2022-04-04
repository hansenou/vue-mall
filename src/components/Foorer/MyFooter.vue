<template>
    <div class="footer">
            <div class="footer-container">
                <div class="footer-list">
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <ul>
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <ul>
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <ul>
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <ul>
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <ul>
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                            <li>购物流程</li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h4>购物指南</h4>
                        <img src="./images/wx_cz.jpg" alt="">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <div class="dizhi">
                        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                        <p>京ICP备19006430号</p>
                    </div>
                    
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"MyFooter"
}
</script>

<style scoped>
.footer{
        background-color: #eaeaea;;
    }

    .footer-container{
        width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        
    }
    .footer-list{
        padding: 20px;
        border-bottom: 1px solid #e4e1e1;
        border-top: 1px solid #e4e1e1;
        overflow: hidden;
        padding-left: 40px;
    }
    .footer-item{
        float: left;
        width: 16.6666667%;
    }
    .footer-item li{
        font-size: 12px;
    }
    .dizhi{
        text-align: center;
        
    }
    .helpLink{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .space {
    border-left: 1px solid #666;
    width: 1px;
    height: 13px;
    background: #666;
    margin: 8px 10px;
    }
    .copyright{
        font-size: 12px;
        padding: 20px;
    }
</style>