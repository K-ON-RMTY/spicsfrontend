<template>
  <div>
    <navigator></navigator>
    <div class="space-container">
      <div class="user-info-container">
        <div class="user-info-wrapper">
          <div class="avatar-container vertical-middle">
            <img
              src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
              alt="头像"
              class="avatar"
            />
          </div>
          <!-- 关注粉丝 -->
          <div class="follow-container vertical-middle">
            <div class="follow">
              关注：<span class="follow-num">123</span>
            </div>
            <div class="fan">
              粉丝：<span class="follow-num">123</span>
            </div>
          </div>
          <!-- 个人简介 -->
          <div class="introduce-container">这个人什么也没写~
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad ut non numquam deserunt vero quaerat. Quo et, eligendi magni dolor impedit eaque quas aut. Possimus ut dolore pariatur reiciendis!
          </div>
        </div>
      </div>
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
export default {
  name: "space",
  components: {
    Navigator,
  },
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
  .user-info-container {
    height: 300px;
    position: relative;
    background-color: rgb(229, 152, 138);
    .user-info-wrapper {
      width: 700px;
      height: 300px;
      position: relative;
      left: 10%;
      // background-color: turquoise;
      .avatar-container {
        position: absolute;
        left: 20%;
        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
      }
      .follow-container {
        position: absolute;
        left: 40%;
        font-size: 18px;
        div {
          float: left;
        }
        .fan {
          margin-left: 10px;
        }
      }
      .introduce-container {
        position: absolute;
        left: 40%;
        top: 55%;
        width: 300px;
        // overflow: hidden;
        // border-top: 1px solid black;
      }
    }
  }
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
  }
}
</style>
