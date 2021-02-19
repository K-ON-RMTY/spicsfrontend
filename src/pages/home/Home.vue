<template>
  <div class="home-container">
    <navgator></navgator>
  </div>
</template>

<script>
import Navgator from '../../common/Navgator'
export default{
  name : 'home',
  components : {
    Navgator
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
