<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/home">Go to Home</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
  import Home from './home.vue'
  const Foo = { template: `<div>foo</div>`}
  const Bar = { template: `<div>bar</div>` }
  const routes = [
    { path: '/foo', components: { Foo } },
    { path: '/bar', components: { Bar } },
    { path: '/home', components: { Home } }
  ]
  const router = new VueRouter({
    routes
  })
  const app = new Vue({
    router
  }).$mount('#app')
</script>
<style lang="less" scoped>

</style>
