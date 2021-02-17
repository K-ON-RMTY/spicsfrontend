// 调用mutation方法操作state中的数据
export default {
  handleUserInfo ({commit}, user) {
    commit('handleUserInfo', user)
  }
}