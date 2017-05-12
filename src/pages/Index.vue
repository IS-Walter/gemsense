<template lang="pug">
  .index_page
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

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixin.scss';
.idea{
  background-color: #f4f8fa;
  padding: 55px 0;
  h1{
    @include index_h1;
  }
  .container{
    margin-top: 40px;
    .row:nth-child(2){
      margin-top: 70px;
    }
  }
  h2{
    font-family: $main_font_Light;
    font-size: 25px;
    letter-spacing: 1.6px;
    margin-bottom: 10px;
  }
}

.development{
  background-color: #fcc;
}
</style>
