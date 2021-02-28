<template>
  <div class="upload-cover" >
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
            <div class="album-list" v-for="(item,index) in albumList" :key="index" @click="dealSelectAlbum(item)">
              {{item.albumName}}
            </div>
          </div>
          <div class="album-create-container" v-if="isShowAlbum">
            <!-- 创建画集 -->
            <input class="album-create" v-model="newAlbumName">
            <div class="album-create-btn" @click="dealCreateAlbum">创建</div>
          </div>
        </div>
        <div class="add-desc-container">
          <textarea name="imgsDesc"  class="add-desc" maxlength="300" placeholder="请输入图片描述" v-model="picsDescription"></textarea>
          <div class="desc-word">还可输入{{picsDescLast}}字</div>
        </div>
        <div class="add-tag-container">
          <input type="text" class="add-tag" placeholder="输入标签" v-model="picTagName" @keyup.enter="dealCreatePicTag">
          <div class="tag-name" v-for="(item,index) in tagForPicList" :key="index">
            {{item.tagName}}
            <div class=" iconfont delete-tag-btn" @click="dealDeletePicTag(item)">&#xe626;</div>
          </div>
        </div>
        <div class="upload-btn-container">
          <div class="upload-btn-word" @click="dealUpload">发布</div>
        </div>
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
      albumId: "",
      albumList: [],
      newAlbumName: "",
      isShowAlbum: false,
      picsDescription: "",
      tagForPicList: [],
      picTagName: ""
    };
  },
  computed : {
    user() {
      return this.$store.state.user
    },
    picsDescLast () {
      return 300-this.picsDescription.length
    }
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
      // 隐藏组件
      this.$emit("isCancel")
      axios.delete("/api/pics/delete/imgs").then((res) => {
        this.imgList = []
        this.isFull = false
        console.log(res)
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
    // 点击获取画集列表，并显示画集列表
    dealAlbumName() {
      if (this.user == undefined) {
        return
      }
      axios.get("/api/album/select/user/"+ this.user.id)
        .then(res => {
          if (res.data.status == 200) {
            console.log(res)
            this.albumList = res.data.data
          }
        })
      this.isShowAlbum = !this.isShowAlbum
    },
    dealCreateAlbum () {
      axios.post("/api/album/add", qs.stringify({
        userId: this.user.id,
        albumName: this.newAlbumName,
        tagIds: null
      })
      ).then(res => {
        if (res.data.status == 200) {
          this.albumList.push(res.data.data)
          this.newAlbumName = ""
        }else {
          console.log(res.data)
        }
      })
    },
    dealSelectAlbum (album) {
      this.albumName = album.albumName
      this.albumId = album.id
    },
    // 按下回车创建图片标签
    dealCreatePicTag() {
      console.log(11)
      if(this.picTagName ==null || /\s/.test(this.picTagName) || this.picTagName.length == 0) {
        console.log(this.picTagName)
        return
      }
      axios.post("/api/tagforpic/add", qs.stringify({
        userId: this.user.id,
        tagName: this.picTagName
      })
      ).then(res => {
        if (res.data.status == 200) {
          this.tagForPicList.push(res.data.data)
          this.picTagName = ""
        }else if (res.data.status == 300) {
          console.log(res)
        }else if (res.data.status == 500) {
          console.log(res)
        }
      })
    },
    // 删除图片标签
    dealDeletePicTag (tag) {
      // 不会删除服务器上的标签
      this.tagForPicList = this.tagForPicList.filter((item)=>{
        return item != tag
      })
    },
    dealUpload () {
      // 发布所有内容
      axios.post("/api/pics/confirm/upload",qs.stringify({
        userId: this.user.id,
        albumId: this.albumId,
        description: this.picsDescription,
        picTags:this.tagForPicList
          
      })
      ).then(res => {
        if (res.data.status == 300) {
          console.log(res);
        }else if(res.data.status == 200){
          // 成功则关闭上传组件
          this.$emit("isCancel")
        }
      })
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
    // height: 600px;
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
      // background-color: rgba(140, 145, 140, 0.301);
      // 不应该固定死 待删除
      // height: 520px;
      width: 80%;
      // 水平居中
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      .add-img {
        // background-color: aquamarine;
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
        // background-color: darkcyan;
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
          line-height: 25px;
          text-align: center;
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
          border: 1px solid #f1f1f1;
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
          .album-create-btn:hover {
            cursor: pointer;
          }
        }
      }
      .add-desc-container {
        width: 100%;
        height: 210px;
        margin-top: 10px;
        // background-color: violet;
        .add-desc {
          width: 100%;
          height: 190px;
          border: 1px solid #f1f1f1;
          resize: none;
          font-size: 18px;
        }
        .desc-word {
          margin-top: 3px;
          padding-left: 3px;
          color: tomato;
        }
      }
      .add-tag-container {
        margin-top: 10px;
        // background-color:wheat;
        overflow: hidden;
        height: 25px;
        .add-tag {
          border-bottom: 1px solid #f1f1f1;
          margin-left: 4px;
          float: left;
          margin-top: 2px;
        }
        .tag-name {
          float: left;
          margin-left: 20px;
          // background-color: aquamarine;
          height: 23px;
          padding: 0 10px;
          text-align: center;
          line-height: 20px;
          position: relative;
          border-radius: 25px;
          margin-top: 2px;
          .delete-tag-btn {
            position: absolute;
            font-size: 5px;
            top: -5px;
            right: -4px;
          }
          .delete-tag-btn:hover {
            cursor: pointer;
          }
        }
      }
      .upload-btn-container {
        // background-color: deepskyblue;
        margin-top: 12px;
        // border-top: 1px solid #f1f1f1;
        padding-top: 10px;
        height: 55px;
        .upload-btn-word {
          width: 130px;
          height: 50px;
          border-radius: 20px;
          // 居中
          margin: auto;
          background-color: salmon;
          text-align: center;
          line-height: 55px;
        }
        .upload-btn-word:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
