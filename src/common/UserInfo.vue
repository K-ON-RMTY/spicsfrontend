<template>
  <div class="user-info-container align-center">
    <div class="user-info-wrapper">
      <div class="avatar-container vertical-middle">
        <img
          src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
          alt="头像"
          class="avatar"
        />
      </div>
      <div class="username-container">username</div>
      <!-- 关注粉丝 -->
      <div class="follow-container vertical-middle">
        <div class="follow">
          关注：<span class="follow-num" @click="dealToFollow">123</span>
        </div>
        <div class="fan">
          粉丝：<span class="follow-num" @click="dealToFans">123</span>
        </div>
      </div>
      <!-- 个人简介 -->
      <div class="introduce-container">
        这个人什么也没写~ Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti ad ut non numquam deserunt vero quaerat. Quo et, eligendi
        magni dolor impedit eaque quas aut. Possimus ut dolore pariatur
        reiciendis!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    dealToFollow() {
      this.$router.push(`/follow/${this.user.id}`);
    },
    dealToFans() {
      this.$router.push(`/fans/${this.user.id}`);
    },
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
.user-info-container {
  width: 80%;
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
    .username-container {
      position: absolute;
      left: 40%;
      font-size: 20px;
      color: rgb(114, 101, 101);
      top: 35%;
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
      .follow-num:hover {
        cursor: pointer;
        color: rgb(139, 126, 126);
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
</style>
