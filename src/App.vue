<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
html{
  height: 100%;
  width: 100%;
}
body{
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: auto
}
ul li{
  list-style: none;
}
.SubLi .el-menu-item-group__title{
  padding: 0;
}
</style>
