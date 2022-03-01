<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">DashBoard </router-link>
      <router-link to="/table">Table</router-link>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active m-3">
            <router-link lass="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item m-3">
            <router-link to="/dashboard">DashBoard </router-link>
          </li>
          <li class="nav-item m-3">
            <router-link to="/table">Table</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #5bc0de;
    }
  }
}
</style>
