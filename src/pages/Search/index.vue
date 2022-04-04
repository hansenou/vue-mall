<template>
  <div>
    <TypeNav></TypeNav>
    <!-- 全部结果 -->
    <div class="search-result">
      <div class="allResult">
        <span>全部结果</span>
      </div>
      <ul class="search-result-ul">
        <!-- 分类的面包屑 -->
        <li class="search-result-li" v-if="searchParams.categoryName">
          {{ searchParams.categoryName }}<i @click="removecategoryName">x</i>
        </li>
        <!-- 关键字的面包屑 -->
        <li class="search-result-li" v-if="searchParams.keyword">
          {{ searchParams.keyword }}<i @click="removekeyword">x</i>
        </li>
        <!-- 品牌的面包屑 -->
        <li class="search-result-li" v-if="searchParams.trademark">
          {{ searchParams.trademark.split(":")[1]
          }}<i @click="removetrademark">x</i>
        </li>
        <!--售卖属性的面包屑 -->
        <li
          class="search-result-li"
          v-for="(attrValue, index) in searchParams.props"
          :key="index"
        >
          {{ attrValue.split(":")[1] }}<i @click="removeattr(index)">x</i>
        </li>
      </ul>
    </div>

    <!-- 搜索区 -->
    <SearchSelect @trademarkInfo="trademarkInfo" @attr="attr"></SearchSelect>

    <!-- 商品区，细节到商品 -->
    <div class="details">
      <div class="details-container">
        <!-- 综合和价格的排序 -->
        <div class="details-navbar">
          <ul>
            <li :class="{ actives: isOne }" @click="changeOrder('1')">
              综合<span
                v-show="isOne"
                class="iconfont"
                :class="{ 'icon-up': isAsc, 'icon-down': isDesc }"
              ></span>
            </li>
            <li :class="{ actives: isTwo }" @click="changeOrder('2')">
              价格<span
                v-show="isTwo"
                class="iconfont"
                :class="{ 'icon-up': isAsc, 'icon-down': isDesc }"
              ></span>
            </li>
          </ul>
        </div>
        <!-- 销售的商品 -->
        <div class="goods-list">
          <ul class="goods-list-conext">
            <li
              class="goods-list-conext-li"
              v-for="good in goodsList"
              :key="good.id"
            >
              <div class="goods-list-wrap">
                <div class="picture">
                  <router-link :to="`/detail/${good.id}`">
                    <img v-lazy="good.defaultImg" alt=""/>
                  </router-link>

                </div>
                <div class="price">
                  ￥<i>{{ good.price }}.00</i>
                </div>
                <div class="attr">
                  <a href="">{{ good.title }}</a>
                </div>
                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
              <div class="goods-list-btn">
                <button class="gouwu">加入购物车</button>
                <button class="shoucan">收藏</button>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <!--     pageNo：当前第几页
          pageSize：每一页展示多少条数据
          total：一共展示多少数据
          continues：代表分页连续页码个数 -->
    <Page :pagNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continues="5" @getPageNo="getPageNo"></Page>

    <!-- 热卖商品 -->
    <div class="hot-commodity">
      <div class="hot-container">
        <div class="hot-title"><h4>热卖商品</h4></div>
        <div class="hot-lits">
          <ul class="goods-list-conext">
            <li class="goods-list-conext-li">
              <div class="goods-list-wrap">
                <div class="picture">
                  <a href=""><img src="./images/mobile01.png" alt="" /></a>
                </div>
                <div class="attr">
                  <a href=""
                    >Apple苹果iPhone 6s(A1699)Apple苹果iPhone6s
                    (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                    (A1699)</a
                  >
                </div>
                <div class="price">￥<i>6088.00</i></div>

                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
            </li>
            <li class="goods-list-conext-li">
              <div class="goods-list-wrap">
                <div class="picture">
                  <a href=""><img src="./images/mobile01.png" alt="" /></a>
                </div>
                <div class="attr">
                  <a href=""
                    >Apple苹果iPhone 6s(A1699)Apple苹果iPhone6s
                    (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                    (A1699)</a
                  >
                </div>
                <div class="price">￥<i>6088.00</i></div>

                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
            </li>
            <li class="goods-list-conext-li">
              <div class="goods-list-wrap">
                <div class="picture">
                  <a href=""><img src="./images/mobile01.png" alt="" /></a>
                </div>
                <div class="attr">
                  <a href=""
                    >Apple苹果iPhone 6s(A1699)Apple苹果iPhone6s
                    (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                    (A1699)</a
                  >
                </div>
                <div class="price">￥<i>6088.00</i></div>

                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
            </li>
            <li class="goods-list-conext-li">
              <div class="goods-list-wrap">
                <div class="picture">
                  <a href=""><img src="./images/mobile01.png" alt="" /></a>
                </div>
                <div class="attr">
                  <a href=""
                    >Apple苹果iPhone 6s(A1699)Apple苹果iPhone6s
                    (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                    (A1699)</a
                  >
                </div>
                <div class="price">￥<i>6088.00</i></div>

                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
            </li>

            <li class="goods-list-conext-li">
              <div class="goods-list-wrap">
                <div class="picture">
                  <a href=""><img src="./images/mobile01.png" alt="" /></a>
                </div>
                <div class="attr">
                  <a href=""
                    >Apple苹果iPhone 6s(A1699)Apple苹果iPhone6s
                    (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                    (A1699)</a
                  >
                </div>
                <div class="price">￥<i></i></div>

                <div class="commit">已有<span>20000</span>人评论</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SearchSelect from "./SearchSelect/index.vue";
import { mapGetters, mapState } from "vuex";
 
export default {
  components: { SearchSelect},
  data() {
    return {
      searchParams: {
        //产品列表对应的id
        category1Id: "",
        category2Id: "",
        category3Id: "",
        //产品的名字
        categoryName: "",
        //搜索的关键字
        keyword: "",
        //排序：初始值状态是综合：降序
        //                  1 : desc
        order: "1:desc",
        //第几页
        pageNo: 1,
        //每一页展示的数据
        pageSize: 10,
        //平台属性的操作
        props: [],
        //品牌
        trademark: "",
      },
    };
  },
  beforeMount() {
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["goodsList"]),
    isOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    isTwo() {
      return this.searchParams.order.indexOf("2") != -1;
    },
    isAsc() {
      return this.searchParams.order.indexOf("asc") != -1;
    },
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
    //获取search模块展示产品一共有多少数据
    ...mapState({total:state=>state.search.searchList.total})
  },
  methods: {
    //把请求封装成一个函数，需要的时候调用即可
    getData() {
      this.$store.dispatch("getSearchList", this.searchParams);
    },
    //删除分类的名字
    removecategoryName() {
      //把带过去的参数去掉，还需要向服务器请求
      (this.searchParams.categoryName = undefined),
        (this.searchParams.category1Id = undefined),
        (this.searchParams.category2Id = undefined),
        (this.searchParams.category3Id = undefined),
        this.getData();
      if (this.$route.params) {
        this.$router.push({ name: "search", params: this.$route.params });
      }
    },
    //删除关键字
    removekeyword() {
      (this.searchParams.keyword = undefined), this.getData();
      //通知兄弟组件Hearder组件关键字清空
      this.$bus.$emit("clear");

      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
    },
    //品牌自定义事件的回调
    trademarkInfo(trademark) {
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getData();
    },
    //删除品牌的面包屑
    removetrademark() {
      this.searchParams.trademark = undefined;
      this.getData();
    },
    //收集平台属性的回调函数(自定义事件)
    attr(attr, attrValue) {
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;
      //数组去重
      if (this.searchParams.props.indexOf(props) == -1) {
        this.searchParams.props.push(props);
      }

      this.getData();
    },
    //删除售卖的属性
    removeattr(index) {
      this.searchParams.props.splice(index, 1);
      this.getData();
    },
    //综合排序
    changeOrder(flag) {
      //flag形参：代表点的是综合（1）还是价格（2）
      let orginOrder = this.searchParams.order;
      //准备一个新的order值
      let newOrder = "";
      //获取初始状态
      //1,2
      let orginFlag = orginOrder.split(":")[0];
      //asc,deasc
      let orginSort = orginOrder.split(":")[1];
      //点的是综合
      if (flag == orginFlag) {
        newOrder = `${orginFlag}:${orginSort == "desc" ? "asc" : "desc"}`;
      }
      //点的是价格
      else {
        newOrder = `${flag}:${"desc"}`;
      }
      this.searchParams.order = newOrder;

      this.getData();
    },
    //自定义事件的回调函数--获取当前第几页
    getPageNo(getNO){
      this.searchParams.pageNo = getNO
      this.getData()
    },

  },
  watch: {
    //监听路由信息是否发生改变，改变就再发请求
    $route(n, o) {
      //再次请求之前整理号带给服务器参数
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      this.getData();
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
    },
  },
};
</script>

<style scoped>
.hot-title h4 {
  padding: 10px;
}
.hot-title {
  background: #f1f1f1;
}
.hot-container {
  border: 1px solid #b3aeae;
  width: 1200px;
  margin: 0 auto;
}
.hot-commodity {
  margin-top: 20px;
}
/* #endregion */
/* 3、商品细节 */
/* #region */
.allpage {
  padding: 10px;
  margin: 10px;
}
.page-context-ul li {
  padding: 10px;
  margin: 10px;
  border: 1px solid #b3aeae;
}
.page-context-ul {
  display: flex;
}
.page-context {
  display: flex;
  justify-content: center;
}
.shoucan {
  font-size: 15px;
  color: #b3aeae;
  border: 1px solid #b3aeae;
}
.gouwu {
  font-size: 15px;
  color: red;
  border: 1px solid red;
}
.goods-list-btn {
  margin-top: 10px;
  padding: 0 20px 0 15px;
  display: flex;
  justify-content: space-around;
}
.goods-list-btn button {
  width: 80px;
  padding: 5px 10px;
  background-color: #fff;
  margin: 0px;
  padding: 0px;
  outline: none;
}
.commit span {
  color: blue;
}
.commit {
  margin-top: 10px;
  color: #b3aeae;
  padding-left: 15px;
}
.attr a {
  color: black;
  font-size: 14px;
}
.attr {
  margin-top: 5px;
  padding: 5px 20px 0 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 40px;
}
.price {
  font-weight: 700;
  padding-left: 15px;
  color: red;
  font-size: 25px;
  margin-top: 10px;
}
.picture img {
  width: 215px;
  height: 255px;
}
.picture {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.goods-list-conext-li {
  width: 20%;
  height: 100%;
}
.goods-list-conext {
  display: flex;
  flex-wrap: wrap;
}
.actives {
  color: white;
  background-color: red;
}
.details-navbar li {
  font-size: 15px;
  padding: 5px 10px;

  margin: 0 10px;
}
.details-navbar ul {
  display: flex;
}
.details-navbar {
  border: 1px solid #e2e2e2;
  background: #fbfbfb;
}
.details-container {
  margin-top: 30px;
  width: 1200px;
  margin: 0 auto;
}
.details {
  margin-top: 10px;
}

/* #endregion */

/* 2、筛选区 */
/* #region */
.content-lisr-logo a {
  color: red;
}
.span span {
  border: 1px solid #e4e4e4;
}
.span {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
}
.type-wrap-content-logo {
  float: left;
  padding: 10px 0 10px 20px;

  width: 1000px;
}
.content-lisr-logo li {
  text-align: center;
  line-height: 50px;
  float: left;
  width: 100px;
  height: 50px;
  border: 1px solid #e4e4e4;
}

.selector-container {
  border: 1px solid #e4e4e4;
}
.type-wrap-barn {
  display: flex;
  border-bottom: 1px solid #b3aeae;
}
.type-wrap-content {
  padding: 10px 20px;
}
.selector {
  width: 1200px;
  margin: 0 auto;
}
.content-lisr li {
  font-size: 13px;
  float: left;
  margin: 0 8px;

  text-align: center;
  border: 1px solid #e4e4e4;
}
.type-wrap {
  display: flex;
  border-bottom: 1px solid #b3aeae;
}
.type-wrap-key {
  font-size: 14px;
  background: #f1f1f1;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* #endregion */
/* 1、全部结果*/
/* #region */

.search-result-li i {
  margin-left: 10px;
}
.search-result-li:hover {
  color: blue;
}
.search-result-li {
  background: #f7f7f7;
  border: 1px solid #dedede;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  margin: 0 10px;
}

.search-result-ul {
  display: flex;
  font-size: 12px;
}

.search-result {
  display: flex;
  padding: 10px;
}

.search-container {
  margin-top: 10px;
}

.search-result {
  width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid #dedede;
}
</style>