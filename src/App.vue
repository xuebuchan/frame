<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
      <!--<router-view/>-->
      <keep-alive>      
			    <router-view v-if="$route.meta.keepAlive"/>    
			</keep-alive>    
			<router-view v-if="!$route.meta.keepAlive"/>

    <!--</div>-->
    
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}
html,body{
	margin: auto;
	 position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
}
#nav {
  /*padding: 30px;*/
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
