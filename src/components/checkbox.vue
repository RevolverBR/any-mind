<template>
  <div>
    <div>
      <input
        type="checkbox"
        :checked="dpt.allChecked"
        :v-model="dpt.allChecked"
        @change="handleOutChange($event, dpt.id)"
      />
      部门{{ dpt.id }}
      <span v-show="showAdd" @click="handleShow">+</span>
      <span v-show="!showAdd" @click="handleHide">-</span>
      <div v-show="showdpt">
        <td v-for="(item, index) in dpt.users" :key="index">
          <input
            :style="{ 'margin-left': '20px' }"
            type="checkbox"
            :v-model="item.checked"
            :checked="item.checked"
            @change="handleInnerChange($event, index + 1, dpt.id)"
          />小{{ item.userName }}
        </td>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  data () {
    return {
      showAdd: false,
      showdpt: true
    }
  },
  props: {
    dpt: {
      type: Object
    }
  },
  emits: ['outChange', 'innerChange'],
  methods: {
    handleShow () {
      this.showAdd = false
      this.showdpt = true
    },
    handleHide () {
      this.showAdd = true
      this.showdpt = false
    },
    handleOutChange (e, id) {
      const allChecked = e.target.checked
      this.$emit('outChange', allChecked, id)
    },
    handleInnerChange (e, innerId, outId) {
      const checked = e.target.checked
      this.$emit('innerChange', checked, innerId, outId)
    }
  }
}
</script>
