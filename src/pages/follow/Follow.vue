<template>
  <div>
    <navigator></navigator>
    <user-info></user-info>
    <!-- 传递过来的用户id：{{this.$route.params.id}} -->
    <user-list :list="userList">
    </user-list>
  </div>
</template>

<script>
import Navigator from '../../common/Navgator'
import UserInfo from '../../common/UserInfo'
import UserList from '../../common/UserList'
export default{
  name: 'follow',
  components: {
    Navigator,
    UserList,
    UserInfo
  },
  data () {
    return {
      userList: [],
    }
  },
  mounted () {
    // 或去userList
  }
  
}
</script>

<style>

</style>
