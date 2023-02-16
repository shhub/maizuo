<template>
  <div :v-if="lunboimg">
    <router-link
      to="/city"
      class="clty"
    > <span>{{cityname}} <i></i></span></router-link>
    <div class="swiper-container mySwiper">
      <div
        v-if='lunboimg'
        class="swiper-wrapper"
        :key="lunboimg.length"
      >
        <div
          v-for="time in lunboimg"
          :key="time.bannerId"
          class="swiper-slide"
        >
          <img
            :src="time.imgUrl"
            :alt="time.name"
          >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'
export default {
  data () {
    return {
      lunboimg: null
    }
  },
  computed: {
    cityname () {
      return this.$store.state.name

    }
  },
  mounted () {
    axios.get(`https://m.maizuo.com/gateway?type=2&cityId=${this.$store.state.cityId}&k=6303531`, {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1639130276910043440480257","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    })
      .then((response) => {
        //console.log(response.data.data)
        this.lunboimg = response.data.data;
        console.log(response.data.data)
        if (!this.lunboimg == null) {
          this.$nextTick(function () {
            this.swper1()
          })
        }

      })

  },
  methods: {
    swper1 () {
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,//1秒切换一次
        },//等同于以下设置,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      });
      console.log(swiper)
    }
  }
}
</script>
<style  scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}
.clty {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
  z-index: 100;
}
.clty span i {
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
  height: 3px;
  width: 3px;
  transform: translate(2px, -2px) rotate(-45deg);
  -webkit-transform: translate(2px, -2px) rotate(-45deg);
  border-right: 2px solid transparent;
  border-top: 2px solid transparent;
  display: inline-block;
  -moz-transform: translate(2px, -2px) rotate(-45deg);
  -ms-transform: translate(2px, -2px) rotate(-45deg);
  -o-transform: translate(2px, -2px) rotate(-45deg);
}
</style>