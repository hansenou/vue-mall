<template>
  <div class="trade-container">
    <div class="trade-context">
      <h3>填写并核对订单信息</h3>
      <div class="trade-Info">
        <!-- 收件人信息 -->
        <div class="Info">
          <h5>收件人信息</h5>
          <div
            class="addressee-info"
            v-for="address in addressInfo"
            :key="address.id"
          >
            <span
              class="addressee-name"
              :class="{ selected: address.isDefault == 1 }"
              >{{ address.consignee }}</span
            >
            <p @click="changeDefault(address, addressInfo)">
              <span class="addressee-address">{{ address.fullAddress }}</span>
              <span class="addressee-phone">{{ address.phoneNum }}</span>
              <span class="address" v-show="address.isDefault == 1"
                >默认地址</span
              >
            </p>
          </div>
        </div>
        <div class="link"></div>
        <!-- 支付方式 -->
        <div class="Info">
          <h5>支付方式</h5>
          <div class="addressee-info">
            <span class="addressee-name selected">在线支付</span>
            <span class="">货到付款</span>
          </div>
        </div>
        <div class="link"></div>
        <!-- 送货清单 -->
        <div class="Info">
          <h5>送货清单</h5>
          <div class="addressee-info">
            <div class="distribution">
              <div class="distribution-contex">
                <h5>配送方式</h5>
                <div style="margin-top: 10px; display: flex">
                  <div class="addressee-name">
                    <span>天天快递</span>
                  </div>
                  <span style="margin-top: 5px"
                    >配送时间：预计8月10日（周三）09:00-15:00送达</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="addressee-info">
            <div class="distribution">
              <div class="distribution-qingdan">
                <h5>商品清单</h5>
                <ul
                  class="goodslist"
                  v-for="order in orderInfo.detailArrayList"
                  :key="order.skuId"
                >
                  <li>
                    <img :src="order.imgUrl" alt="" />
                  </li>
                  <li>
                    <p>
                      {{ order.skuName }}
                    </p>
                    <h4>7天无理由退货</h4>
                  </li>
                  <li>
                    <h3>${{ order.orderPrice }}.00</h3>
                  </li>
                  <li>X{{ order.skuNum }}</li>
                  <li>有货</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="link"></div>

        <!-- 买家留言 -->
        <div class="Info">
          <h5>买家留言</h5>
          <input
            type="text "
            placeholder="建议留言前先与商家沟通确认"
            class="liuyan"
            v-model="message"
          />
        </div>

        <!-- 发票信息 -->
        <div class="Info">
          <h5>发票信息</h5>
          <div class="fapiao">
            <div>普通发票</div>
            <div>个人明细</div>
          </div>
        </div>
        <!-- 使用优惠 -->
        <div class="Info">
          <h5>使用优惠</h5>
        </div>
      </div>

      <div class="momey">
        <div class="momey-context">
          <ul class="momey-ul">
            <li>
              <b>
                共<i>{{ allGood }}</i
                >件，

                <i>{{ orderInfo.totalNum }}</i>
                种商品
              </b>
            </li>
            <li>
              <span>总商品金额:¥{{ orderInfo.totalAmount }}.00</span>
            </li>
            <li><span>返现</span><span>00</span></li>
            <li><span>运费</span><span>00</span></li>
          </ul>
        </div>
      </div>

      <div class="trade">
        <div class="momey-context">
          <div class="trade-price" style="text-align: right">
            应付金额:
            <span>¥{{ orderInfo.totalAmount }}.00</span>
          </div>

          <div class="receiveInfo">
            地址：
            <span>{{ userDefault.fullAddress }}</span>
            收货人：
            <span>{{ userDefault.consignee }}</span>
            电话：
            <span>{{ userDefault.phoneNum }}</span>
          </div>
        </div>
      </div>

      <div class="commit">
        <div class="momey-context">
          <a class="commit-neirong" @click="submitOrder">提交订单</a>

          <!-- <router-link class="commit-neirong" to="/pay">提交订单</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Trade",
  data() {
    return {
      message: "",
      //订单号
      orderId:'',
    };
  },
  mounted() {
    this.$store.dispatch("getUserAddress");
    this.$store.dispatch("getOrdaerInfo");
  },
  computed: {
    ...mapState({
      addressInfo: (state) => state.trade.address,
      orderInfo: (state) => state.trade.orderInfo,
      goods: (state) => state.trade.orderInfo.detailArrayList,
    }),
    //提交订单的地址
    userDefault() {
      //find:查找数组当中符合条件的元素返回
      return this.addressInfo.find((item) => item.isDefault == 1) || {};
    },
    //计算有多少件商品
    allGood() {
      return (
        this.goods?.reduce((acc, cur) => {
          return acc + cur.skuNum;
        }, 0) || 0
      );
    },
  },
  methods: {
    //修改默认地址
    changeDefault(address, addressInfo) {
      //修改全部的defaul为0
      addressInfo.forEach((itme) => (itme.isDefault = 0));
      address.isDefault = 1;
    },
    //提交订单
    async submitOrder() {
      let data = {
        consignee: this.userDefault.consignee,//收件人名
        consigneeTel: this.userDefault.phoneNum,//电话
        deliveryAddress: this.userDefault.fullAddress,//地址
        paymentWay: "ONLINE",
        orderComment: this.message,//留言
        orderDetailList: this.orderInfo.detailArrayList//商品信息
      };
      //需要带的参数 tradeNo
      let result = await this.$API.reqsubmitOrder(this.orderInfo.tradeNo,data);
      //如何提交成功
      if(result.code == 200){
        this.orderId = result.data
        //路由跳转+路由传参
        this.$router.push('/pay?orderId='+this.orderId)
      }else{
        alert(result.message)
      }
    
    },
  },
};
</script>

<style scoped>
.commit-neirong {
  width: 200px;
  height: 50px;
  background: red;
  color: white;
  line-height: 50px;
  text-align: center;
}
.commit {
  margin-top: 10px;
}
.momey-context div {
  padding: 10px 0;
}
.trade-context {
  padding: 10px 0;
}
.trade {
  width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
}
.momey-context {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.momey-ul li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.momey ul {
  width: 250px;
}
.momey {
  width: 1200px;
  margin: 20px 0;
}
.fapiao {
  display: flex;
  margin-top: 10px;
}
.liuyan {
  margin-top: 10px;
  width: 100%;
  border-color: #e4e2e2;
  height: 50px;
  outline: none;
  resize: none;
}
.goodslist li {
  flex: 1;
  text-align: center;
}
.goodslist {
  display: flex;
  padding: 10px;
}
.goodslist img {
  width: 100px;
  height: 100px;
}
.distribution-qingdan {
  width: 1000px;
  background: pink;
  padding: 10px;
}
.distribution-contex {
  width: 1000px;
  background: #f4f4f4;
  padding: 10px;
}
.trade-pay span {
  border: 1px solid #ddd;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.trade-pay {
  margin-top: 20px;
}
.link {
  width: 1100px;
  height: 1px;
  background-color: #ddd;
  margin: 0 auto;
}
.address {
  color: white;
  background-color: #878787;
}
.addressee-info span {
  margin: 0 10px;
}
.Info {
  margin-top: 20px;
}

.trade-Info {
  width: 1200px;
  margin: 0 auto;

  border: 1px solid #ddd;
  margin-top: 10px;
}
.addressee-info {
  margin: 20px;
  align-items: center;
}
.addressee-info .selected::after {
  display: block;
}
.addressee-info .selected {
  border-color: #e1251b;
}
.addressee-name::after {
  content: "";
  display: none;
  width: 13px;
  height: 13px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url(./images/choosed.png) no-repeat;
}
.addressee-name {
  border: 1px solid #ddd;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: relative;
}
.addressee-info {
  display: flex;
}
.trade-container {
  width: 1200px;
  margin: 0 auto;
}
</style>