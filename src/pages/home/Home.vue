<template>
  <div class="home-container">
    <navgator></navgator>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import Navgator from '../../common/Navgator'
import HomeSwiper from './HomeSwiper'
export default{
  name : 'home',
  components : {
    Navgator,
    HomeSwiper
  },
  
}
</script>

<style lang="less" scoped>
  .home-container {
    width: 100%;
    height: 100%;
    // background-color:green;
    position: relative;
  }
</style>
