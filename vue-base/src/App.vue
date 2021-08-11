<template>
  <div class="container h-100" id="app">
    <nav class="navbar navbar-expand fixed-top navbar-light bg-light">
      <a class="navbar-brand" href="/">Watersports Mag</a>
      <div class="navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" exact-active-class="active" class="nav-link" to="/">Home</router-link>
          <router-link tag="li" exact-active-class="active" class="nav-link" to="/article">Article</router-link>
          <router-link tag="li" exact-active-class="active" class="nav-link" to="/about">About</router-link>
        </ul>
      </div>
    </nav>
    <div class="row h-100 justify-content-center align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'app',
}
</script>
<style>
.navbar-nav li:hover,
.navbar-nav li.router-link-active,
.navbar-nav li.router-link-exact-active {
  cursor: pointer;
}
</style>