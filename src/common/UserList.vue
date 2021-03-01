<template>
  <div class="user-list-container">
    <div class="user-info-container">
      <div class="user-avatar-container">
        <div class="user-avatar vertical-middle">
          <img
            class="avatar"
            src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
          />
        </div>
      </div>
      <div class="username-container">username</div>
      <div class="introduce-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
        minus officia quas dolorem sapiente aspernatur, ipsum illo tenetur!
        Voluptate voluptatem harum libero atque omnis necessitatibus cum iste
        animi quam!
      </div>
    </div>
    <!-- 2 -->
    <div class="user-info-container">
      <div class="user-avatar-container">
        <div class="user-avatar vertical-middle">
          <img
            class="avatar"
            src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
          />
        </div>
      </div>
      <div class="username-container">username</div>
      <div class="introduce-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
        minus officia quas dolorem sapiente aspernatur, ipsum illo tenetur!
        Voluptate voluptatem harum libero atque omnis necessitatibus cum iste
        animi quam!
      </div>
    </div>
    <!-- 3 -->
    <div class="user-info-container">
      <div class="user-avatar-container">
        <div class="user-avatar vertical-middle">
          <img
            class="avatar"
            src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
          />
        </div>
      </div>
      <div class="username-container">username</div>
      <div class="introduce-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
        minus officia quas dolorem sapiente aspernatur, ipsum illo tenetur!
        Voluptate voluptatem harum libero atque omnis necessitatibus cum iste
        animi quam!
      </div>
    </div>
    <!-- 4 -->
    <div class="user-info-container">
      <div class="user-avatar-container">
        <div class="user-avatar vertical-middle">
          <img
            class="avatar"
            src="http://qom3or861.hn-bkt.clouddn.com/34e5b74543a9822652d273609d82b9014a90eb0c.jpg"
          />
        </div>
      </div>
      <div class="username-container">username</div>
      <div class="introduce-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque
        minus officia quas dolorem sapiente aspernatur, ipsum illo tenetur!
        Voluptate voluptatem harum libero atque omnis necessitatibus cum iste
        animi quam!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  props: ["userList"],
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
.user-list-container {
  width: 80%;
  // height: 200px;
  // 参考的是#app标签
  position: absolute;
  left: 50%;
  top: 380px;
  transform: translateX(-50%);
  // background-color: tomato;
  display: flex;
  flex-wrap: wrap;
  .user-info-container {
    // background-color: violet;
    border: 1px solid #f1f1f1;
    width: 350px;
    height: 200px;
    position: relative;
    margin-bottom: 10px;
    flex-grow: 1;
    // margin-right:10px;
    // float: left;
    .user-avatar-container {
      height: 200px;
      border-right: 1px solid black;
      position: absolute;
      width:120px; 
      .user-avatar {
        position: absolute;
        left: 20px;
        .avatar {
          border-radius: 50%;
          width: 80px;
          height: 80px;
        }
      }
    }

    .username-container {
      position: absolute;
      top: 40%;
      left: 140px;
      font-size: 18px;
    }
    .introduce-container {
      position: absolute;
      top: 55%;
      left: 140px;
      // height: 50px;
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .user-info-container:hover {
    cursor: pointer;
  }
}
</style>
