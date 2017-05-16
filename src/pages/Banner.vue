<template lang="pug">
.banner
  .background
    .circle_group(
      v-for="c in circlesAry" 
      v-bind:class="{opacity: c.opacity, large: c.size === 'lg', small: c.size === 'sm'}"
      v-bind:style="getPos(c)"
      v-bind:data-index="c._id")
      .top
        - var Cs1 = [1,2,3,4,5,6]
        for c in Cs1
          i(class='circle cir' + c)
      .bottom
        - var Cs2 = [7,8,9,10,11,12]
        for c in Cs2
          i(class='circle cir' + c)
  .circleBox
    .roundBig.round
      img.img-responsive(v-bind:src='roundBig')
    .roundMedium.round
      img.img-responsive(v-bind:src='roundMed')
    .roundSmall.round
      img.img-responsive.chips(v-bind:src='chips')
    .round1.round
      img.img-responsive(v-bind:src='round1')
    .round2.round
      img.img-responsive(v-bind:src='round2')
    .round3.round
      img.img-responsive(v-bind:src='round3')
    .round4.round
      img.img-responsive(v-bind:src='round4')
    .roundB1.round
      img.img-responsive(v-bind:src='roundB1')
    .roundB2.round
      img.img-responsive(v-bind:src='roundB2')
    .roundB3.round
      img.img-responsive(v-bind:src='roundB3')
    .roundB4.round
      img.img-responsive(v-bind:src='roundB4')
  .slogan
    h1 Lead your Businesses
    h1 to the IOT ERA
  .detail
    p Gemsense acts as the back-bone of you Internet of Things project by providing a combination of sensing technologies, rapid developing and business strategy. 
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      testArray: 'hshs',
      chips: require('../assets/banner/chip.svg'),
      roundBig: require('../assets/banner/roundBig.svg'),
      roundMed: require('../assets/banner/roundMed.svg'),
      round1: require('../assets/banner/round-1.svg'),
      round2: require('../assets/banner/round-2.svg'),
      round3: require('../assets/banner/round-3.svg'),
      round4: require('../assets/banner/round-4.svg'),
      roundB1: require('../assets/banner/roundB-1.svg'),
      roundB2: require('../assets/banner/roundB-2.svg'),
      roundB3: require('../assets/banner/roundB-3.svg'),
      roundB4: require('../assets/banner/roundB-4.svg'),
      circlesAry: [
        {
          _id: 1,
          opacity: true,
          size: 'lg',
          posX: 191,
          posY: 86
        },
        {
          _id: 2,
          opacity: true,
          size: 'lg',
          posX: 172,
          posY: 130
        },
        {
          _id: 3,
          opacity: true,
          size: 'lg',
          posX: 272,
          posY: 120
        },
        {
          _id: 4,
          opacity: true,
          size: 'lg',
          posX: 482,
          posY: 125
        },
        {
          _id: 5,
          opacity: false,
          size: 'sm',
          posX: 582,
          posY: 75
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    getPos (c) {
      return {
        left: `${c.posX}px`,
        top: `${c.posY}px`
      }
    }
  }, // close methods
  ready () {
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
@keyframes clockwise{
  0% { transform: rotateZ(0deg);}
  100% { transform: rotateZ(360deg);}
}
@keyframes counterClockwise{
  0% { transform: rotateZ(0deg);}
  100% { transform: rotateZ(-360deg);}
}
.banner{
  height: 690px;
  padding-top: 70px;
  background-image: radial-gradient(circle at 49% 47%, #00345e, #001c2e);
  color: #fff;
  position: relative;
}
.background{
  width: 100%;
  height: 100%;
  outline: 1px solid #f00;
  position: absolute;
  top:0;
  left:0;
}
.slogan{
  width: 770px;
  height: 140px;
  font-size: 60px;
  position: absolute;
  top: 200px;
  left: 0;
  padding-left: 57px;
  h1 {
    text-transform: uppercase;
    text-align: left;
    white-space: nowrap;
  }
}
.detail{
  padding-left: 68px;
  position: absolute;
  top: 340px;
  left: 0;
  width: 669px;
  height: 86px;
  p{
    letter-spacing: 1px; 
    text-align:justify;
  }
}
.circleBox{
  position: relative;
  margin-left: 52%;
  width: 527px;
  height: 527px;
  & .round{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    transform-origin: center;
    img{
      transform-origin: center;
    }
  }
  & .roundBig{
    width: 527px;
    height: 527px;
  }
  & .roundMedium{
    width: 448px;
    height: 448px;
    animation: counterClockwise 30s 0s linear infinite;

  }
  & .roundSmall{
    width: 336px;
    height: 336px;
    animation: clockwise 47s 0s linear infinite;
  }
  .round1 {
    img{
      margin-left: 22px;
      margin-top: 128px;
    }
    animation: clockwise 10s -5.2s linear infinite;
  }
  .round2 {
    img{
      margin-left: 68px;
      margin-top: -10px;
    }
    animation: counterClockwise 17s -2s linear infinite;
  }
  .round3{
    img{
      margin-top: 396px;
      margin-left: 74px;
    }
    animation: counterClockwise 12s -2s linear infinite;
  }
  .round4{
    img{
      margin-left: 416px;
      margin-top: 249px;
    }
    animation: clockwise 10s -5.2s linear infinite;
  }
  .roundB1 {
    img{
      margin-top: 68px;
      margin-left: -74px;
    }
    opacity: .3;
    animation: clockwise 17s -4s linear infinite;
  }
  .roundB2 {
    img{
      margin-top: 522px;
      margin-left: 151px;
    }
    animation: counterClockwise 27s -4.2s linear infinite;
  }
  .roundB3 {
    img{
      margin-left: 296px;
      margin-top: -15px;
    }
    opacity: .55;
    animation: clockwise 21s -10s linear infinite;
  }
  .roundB4 {
    img{
      margin-top: 392px;
      margin-left: 413px;
    }
    animation: counterClockwise 4s -2.2s linear infinite;
  }
}
.circle_group{
  position: absolute;
  width: 102px;
  height: 30px;
  padding: 1px;
  .top, .bottom{
    padding:1px;
  }
  .circle{
    display:inline-block;
    // float: left;
    width: 7px;
    height:7px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 3px;
  }
  .bottom{
    margin-top:-10px;
    margin-left: 24px;
  }
  &.large{
    transform: scale(1.3,1.3);
  }
  &.small{
    transform: scale(0.7, 0.7);
    & .bottom{
      margin-top: -6px;
    }
  }
  &.opacity{
    opacity:.3;
  }
}
</style>
