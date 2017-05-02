<template lang="pug">
  .template
    
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
