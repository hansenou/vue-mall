<template>
  <div class="search-main">
      <div class="search-container">
        <!--  筛选区 -->
        <div class="selector">
          <div class="selector-container">
            <div class="type-wrap-barn">
              <div class="type-wrap-key">品牌</div>
              <div class="type-wrap-content-logo">
                <ul class="content-lisr-logo">
                  <li v-for="trademark in trademarkList" :key="trademark.tmId" @click="handerMark(trademark)">{{trademark.tmName}}</li>
                  
                </ul>
              </div>

              <div class="span">
                <span><a href="">多选</a></span>
                <span><a href="">更多</a></span>
              </div>
            </div>
            <!-- 平台售卖的属性 -->
            <div class="type-wrap" v-for="attrs in attrsList" :key="attrs.attrId">
              <!-- 卖的属性 -->
              <div class="type-wrap-key">{{attrs.attrName}}</div>
              <div class="type-wrap-content">
                <ul class="content-lisr">
                  <!-- 卖的属性值 -->
                  <li v-for="content in attrs.attrValueList" :key="content.id" @click="attrInfo(attrs,content)"><a>{{content}}</a></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name:'SearchSelect',
    computed:{
      ...mapGetters(['trademarkList','attrsList'])
    },
    methods: {
      //品牌的事件处理函数子给父传数据，用自定义事件
      handerMark(trademark){
        this.$emit('trademarkInfo',trademark)
      },
      //平台售卖属性值的点击事件
      attrInfo(attrs,content){
        this.$emit('attr',attrs,content)
      }
    },
}
</script>

<style scoped>

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
  color: red;
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
</style>