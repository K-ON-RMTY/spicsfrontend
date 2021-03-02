<template>
  <!-- 搜索页面 -->
  <div>
    <navigator></navigator>
    <div class="search-container">
      <masonry :col_1="col_1" :col_2="col_2" :col_3="col_3" :col_4="col_4"></masonry>
    </div>
  </div>
</template>

<script>
import Navigator from "../../common/Navgator";
import Masonry from "../../common/Masonry";
export default {
  name: "search",
  data() {
    return {
      itemList: [],
      col_1: [],
      col_2: [],
      col_3: [],
      col_4: [],
    };
  },
  components: {
    Navigator,
    Masonry,
  },
  mounted() {
    // this.$route.params.kw获得关键字得到图片列表
    this.itemList = [
      {
        url: "https://w.wallhaven.cc/full/lm/wallhaven-lm7l3l.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/w8/wallhaven-w8l67x.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/2k/wallhaven-2k15dx.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/47/wallhaven-4739vv.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/4o/wallhaven-4o5765.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/4o/wallhaven-4ozlz7.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
      {
        url: "https://w.wallhaven.cc/full/4d/wallhaven-4dmz8j.jpg",
        text:
          "ing elit. Nihil obcaecati odio, enim voluptatum reiciendis maxime consequuntur, doloremque totam neque, temporibus nulla eaque tempora ipsum. Ea",
      },
    ]
    this.dealColumns()
  },
  methods: {
    dealColumns() {
      // console.log(1)
      let i = 0;
      while (i < this.itemList.length) {
        this.col_1.push(this.itemList[i++])
        if (i < this.itemList.length) {
          this.col_2.push(this.itemList[i++])
        }
        if (i < this.itemList.length) {
          this.col_3.push(this.itemList[i++])
        }
        if (i < this.itemList.length) {
          this.col_4.push(this.itemList[i++])
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .search-container {
    width: 80%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 2px;
  }
</style>
