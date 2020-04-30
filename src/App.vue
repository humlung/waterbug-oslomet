<template>
  <div id="app">
    <app-header></app-header>
    <app-menu></app-menu>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppMenu from './components/navigation/menu.vue'
  import AppHeader from './components/header.vue'

  export default {
    name: 'App',
    components: {
      AppMenu,
      AppHeader,
    }
  }
</script>

<style>
#app {
  text-align: center;
  background: rgba(32, 206, 154, 0.35);
  height: 100vh;
}
</style>
