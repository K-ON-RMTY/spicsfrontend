<template>
  <div>
    <navigator></navigator>
    <user-info></user-info>
    <div class="space-container">
      
      <div class="album-container">
        <div class="album-wrapper">
          <div class="album iconfont">&#xe62c;</div>
          <div class="album-name">eva</div>
        </div>
        <div class="album-wrapper">
          <div class="album iconfont">&#xe62c;</div>
          <div class="album-name">薰嗣</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../../common/Navgator";
import UserInfo from '../../common/UserInfo'
export default {
  name: "space",
  components: {
    Navigator,
    UserInfo,
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.vertical-middle {
  top: 50%;
  transform: translateY(-50%);
}
.align-center {
  left: 50%;
  transform: translateX(-50%);
}
.space-container {
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .album-container {
    // background-color: blueviolet;
    overflow: hidden;
    .album-wrapper {
      float: left;
      margin-top: 20px;
      margin-left: 20px;
      // background-color:cadetblue;
      .album {
        font-size: 100px;
      }
      .album-name {
        text-align: center;
      }
    }
    .album-wrapper:hover {
      cursor: pointer;
    }
  }
}
</style>
