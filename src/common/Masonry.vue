<template>
  <div class="masonry-container">
    <div class="column">
      <div class="item" v-for="(item, index) in col_1" :key="index" @click="dealToImgInfo(1)">
        <img :src="item.url" />
        <div class="info-container">
          <div class="like-btn iconfont" >&#xe67d;</div>
          <div class="avatar-container">
            <img :src="user.avatar" class="avatar" />
          </div>
          <span class="username">{{user.username}}</span>
          <span class="description">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="item" v-for="(item, index) in col_2" :key="index">
        <img :src="item.url" />
        <div class="info-container">
          <div class="like-btn iconfont">&#xe67d;</div>
          <div class="avatar-container">
            <img :src="user.avatar" class="avatar" />
          </div>
          <span class="username">{{user.username}}</span>
          <span class="description">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="item" v-for="(item, index) in col_3" :key="index">
        <img :src="item.url" />
        <div class="info-container">
          <div class="like-btn iconfont">&#xe67d;</div>
          <div class="avatar-container">
            <img :src="user.avatar" class="avatar" />
          </div>
          <span class="username">{{user.username}}</span>
          <span class="description">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="item" v-for="(item, index) in col_4" :key="index">
        <img :src="item.url" />
        <div class="info-container">
          <div class="like-btn iconfont">&#xe67d;</div>
          <div class="avatar-container">
            <img :src="user.avatar" class="avatar" />
          </div>
          <span class="username">{{user.username}}</span>
          <span class="description">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "masonry",
  data() {
    return {
      isLike: false
    };
  },
  props: ["col_1", "col_2", "col_3", "col_4"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    dealLike (event) {

    },
    dealToImgInfo (id) {
      this.$router.push(`/info/${id}`)
    }
  }
};
</script>

<style lang="less" scoped>
.dislike {
  color: rgb(72, 182, 233);
}
.like {
  color: red;
}
.masonry-container {
  display: flex;
  flex-direction: row;
  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 4px;
    .item {
      margin-bottom: 5px;
      width: 100%;
      border: 1px solid #999;
      margin-bottom: 10px;
      position: relative;
      img {
        width: 100%;
      }
      .info-container {
        position: relative;
        height: 80px;
        .like-btn {
          position: absolute;
          right: 5px;
          bottom: 90px;
          font-size: 25px;
          font-weight: bold;
          color: rgb(72, 182, 233);
        }
        .avatar-container {
          position: absolute;
          // 垂直居中
          top: 50%;
          left: 5px;
          transform: translateY(-50%);
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            
          }
        }
        .username {
          position: absolute;
          font-size: 20px;
          left: 60px;
          top: 20%;
        }
        .description {
          position: absolute;
          left: 60px;
          top:45%;
          width: 70%;
          height: 40px;
          overflow: hidden;
        }
      }
    }
    .item:hover {
      cursor: pointer;
    }
  }
}
</style>
