<template lang="pug">
  .index_page.container-fluid
    h1 haha I am index
    section.banner
    section.product
    section.development
    section.idea
    section.start_today
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

<style>
</style>
