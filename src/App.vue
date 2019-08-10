<template>
  <div id="app">
    <app-header></app-header>
    <div id="box">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    'app-header':Header
  }
}
</script>

<style scoped>
#box{
  border:1px dotted black;
  background: #eee;
  position: relative;
  top:55px;
}
</style>
