<template>
  <div class="container">
    <div class="login-container">
      <div class="logo-container">
        <p>SPICS</p>
      </div>
      <p class="error-msg" v-if="isError">{{msg}}</p>
      <input class="username" type="text" v-model="username" placeholder="用户名"/>
      <input class="password" type="password" v-model="password" placeholder="密码"/>
      <button class="login-btn" @click="dealLogin">登录</button>
      <router-link to="/register">尚未登录？注册</router-link>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: "aaaaaaaaaaaaa",
      isError: false
    };
  },
  methods: {
    // 点击登录就发送异步请求
    dealLogin() {
      axios
        .post(
          "/api/user/login",
          qs.stringify({
            username: this.username,
            password: this.password,
          })
        )
        .then(res => {
          this.dealUserInfo(res)
        })
        .catch(error => {
          // 请求出错要求重试
          this.dealError("请求出错，重试!")
          console.log(error)
        });
    },
    dealUserInfo(res) {
      res = res.data;
      // 返回状态码
      console.log(res);
      if (res.status == 200) {
        if (res.data != null) {
          // 将获取的用户数据传递到state中存储
          this.handleUserInfo(res.data)
          // 跳转到主页
          this.$router.push('/home')
        } else {
          this.dealError(res.msg)
        }
      }else {
        // 其他错误，尚未定义
      }
    },
    ...mapActions(["handleUserInfo"]),
    dealError (msg) {
      this.isError = true
      this.msg = msg
    }
  },
};
</script>

<style lang='less' scoped>
  .container {
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/img/v2-eec7d5fb62ed11ee529e244f9f13e005_r.jpg');
    background-size: cover;
    position: relative;
    .login-container {
      // 设置垂直居中
      position: absolute;
      height: 450px;
      width: 400px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: rgba(0,0,0,.3);
      .logo-container {
        height: 100px;
        color:aliceblue;
        p {
          font-size: 80px;
          text-align: center;
          line-height: 100px;
        }
      }
      input {
        display:block;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-left: 40px;
        padding-left: 7px;
        border:2px solid white;
        border-radius: 25px;
      }
      .username {
        // 给错误信息留下显示空间
        margin-top: 30px;
      }
      .error-msg {
        position:absolute;
        font-size: 20px;
        color:#edb566;
        left: 55px;
        top: 95px;
      }
      .login-btn {
        position: absolute;
        width: 100px;
        height: 45px;
        border: 2px solid #fff;
        border-radius: 25px;
        right: 35px;
        transition: background-color .5s, color 1s, border-color .5s;
      }
      .login-btn:hover {
        background-color: #313437;
        border-color: #313437;
        color:whitesmoke;
      }
      // router-link样式
      a {
        display: block;
        position: absolute;
        top:280px; 
        left: 20px;
      }
    }
  }
</style>
