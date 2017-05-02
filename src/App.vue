<template lang="pug">
  #app
    v-header
    router-view 
</template>

<script>
import Header from '../src/components/Header.vue'

export default {
  components: {
    'v-header': Header
  }
}
</script>

<style lang="scss">
@import "./main.scss";

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  width:100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
