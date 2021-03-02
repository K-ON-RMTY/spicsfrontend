<template>
  <div>
    <navigator></navigator>
    <div class="img-info-container">
      <div class="img-container">
        <img src="https://w.wallhaven.cc/full/4d/wallhaven-4dmz8j.jpg" ref="image" @load="dealGetHeight"/>
      </div>
      <div class="info-container">
        <div class="avatar-container">
          <img :src="user.avatar" class="avatar" />
        </div>
        <div class="username-container">{{user.username}}</div>
        <div class="like-btn iconfont">&#xe67d;</div>
        <div class="description">
          &nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          accusantium magni exercitationem numquam explicabo, laborum ea veniam
          adipisci libero sint repellendus, sequi maxime quae dicta officiis
          aliquid quod non nobis.
        </div>
      </div>
      <div class="comment-container" :style="{top: commentTop}">
        <div class="comment-inp-container">
          <textarea  class="comment-inp" placeholder="请输入评论~"></textarea>
          <!-- <input type="text"/> -->
          <div class="inp-btn">发送</div>
        </div>
        <div class="comment-list-container">
          <div class="comment-wrapper">
            <div class="cuser-avater-container">
              <img :src="user.avatar" alt="" class="cuser-avatar" />
            </div>
            <div class="cusername">{{ user.username }}</div>
            <div class="comment">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, quo assumenda! Numquam quod pariatur similique
              blanditiis atque repellendus ipsa, perspiciatis ut doloremque
              placeat nam, exercitationem officia mollitia a? Et, officia.
            </div>
          </div>
          <div class="comment-wrapper">
            <div class="cuser-avater-container">
              <img :src="user.avatar" alt="" class="cuser-avatar" />
            </div>
            <div class="cusername">{{ user.username }}</div>
            <div class="comment">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, quo assumenda! Numquam quod pariatur similique
              blanditiis atque repellendus ipsa, perspiciatis ut doloremque
              placeat nam, exercitationem officia mollitia a? Et, officia.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../../common/Navgator";
export default {
  name: "imgInfo",
  data() {
    return {
      commentTop: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {
    Navigator,
  },
  methods: {
    dealGetHeight () {
      let imgHeight = this.$refs.image.offsetHeight
      // 图片容器top:50 再加上60间距
      this.commentTop = imgHeight+50+60+'px'
    }
  }
};
</script>

<style lang="less" scoped>
.img-info-container {
  position: relative;
  // 图片
  .img-container {
    width: 55%;
    position: absolute;
    top: 50px;
    left: 5%;
    img {
      width: 100%;
    }
  }
  // 图片信息
  .info-container {
    width: 30%;
    position: absolute;
    right: 5%;
    // top: 120px; //fixed
    top: 50px;
    height: 400px;
    background-color:rgb(240, 130, 111);
    
    .avatar-container {
      position: absolute;
      top: 10px;
      left: 5px;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .username-container {
      position: absolute;
      left: 100px;
      top: 30px;
      font-size: 24px;
    }
    .like-btn {
      font-size: 25px;
      position: absolute;
      top: 100px;
      left: 10px;
      font-weight: bold;
    }
    .description {
      position: absolute;
      top: 150px;
      font-size: 20px;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  .comment-container {
    width: 55%;
    position: absolute;
    // background-color: violet;
    left: 5%;
    // top: 由图片高度决定
    .comment-inp-container {
      // background-color: wheat;
      margin-top: 10px;
      height: 110px;
      border-bottom: 1px solid #f1f1ff;
      .comment-inp {
        // margin-top: 5px;
        margin-left: 25px;
        height: 60px;
        width: 80%;
        resize: none;
        // font-size: 18px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px 10px;
      }
      .inp-btn {
        border: 1px solid black;
        position: absolute;
        font-size: 17px;
        border-radius: 25px;
        right: 12%;
        top: 90px;
        padding: 4px 10px;
      }
      .inp-btn:hover {
        cursor: pointer;
      }
    }
    .comment-list-container {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      .comment-wrapper{
        // background-color: yellow;
        // height: 120px;
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border: 1px solid #f1f1f1;
        .cuser-avater-container{
          position: absolute;
          top: 10px;
          left: 10px;
          .cuser-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
        }
        .cusername {
          position: absolute;
          top: 80px;
          font-size: 17px;
          left: 10px;
          width: 60px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgb(141, 136, 136);
        }
        .comment {
          // position: absolute;
          width: 80%;
          margin-left: 90px;
          font-size: 18px;
          margin-top: 10px;
          max-width: 800px;
          min-height: 90px;
        }
      }
    }
  }
}
</style>
