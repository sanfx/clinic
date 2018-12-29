<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  export default {
    name: 'App',
    components: {
      'Navigation': Navigation
    }
}
</script>

<style>
  body {
    height: 100%;
    min-height: 600px;
  }
  .main {
    padding: 16px;
    margin-top: 30px;
    height: 1500px; /* Used in this example to enable scrolling */
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
