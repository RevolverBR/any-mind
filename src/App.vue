<template>
  <div class="docker">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  component: {},
  data () {
    return {
      tabs: [
        {
          name: 'Home',
          path: '/home'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.tab {
  justify-content: center;
  align-items: center;
}
</style>
