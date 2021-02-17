<template>
  <div class="container">
    <div class="register-container">
      <div class="logo-container">
        <p>SPICS</p>
      </div>
      <p class="error-msg" v-if="isError">{{msg}}</p>
      <input class="username" type="text" v-model="username" placeholder="用户名"/>
      <input class="password" type="password" v-model="password" placeholder="密码"/>
      <!-- 重复验证密码 -->
      <input type="password" v-model="repeatpassword" placeholder="再次输入密码"/>
      <p class="judge-same" v-if="!isSamePwd">两次密码不相同，请重新输入!</p>
      <button class="register-btn" @click="dealRegister">注册</button>
       <router-link to="/login">已有账号？登录</router-link>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      repeatpassword: "",
      msg: "",
      isError: false
    };
  },
  computed :{
    isSamePwd : {
      get() {
        if(this.repeatpassword != ''){
          return this.password == this.repeatpassword
        }else {
          return true;
        }
      }
    }
  },
  methods: {
    // 点击注册就发送异步请求
    dealRegister() {
      if (this.username =='' || this.repeatpassword == '' || !this.isSamePwd) {
        this.msg = "请按要求输入用户名或密码"
        this.isError = true
        return
      }
      axios
        .post(
          "/api/user/register",
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
        // 跳转到登录界面
        this.$router.push('/login')
      }else if (res.status == 300) {
        this.dealError(res.msg)
      }else if (res.status == 500) {
        this.dealError(this.msg)
      }
      else {
        // 其他错误，尚未定义
      }
    },
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
    background-image: url('~@/assets/img/v2-3f29592b9930978672d97a3bcef7f05c_r.jpg');
    background-size: cover;
    position: relative;
    .register-container {
      // 设置垂直居中
      position: absolute;
      height: 450px;
      width: 400px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: rgba(255,255,255,.3);
      .logo-container {
        height: 100px;
        color:rgb(82, 75, 75);
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
        color:red;
        left: 55px;
        top: 95px;
      }
      .judge-same {
        color: red;
        margin-top: -10px;
        margin-left: 50px;
        font-size: 14px;
      }
      .register-btn {
        position: absolute;
        width: 100px;
        height: 45px;
        border: 2px solid #313437;
        background-color:#313437;
        color: honeydew;
        border-radius: 25px;
        right: 35px;
        transition: background-color .5s, color 1s, border-color .5s;
      }
      .register-btn:hover {
        background-color: honeydew;
        color: #313437;
        border-color: honeydew;
      }
      // router-link样式
      a {
        display: block;
        position: absolute;
        top:340px; 
        left: 20px;
      }
    }
  }
</style>
