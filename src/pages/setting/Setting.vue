<template>
  <div class="setting">
    <navgator></navgator>
    <div class="setting-container">
      <!-- 头像 -->
      <div class="avatar-container">
        <div class="avatar-setting">
          <div class="avatar-wrapper">
            <!-- <img :src="user.avatar" alt="头像" class="avatar"> -->
            <img
              src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
              alt="头像"
              class="avatar"
            />
          </div>
          <div class="avatar-select">
            <label for="avatar" class="iconfont avatar-icon">&#xe61f;</label>
            <input type="file" id="avatar" class="avatar-inp" />
          </div>
        </div>
      </div>
      <!-- 用户名 -->
      <div class="username-container">
        <p class="title">修改用户名</p>
        <input
          type="text"
          class="username-inp inp"
          :placeholder="user.username"
        />
        <div class="username-btn btn">确认修改</div>
      </div>
      <!-- 密码 -->
      <div class="pwd-container">
        <p class="title">修改密码</p>
        <input type="text" class="pwd-inp-1 inp" placeholder="新的密码" />
        <input type="text" class="pwd-inp-2 inp" placeholder="再次输入" />
        <div class="pwd-btn btn">确认修改</div>
      </div>
      <!-- 个人简介 -->
      <div class="introduce-container">
        <p class="title">修改个人简介</p>
        <textarea class="introduce-inp"></textarea>
        <div class="introduces-btn btn">确认修改</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navgator from "../../common/Navgator";
export default {
  name: "setting",
  components: {
    Navgator,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="less" scoped>
.setting-container {
  width: 900px;
  height: 892px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  .title {
    font-size: 20px;
    padding-left: 40px;
    padding-top: 30px;
  }
  .inp {
    width: 250px;
    height: 30px;
    border: 1px solid black;
    border-radius: 25px;
    padding-left: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn {
    height: 30px;
    line-height: 30px;
    padding: 0 4px;
    position: absolute;
    right: 200px;
    border: 1px solid black;
    border-radius: 25px;
    cursor: pointer;
  }
  .avatar-container {
    height: 180px;
    // background-color: darkcyan;
    position: relative;
    .avatar-setting {
      position: relative;
      width: 400px;
      height: 200px;
      // background-color: darkkhaki;
      left: 50%;
      transform: translateX(-50%);
      .avatar-wrapper {
        position: absolute;
        // left: 100px;
        top: 50%;
        transform: translateY(-50%);
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .avatar-select {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        // background-color: darkgoldenrod;
        position: absolute;
        left: 300px;
        top: 50%;
        transform: translateY(-50%);
        padding-right: 3px;
        // background-color: rgb(238, 146, 130);
        .avatar-icon {
          font-size: 100px;
          
        }
        .avatar-inp {
          display: none;
        }
      }
    }
  }
  .username-container {
    height: 200px;
    // background-color: darkmagenta;
    position: relative;
    .username-inp {
      top: 80px;
    }
    .username-btn {
      top: 150px;
    }
  }
  .pwd-container {
    height: 250px;
    // background-color: salmon;
    position: relative;
    .pwd-inp-2 {
      top: 150px;
    }
    .pwd-btn {
      top: 200px;
    }
  }
  .introduce-container {
    position: relative;
    .introduce-inp {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 400px;
      height: 160px;
      padding: 4px;
      resize: none;
      font-size: 17px;
      border: 1px solid black;
      border-radius: 25px;
    }
    .introduces-btn {
      top: 225px;
    }
  }
}
</style>
