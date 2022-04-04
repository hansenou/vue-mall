<template>
  <div class="swiper-container">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="carousel in list"
          :key="carousel.id"
        >
          <img :src="carousel.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
//轮播图引包
import Swiper from "swiper";
export default {
  name: "Carousel",
  props:['list'],
  watch: {
    list: {
      //立即监听
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper", {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>