<template>
  <div class="navgator-container">
    <div class="nav-container">
      <div class="navgator">
        <div class="logo-container">
          <div class="logo">绘画分享</div>
        </div>
        <div
          class="kind-container"
          @mouseover="dealKindsOver"
          @mouseleave="dealKindsLeave"
        >
          <div class="kind-word"><span>分类</span></div>
          <ul class="kinds" :class="{ showkinds: isShowKinds }">
            <li>国风</li>
            <li>水彩</li>
            <li>素描</li>
            <li>其他</li>
          </ul>
        </div>
        <div class="search-container">
          <div class="search">
            <input type="text" class="search-inp" placeholder="搜索框" />
            <!-- 搜索图标 -->
            <span class="iconfont search-icon">&#xe638;</span>
          </div>
        </div>
        <div class="upload-container">
          <!-- 发布图标 -->
          <div class="upload" @click="dealUpload">发布</div>
        </div>
        <div class="user-info" @click="dealToSpace">
          <div class="avatar-container">
            <img class="avatar" :src="user.avatar" alt="头像" />
          </div>
        </div>
        <div class="setting-container" @click="dealToSetting">
          <div class="setting">设置</div>
        </div>
      </div>
    </div>

    <upload v-if="isShowUpload" @isCancel="isCancel"></upload>
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "navgator",
  data() {
    return {
      kinds: [],
      isShowKinds: false,
      isShowUpload: false,
      isShowUpload: false,
    };
  },
  components: {
    Upload,
  },
  props: {
    user: {
      type: Object,
      default() {
        return {
          avatar:
            "http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg",
          username: "未登录",
        };
      },
    },
  },
  mounted() {
    // 异步获取种类
  },
  methods: {
    getKindsInfo() {
      axios.get("/api/kinds").then(this.handleKindsInfo)
    },
    handleKindsInfo(res) {
      res = res.data
      console.log(res)
    },
    dealKindsOver() {
      // 鼠标移入分类容器时，显示分类
      this.isShowKinds = true
    },
    dealKindsLeave() {
      this.isShowKinds = false
    },
    dealUpload() {
      // 点击发布按钮当初发布组件
      this.isShowUpload = true
    },
    isCancel() {
      // 隐藏发布组件
      this.isShowUpload = false
    },
    dealToSetting () {
      this.$router.push('/setting')
    },
    dealToSpace () {
      this.$router.push("/space")
    }
  },
};
</script>

<style lang="less" scoped>
@pare-height: 70px;
@div-width: 12%;
.navgator-container {
  // background-color: red;
  // height: @pare-height;
  // height: 100%;
  // 待修正
  // 此处重复嵌套了一层，原本是为了让upload占满整个页面，其实upload设置为abosolue后的父元素是home-container
  .nav-container {
    height: @pare-height;
    border-bottom: 1px solid black;
    .navgator {
      // background-color: yellow;
      width: 80%;
      height: @pare-height;
      // 居中
      margin: auto;
      // display: flex;
      position: relative;
      div {
        float: left;
        // 暂时
        margin-right: 3%;
      }
      .logo-container {
        // background-color: violet;
        width: @div-width;

        overflow: hidden;
        .logo {
          box-sizing: border-box;
          // 使文字垂直居中
          line-height: @pare-height;
          width: 100%;
          // 30px
          font-size: 20px;
          // background-color: black;
          color: black;
          // 使文字居中
          text-align: center;
        }
      }
      .kind-container {
        width: @div-width;
        // background-color: aqua;
        position: relative;
        .kind-word {
          width: 100%;
          line-height: @pare-height;
          font-size: 20px;
          text-align: center;
        }
        .kinds {
          position: absolute;
          width: 100%;
          height: 0;
          top: @pare-height;
          border: 1px solid black;
          border-bottom: none;
          overflow: hidden;
          transition: height 0.5s;
          li {
            height: 25px;
            box-sizing: border-box;
            line-height: 25px;
            text-align: center;
            border-bottom: 1px solid gray;
          }
          li:hover {
            cursor: pointer;
            background-color: #b5abab73;
          }
        }
        .showkinds {
          height: 100px;
        }
      }
      .kind-container:hover {
        cursor: pointer;
      }
      .search-container {
        // background-color: sienna;
        width: 25%;
        height: @pare-height;
        box-sizing: border-box;
        position: relative;
        .search {
          width: 190px;
          height: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          .search-inp {
            border-radius: 25px;
            padding-left: 10px;
            padding-right: 20px;
            border: 1px solid black;
            width: 160px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .search-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 6px;
          }
        }
      }
      .upload-container {
        // background-color:aquamarine;
        width: @div-width;
        height: @pare-height;
        position: relative;
        .upload {
          width: 100px;
          height: 40px;
          font-size: 20px;
          // 文字垂直水平居中
          line-height: 40px;
          text-align: center;
          border-radius: 25px;
          // 垂直居中
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          border: 1px solid black;
        }
      }
      .upload:hover {
        cursor: pointer;
      }
      .user-info {
        width: @div-width;
        // background-color: salmon;
        height: @pare-height;
        position: relative;
        .avatar-container {
          width: 65px;
          height: 65px;
          // background-color: cornflowerblue;
          // 垂直居中
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          .avatar {
            width: 65px;
            height: 65px;
            border-radius: 50%;
          }
        }
      }
      .user-info:hover {
        cursor: pointer;
      }
      .setting-container {
        width: @div-width;
        height: @pare-height;
        // background-color: hotpink;
        margin-right: auto;
        position: relative;
        .setting {
          width: 100px;
          height: 40px;
          font-size: 20px;
          // 文字垂直水平居中
          line-height: 40px;
          text-align: center;
          border-radius: 25px;
          // 垂直居中
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          border: 1px solid black;
        }
      }
      .setting:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
