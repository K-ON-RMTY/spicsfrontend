<template>
  <div class="upload-cover">
    <div class="upload-box">
      <div class="word">上传图片</div>
      <div class="content">
        <div class="add-img">
          <!-- vue是数据驱动，用循环来动态添加组件 -->
          <div class="add-img-el img-el" v-for="(item, index) in imgList" :key="index">
            <img :src="item" alt="图片" class="img-el">
          </div>
          <div class="add-img-el add-img-icon">
            <label class="iconfont upload-icon" for="imgs">&#xe61f;</label>
            
            <input type="file" name="imgs" id="imgs" @change="dealFileChange" ref="inputer" multiple>
          </div>
        </div>
        <div class="add-to-album">
          <span>选择专辑</span>
          <!-- 下拉框 -->
          <div class="album-name-container"></div>
        </div>
        <div class="add-desc-container"></div>
        <div class="add-kind"></div>
        <div class="upload-btn-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'upload',
  data () {
    return {
      // 存储缩略图片的url
      imgList: []
    }
  },
  methods: {
    // 上传头像时也有用！！写完抽取出来
    dealFileChange (e) {
      let self = this;
      // 获取input元素
      let inputDom = this.$refs.inputer;
      // 读取文件列表
      let files = inputDom.files;
      // MIME类型字符串是否含有image即为图片类型
      // 安全隐患：用户可以更改后缀名绕过检测，暂不处理
      // console.log(files[0].type.indexOf('aa'));
      // 循环遍历files
      for (let file of files) { // for in 和 for of区别
        console.log(file);
        if (/^image/.test(file.type)){
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
    uploadImg (file) {
      let param = new FormData();
      param.append('picFile',file);
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      // 上传图片,需要添加请求头
      axios
        .post(
          "/api/pics/upload/img",
          param,
          config
        ).then(res => {
          console.log(res)
          this.imgList.push(res.data.data);
        }).catch(error =>{
          console.log(error);
        })
    }
  }
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
    .word {
      height: 60px;
      border-bottom: 1px solid rgb(134, 126, 126);
      font-size: 20px;
      // 字体垂直居中
      text-align: center;
      line-height: 60px;
    }
    .content {
      background-color:rgba(140, 145, 140, 0.301);
      // 不应该固定死 待删除
      height: 520px;
      width: 80%;
      // 水平居中
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .add-img {

        background-color:aquamarine;
        position: absolute;
        .add-img-el {
          // 每个预览图的大小
          float: left;
          width: 120px;
          height: 120px;
          background-color: salmon;
          margin-left: 10px;
          margin-top: 10px;
          // 制作缩略图
          // display: flex;
          .img-el {
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
    }
  }
}
</style>
