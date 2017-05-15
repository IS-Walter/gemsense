<template lang="pug">
.container-fluid
  .row
    .index_page
      section.banner.col-md-12
        .row
          Banner
      section.product 
      section.development
      
      section.idea.col-md-12
        h1 CASE STUDIES
        //- br
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
        a.btn_learnMore Learn More
          
          

      section.start_today
        h1 OUR PARTNER & CUSTOMER
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint ex dolore dolorum doloremque culpa sed aspernatur obcaecati, neque ipsum amet velit quia expedita ut facilis, reprehenderit quis veritatis autem eligendi delectus necessitatibus quo maxime inventore. Corporis cupiditate officiis id possimus minus, quaerat magni. Eligendi perferendis ipsam aut itaque blanditiis?
        .partner
          img(src="../assets/index/partner1.png", alt="")
          img(src="../assets/index/partner2.png", alt="")
          img(src="../assets/index/partner3.png", alt="")
          img(src="../assets/index/partner4.png", alt="")
          img(src="../assets/index/partner5.png", alt="")
          img(src="../assets/index/partner1.png", alt="")
          img(src="../assets/index/partner2.png", alt="")
          img(src="../assets/index/partner3.png", alt="")
          img(src="../assets/index/partner4.png", alt="")
          img(src="../assets/index/partner5.png", alt="")            
</template>

<script>
import Banner from '../pages/Banner.vue'
export default {
  components: {
    'banner': Banner
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
    margin-bottom: 55px;
  }
  .row{padding: 0 6%;
    &:nth-child(3){
      margin-top: 70px;
    }
  }
  
  .case{
    h2{
      font-family: $main_font_Light;
      font-size: 25px;
      letter-spacing: 1.6px;
      margin-bottom: 10px;
    }
  }

  .btn_learnMore{
    margin-top: 50px;
  }
}

.start_today{
   h1{
    @include index_h1;
    margin-bottom: 20px;
  }
  p{
    @include center;
    width: percentage(1180px/$wrap_w);
    font-family: $main_font_Light;
    font-size: 22px;
    line-height: 30px;
  } 
}


.btn_learnMore{
  @include center;
  width: percentage(570px/$wrap_w);
  padding: 25px 0;
  font-size: 30px;
  font-family: $main_font_Semibold;
  letter-spacing: 1.9px;
  background-color: #4c93fd;
  border-radius: 40px;
  color: #fff;
  box-shadow: 1px 5px 15px 0 rgba(0, 0, 0, 0.25);
}


</style>
