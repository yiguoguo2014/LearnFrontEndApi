<template>
  <div>
    <button @click="goBcak()">按钮</button>
  </div>
</template>
<script>
  export default {
    computed: {
      userName () {
        return this.$route.params.userName
      }
    },
    methods: {
      goBcak () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>
<style lang="less" scoped>

</style>

