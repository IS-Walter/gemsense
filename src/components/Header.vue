<template lang="pug">
  .header.container-fluid
    ul.col-md-12
      li.col-md-3
        a(v-link="'/'") index
      li.col-md-offset-1.col-md-1
        a(v-link="'/products'") Products
      li.col-md-1
        a(v-link="'/solutions'") Solutions
      li.col-md-1
        a(v-link="'/about'") About
      li.col-md-1
        a(v-link="'/developer'") Developer
      li.col-md-1.col-md-offset-2
        span hahah
      li.col-md-1
        span hahah
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      testArray: 'hshs'
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
.header li {
  float: left;
}
</style>
