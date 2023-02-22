<template>
  <div>
    请选择部门员工
    <check-box :dpt="dpts[0]" @outChange="outChange" @innerChange="innerChange" />
    <check-box :dpt="dpts[1]" @outChange="outChange" @innerChange="innerChange" />
    <check-box :dpt="dpts[2]" @outChange="outChange" @innerChange="innerChange" />
    <div>____________________________________</div>
    <div>选中结果{{ dptsJson }}</div>
  </div>
</template>

<script>
import CheckBox from '../components/checkbox.vue'

export default {
  name: 'Home',
  components: {
    CheckBox
  },
  data () {
    return {
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
            { userId: 4, userName: '四', checked: false },
            { userId: 5, userName: '五', checked: false },
            { userId: 6, userName: '六', checked: false }
          ]
        },
        {
          id: 3,
          allChecked: false,
          users: [
            { userId: 7, userName: '七', checked: false },
            { userId: 8, userName: '八', checked: false },
            { userId: 9, userName: '九', checked: false }
          ]
        }
      ],
      arrDpts: [],
      arrUsers: [],
      dptsJson: []
    }
  },
  methods: {
    outChange (val, outId) {
      const dpt = this.dpts[outId - 1]
      if (val === true) {
        dpt.allChecked = true
        dpt.users.forEach(item => {
          item.checked = true
        })
      } else {
        dpt.allChecked = false
        dpt.users.forEach(item => {
          item.checked = false
        })
      }

      // this.getdpt(outId)
      // this.getDptByAllChecked(val, outId)
      this.dataToJson()
    },
    innerChange (val, innerId, outId) {
      const dpt = this.dpts[outId - 1]
      if (val === true) {
        dpt.users[innerId - 1].checked = true
      } else {
        dpt.users[innerId - 1].checked = false
      }

      if (dpt.users.every(item => item.checked === true)) {
        dpt.allChecked = true
      } else {
        dpt.allChecked = false
      }

      // this.getUser(val, innerId, outId)
      this.dataToJson()
    },
    // getdpt (outId) {
    //   const arrDpts = this.arrDpts
    //   const dpt = this.dpts[outId - 1]
    //   if (arrDpts.indexOf(outId) === -1) {
    //     if (!dpt.users.every(item => item.checked === false)) {
    //       arrDpts.push(outId)
    //     }
    //   } else {
    //     if (dpt.users.every(item => item.checked === false)) {
    //       arrDpts.splice(arrDpts.indexOf(outId), 1)
    //     }
    //   }
    //   arrDpts.sort()
    // },
    // getUser (val, innerId, outId) {
    //   // if (!this.dpts[outId - 1].users.every(item => item.checked === true)) {
    //   //   if (val === true) {
    //   //     this.arrUsers.push(this.dpts[outId - 1].users[innerId - 1].userId)
    //   //     console.log(1)
    //   //   } else {
    //   //     const index = this.arrUsers.indexOf(this.dpts[outId - 1].users[innerId - 1].userId)
    //   //     this.arrUsers.splice(index, 1)
    //   //     console.log(2)
    //   //   }
    //   // } else {
    //   //   this.arrDpts.push(outId)
    //   //   this.arrUsers.splice(this.arrUsers.indexOf(this.dpts[outId - 1].users[0].userId), 2)

    //   //   console.log(3)
    //   // }

    //   this.arrUsers.sort()
    // },
    // getDptByAllChecked (val, outId) {
    //   if (val === true) {
    //     this.arrDpts.push(outId)
    //   } else {
    //     this.arrDpts.splice(this.arrUsers.indexOf(outId), 1)
    //   }
    //   this.arrUsers.sort()
    // },
    dataToJson () {
      this.dptsJson = { department: this.arrDpts, user: this.arrUsers }
    }
  },
  watch: {
    dpts: {
      handler (newVal, oldVal) {
        console.log(this.arrDpts)
        // dpt
        this.dpts.forEach(item => {
          if (item.allChecked === true) {
            if (this.arrDpts.indexOf(item.id) === -1) {
              this.arrDpts.push(item.id)
              this.arrDpts.sort()
            }
          } else {
            if (this.arrDpts.indexOf(item.id) !== -1) {
              this.arrDpts.splice(this.arrDpts.indexOf(item.id), 1)
              this.arrDpts.sort()
            }
          }
        })

        // user
        this.dpts.forEach(item => {
          // 将checked的user推入数组
          item.users.forEach(innerItem => {
            if (innerItem.checked === true) {
              if (this.arrUsers.indexOf(innerItem.userId) === -1) {
                this.arrUsers.push(innerItem.userId)
                this.arrUsers.sort()
              }
            } else {
              if (this.arrUsers.indexOf(innerItem.userId) !== -1) {
                this.arrUsers.splice(this.arrUsers.indexOf(innerItem.userId), 1)
              }
            }
          })

          // 对user做处理
          if (item.users.every(item => {
            return item.checked === true
          })) {
            this.arrUsers.splice(this.arrUsers.indexOf(item.users[0].userId), 3)
          }
        })
      },
      deep: true
    }
  }
}
</script>
