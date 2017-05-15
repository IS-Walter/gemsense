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
          .col-sm-4.case(v-for="case in caseAry | limitBy 3")
            h2 {{case.title}}
            img.img-responsive(v-bind:src="case.url")
        .row
          .col-sm-4.case(v-for="case in caseAry | limitBy 3 3")
            h2 {{case.title}}
            img.img-responsive(v-bind:src="case.url")
        a.btn_learnMore Learn More

      section.start_today
        h1 OUR PARTNER & CUSTOMER
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint ex dolore dolorum doloremque culpa sed aspernatur obcaecati, neque ipsum amet velit quia expedita ut facilis, reprehenderit quis veritatis autem eligendi delectus necessitatibus quo maxime inventore. Corporis cupiditate officiis id possimus minus, quaerat magni. Eligendi perferendis ipsam aut itaque blanditiis?
        .partner
          img(v-for="url in partnerAry" v-bind:src="url", alt="")
          img(v-for="url in partnerAry" v-bind:src="url", alt="")
</template>

<script>
import Banner from '../pages/Banner.vue'
export default {
  components: {
    'banner': Banner
  },
  data () {
    return {
      testArray: 'hshs',
      caseAry: [
        {
          title: 'Healthcare',
          url: require('../assets/index/case1.jpg')
        },
        {
          title: 'Immersive VR Experie',
          url: require('../assets/index/case2.jpg')
        },
        {
          title: 'Industrial Tracking',
          url: require('../assets/index/case3.jpg')
        },
        {
          title: 'Remote Monitoring',
          url: require('../assets/index/case4.jpg')
        },
        {
          title: 'Smart Office',
          url: require('../assets/index/case5.jpg')
        },
        {
          title: 'Activities Tracking',
          url: require('../assets/index/case6.jpg')
        }
      ],
      partnerAry: [
        require('../assets/index/partner1.png'),
        require('../assets/index/partner2.png'),
        require('../assets/index/partner3.png'),
        require('../assets/index/partner4.png'),
        require('../assets/index/partner5.png')
      ]
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
