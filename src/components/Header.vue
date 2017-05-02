<template lang="pug">
  .header
    ul
      li
        a(v-link="'/'") index
      li
        a(v-link="'/products'") Products
      li
        a(v-link="'/solutions'") Solutions
      li
        a(v-link="'/about'") About
      li
        a(v-link="'/developer'") Developer
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


</style>
