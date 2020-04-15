<template>
    <v-app>
    <div id="app">


      <Core-Appbar></Core-Appbar>
      <Core-Drawer></Core-Drawer>
      <Core-View></Core-View>
      <Core-Footer></Core-Footer>
      </div>
</v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
