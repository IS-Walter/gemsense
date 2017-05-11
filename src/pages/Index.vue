<template lang="pug">
  .index_page.container-fluid
    h1 I am index
    section.banner
    section.product 
    section.development
      h1 CASE STUDIES
    section.idea
      h1 CASE STUDIES
      .container
        .row
          .col-sm-4.case
            h2 Healthcare
            img.img-responsive(src="../assets/index/case1.jpg")
          .col-sm-4.case
            h2 Immersive VR Experie
            img.img-responsive(src="../assets/index/case2.jpg")
          .col-sm-4.case
            h2 Industrial Tracking
            img.img-responsive(src="../assets/index/case3.jpg")
        .row
          .col-sm-4.case
            h2 Remote Monitoring
            img.img-responsive(src="../assets/index/case4.jpg")
          .col-sm-4.case
            h2 Smart Office
            img.img-responsive(src="../assets/index/case5.jpg")
          .col-sm-4.case
            h2 Activities Tracking
            img.img-responsive(src="../assets/index/case6.jpg")
      .btn_learnMore Learn More
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
