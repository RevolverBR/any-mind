import { createStore } from 'vuex'

export default createStore({
  state: {
    dpts: [
      {
        id: 1,
        allChecked: false,
        users: [
          { userId: 1, userName: '一', checked: false },
          { userId: 2, userName: '二', checked: false },
          { userId: 3, userName: '三', checked: false }
        ]
      },
      {
        id: 2,
        allChecked: false,
        users: [
          { userId: 1, userName: '四', checked: false },
          { userId: 2, userName: '五', checked: false },
          { userId: 3, userName: '六', checked: false }
        ]
      },
      {
        id: 3,
        allChecked: false,
        users: [
          { userId: 1, userName: '七', checked: false },
          { userId: 2, userName: '八', checked: false },
          { userId: 3, userName: '九', checked: false }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
