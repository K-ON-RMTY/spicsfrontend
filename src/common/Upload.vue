<template>
  <div class="upload-cover">
    <div class="upload-box">
      <div class="close-btn iconfont" @click="dealCancelUpload">&#xe626;</div>
      <div class="word">上传图片</div>
      <div class="content">
        <div class="add-img">
          <!-- vue是数据驱动，用循环来动态添加组件 -->
          <div
            class="add-img-el img-el-container"
            v-for="(item, index) in imgList"
            :key="index"
          >
            <div class="delete-btn iconfont" @click="dealRemoveImg(item)">
              &#xe626;
            </div>
            <img :src="item" alt="图片" class="img-el" />
          </div>
          <div class="add-img-el add-img-icon" v-if="!isFull">
            <label class="iconfont upload-icon" for="imgs">&#xe61f;</label>
            <input
              type="file"
              name="imgs"
              id="imgs"
              @change="dealFileChange"
              ref="inputer"
              
            />
            <!--multiple 多图选择，有bug暂不用-->
          </div>
        </div>
        <div class="add-to-album">
          <div class="album-word">选择画集</div>
          <!-- 下拉框 -->
          <div class="album-name-container" @click="dealAlbumName">{{albumName}}</div>
          <div class="iconfont album-down-icon">&#xe6c0;</div>
          <div class="album-list-container" v-if="isShowAlbum">
            <div class="album-list" v-for="(item,index) in albumNameList" :key="index">
              {{item}}
            </div>
          </div>
          <div class="album-create-container" v-if="isShowAlbum">
            <!-- 创建画集 -->
            <input class="album-create">
            <div class="album-create-btn">创建</div>
          </div>
        </div>
        <div class="add-desc-container">
          <textarea name="imgsDesc"  class="add-desc">123</textarea>
        </div>
        <div class="add-kind"></div>
        <div class="upload-btn-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "upload",
  data() {
    return {
      // 存储缩略图片的url
      imgList: [],
      imgErrorMsg: "",
      isFull: false,
      albumName: "",
      albumNameList: ["aaa","bbb"],
      isShowAlbum: false,
    };
  },
  methods: {
    // 上传头像时也有用！！写完抽取出来
    dealFileChange(e) {
      // 获取input元素
      let inputDom = this.$refs.inputer;
      // 读取文件列表
      let files = inputDom.files;
      // MIME类型字符串是否含有image即为图片类型
      // 安全隐患：用户可以更改后缀名绕过检测，暂不处理
      // console.log(files[0].type.indexOf('aa'));
      // 循环遍历files
      for (let file of files) {
        // for in 和 for of区别
        console.log(file);
        if (/^image/.test(file.type)) {
          // // 使用FileReader将图片转为base64
          // let reader = new FileReader();
          // reader.readAsDataURL(file);
          // // 读取成功事件
          // reader.onload = function () {

          //   self.imgList.push(this.result);
          // }
          this.uploadImg(file);
        }
      }
    },
    uploadImg(file) {
      let param = new FormData();
      param.append("picFile", file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      // 上传图片,需要添加请求头
      axios
        .post("/api/pics/upload/img", param, config)
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            this.imgList.push(res.data.data);
            console.log(200);
          }else if (res.data.status == 201){
            this.imgList.push(res.data.data);
            // 图片成功上传，但已满6个
            this.isFull = true
            console.log(201);
          }else if(res.data.status == 300){
            // 图片已满，未上传，不可添加
            this.isFull = true
            this.imgErrorMsg = "不可再添加"
            console.log(300);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    dealCancelUpload() {
      axios.delete("/api/pics/delete/imgs").then((res) => {
        console.log(res);
      });
    },
    dealRemoveImg(url) {
      console.log(url);
      axios
        .post(
          "/api/pics/delete/img",
          qs.stringify({
            url,
          })
        )
        .then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            // 删除url
            this.imgList.pop(url);
            // 显示隐藏的上传图标
            this.isFull = false;
          } else {
            // 删除失败
            this.deleteErrorMsg = res.data.msg;
          }
        });
    },
    // 获取画集列表
    dealAlbumName() {

    }
  },
};
</script>

<style lang="less" scoped>
.upload-cover {
  height: 100%;
  width: 100%;
  background-color: rgba(204, 193, 193, 0.329);
  position: absolute;
  top: 0;
  .upload-box {
    background-color: white;
    width: 500px;
    // 不应该固定死 待删除
    height: 600px;
    border-radius: 25px;
    // 水平垂直居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    .close-btn {
      position: absolute;
      top: 15px;
      right: 10px;
      font-size: 30px;
    }
    .close-btn:hover {
      cursor: pointer;
    }
    .word {
      height: 60px;
      border-bottom: 1px solid rgb(134, 126, 126);
      font-size: 20px;
      // 字体垂直居中
      text-align: center;
      line-height: 60px;
    }
    .content {
      background-color: rgba(140, 145, 140, 0.301);
      // 不应该固定死 待删除
      height: 520px;
      width: 80%;
      // 水平居中
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .add-img {
        background-color: aquamarine;
        overflow: hidden;
        .add-img-el {
          // 每个预览图的大小
          float: left;
          width: 120px;
          height: 120px;
          background-color: salmon;
          margin-left: 10px;
          margin-top: 10px;
          .delete-btn {
            position: absolute;
          }
          .delete-btn:hover {
            cursor: pointer;
          }
        }
        .img-el-container {
          // 制作缩略图
          display: flex;
          // justify-content: space-around;
          .img-el {
            flex: 1 1 auto;
          }
        }
        .add-img-icon {
          text-align: center;
          line-height: 120px;

          .upload-icon {
            font-size: 70px;
          }
          #imgs {
            display: none;
          }
        }
      }
      .add-to-album {
        margin-top: 20px;
        height: 40px;
        background-color: darkcyan;
        position: relative;
        .album-word {
          position: absolute;
          font-size: 17px;
          // 垂直居中
          top: 50%;
          transform: translateY(-50%);
          left: 50px;
        }
        .album-name-container {
          height: 25px;
          width: 200px;
          background-color: white;
          border: 1px solid black;
          border-radius: 25px;
          position: absolute;
          left: 140px;
          // 垂直居中
          top: 50%;
          transform: translateY(-50%);
        }
        .album-down-icon {
          font-size: 20px;
          position: absolute;
          right: 65px;
          // 垂直居中
          top: 50%;
          transform: translateY(-50%);
        }
        .album-list-container {
          width: 180px;
          height: 200px;
          position: absolute;
          background-color: white;
          top:34px;
          // border: 1px solid black;
          border-top: none;
          border-bottom: none;
          left: 150px;
          // 显示滚动条
          overflow-y: scroll;
          // display: flex;
          // flex-direction: column;
          // flex-wrap: nowrap;
          .album-list {
            height: 30px;
            line-height: 30px;
            font-size: 17px;
            padding-left: 4px;
          }
          .album-list:hover {
            background-color: rgba(177, 170, 170, 0.295);
          }
        }
        .album-create-container {
          width: 180px;
          height: 35px;
          position: absolute;
          top:230px;
          left: 150px;
          // border: 1px solid black;
          background-color: #f1f1f1;
          border-top: none;
          .album-create {
            width: 130px;
            height: 25px;
            background-color: white;
            position: absolute;
            top: 5px;
            left: 3px;
          }
          .album-create-btn {
            width: 40px;
            height: 25px;
            background-color: rgb(231, 134, 134);
            text-align: center;
            line-height: 25px;
            position: absolute;
            right: 2px;
            top: 5px;
          }
        }
      }
      .add-desc-container {
        width: 100%;
        height: 200px;
        margin-top: 10px;
        background-color: violet;
        .add-desc {
          
        }
      }
    }
  }
}
</style>
