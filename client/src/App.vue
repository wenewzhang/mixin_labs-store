<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <RwvHeader /> -->
    <page-header />
    <router-view/>
    <!-- <RwvFooter /> -->
  <footer class="mt-3 text-center">
  <div class="container">
    <span class="text-muted">
      <small>
        <img src="./assets/baseline-info-24px.svg">
        This shop is not real and only for demonstration purposes.
        <a href="https://github.com/wenewzhang/mixin_labs-store">Source code</a>
      </small>
    </span>
  </div>
</footer>
  </div>
</template>

<script>
// import RwvHeader from '@/components/TheHeader'
// import RwvFooter from '@/components/TheFooter'
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
