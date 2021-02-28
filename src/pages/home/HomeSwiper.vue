<template>

    <swiper :options="swiperOption" class="swiper">
      <swiper-slide>
        <img  class="swiper-item" src="https://pic1.zhimg.com/80/v2-88ada09c72e58a03fd0a412aa988120c_720w.jpg">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-item"  src="https://pic2.zhimg.com/80/v2-9991b9ce42342dbb4bf45651cc617b51_720w.jpg">
      </swiper-slide>

      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>
</template>

<script>
export default{
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        spaceBetween: 30,
        effect: 'fade',
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .swiper {
    width: 900px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 100px;
    .swiper-item {
      width: 100%;
    }
  }
</style>
