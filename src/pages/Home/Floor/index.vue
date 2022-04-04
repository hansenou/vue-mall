<template>
  <div class="floor">
    <div class="py-container">
      <div class="py-title">
        <h2>{{ list.name }}</h2>
        <div class="titleList">
          <ul>
            <li v-for="title in list.navList" :key="title.index">
              <a href="">{{ title.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="floor-content">
        <div class="floor-container">
          <div class="floor-1">
            <ul>
              <li v-for="(keyword, index) in list.keywords" :key="index">
                {{ keyword }}
              </li>
            </ul>
            <img :src="list.imgUrl" style="width: 100%" />
          </div>
          <div class="floor-floorBanner">
            <Carousel :list="list.carouselList"></Carousel>
          </div>
          <div class="floor-split">
            <!--   v-for="recommend in list.recommendList" :key="recommend.index" -->
            <img :src="list.recommendList[0]" alt="" />
            <img :src="list.recommendList[1]" alt="" />
          </div>
          <div class="floor-split-centet">
            <img :src="list.bigImg" alt="" />
          </div>
          <div class="floor-split">
            <img :src="list.recommendList[2]" alt="" />
            <img :src="list.recommendList[3]" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    props: ["list"],

    
};
</script>

<style>
.floor-floorBanner {
  width: 330px;
  height: 100%;
  overflow: hidden;
}
.floor-container img:hover {
  opacity: 0.8;
}
.floor-container img {
  transition: all 400ms;
  overflow: hidden;
}
.floor-split img {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.floor-1 ul {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 10px 0;
}
.floor-1 li {
  width: 40%;
  border-bottom: 1px solid #e4e4e4;
  margin: 10px;
  font-size: 13px;
}
.floor-1 {
  width: 210px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.floor-container {
  height: 360px;

  display: flex;
}
.floor {
  margin-top: 15px;
}
.titleList a::after {
  content: "|";
  padding: 0 10px;
}
.titleList a:hover {
  color: blue;
}
.titleList {
  font-size: 14px;
  margin-top: 8px;
}
.titleList a {
  color: red;
}
.titleList ul {
  display: flex;
}
.py-container {
  width: 1200px;
  margin: 0 auto;
}
.py-title {
  display: flex;
  justify-content: space-between;
  color: red;
}
.floor-content {
  border-top: 2px solid #c81623;
  border-bottom: 1px solid #e4e4e4;
}
</style>