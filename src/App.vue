<template lang="pug">
  #app
    v-header
    router-view 
</template>

<script>
import Header from 'src/components/Header.vue'

export default {
  components: {
    'v-header': Header
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "~src/main.scss";
@import "~https://use.fontawesome.com/106dbcaac0.css";

html {
  height: 100%;
}
body {
  height: 100%;
  width: 100vw;
}

#app {
  color: #2c3e50;
  text-align: center;
  width:100%;
}
</style>
