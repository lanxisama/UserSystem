<template>
  <div id="app">
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">用户管理系统</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link :to="{name:'Customers'}">主页</router-link> </li>
            <li><router-link :to="{name:'About'}">关于</router-link> </li>
          
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
     <!-- <router-link :to="{name:'Customers'}">Customers</router-link> 
    <router-link :to="{name:'About'}">About</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
