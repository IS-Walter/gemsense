<template lang="pug">
  .header.container-fluid.no_pad
    ul.col-md-12.menu
      li.col-md-3
        a(v-link="'/'")
          img(v-bind:src="logo")
      li.col-md-offset-1.col-md-1
        a(v-link="'/products'") Products
      li.col-md-1
        a(v-link="'/solutions'") Solutions
      li.col-md-1
        a(v-link="'/about'") About
      li.col-md-1
        a(v-link="'/developer'") Developer
      li.col-md-1.col-md-offset-3.support
        span Support
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      testArray: 'hshs',
      logo: require('../assets/header/logo.png')
    }
  },
  computed: {
    testhahah () {
      return this.testArray + 'after computed'
    }
  },
  methods: {
    alarm () {
      window.alert('hsh')
    }
  }, // close methods
  ready () {
  },
  watch: {
    testArray (newValue, oldValue) {
      console.log(newValue)
      console.log(oldValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.header{
}
.menu{
  padding: 15px 68px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.46);
  background-image: radial-gradient(circle at 49% 47%, #00345e, #001c2e);
  & li{
    color: #fff;
    font-size: 18px;
    line-height: 47px;
    a{
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      line-height: 47px;
      font-family: $main_font;
      & img{
        height: 100%;
        width: auto;
        margin-bottom: -15px;
      }
    }
  }
  .support{
    border-left: 1px solid #fff;
  }
}

</style>
