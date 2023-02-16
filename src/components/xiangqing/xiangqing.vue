<template>
  <div
    class="xiangqing"
    v-if="data"
  >
    <i @click="fanhui">返回</i>
    <div class="daohang"><span>{{data.name}}</span></div>
    <div
      class="tupian"
      :style="`background-image:url('${data.poster}')`"
    >

    </div>
    <div class="jianjie">
      <h4>{{data.name}}</h4>
      <span>{{data.category}}</span>
      <span>{{data.premiereAt | formatDate}} 上映</span>
      <span>美国 | {{data.runtime}}分钟</span>
      <span>
        <p :class="{xianshiquanbu:xianshiquanbu}">{{data.synopsis}}</p>
        <div @click="zhaoshiquanbu">⬇</div>
      </span>

    </div>
    <div class="yanyuanlist">
      <h4>演员人员</h4>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide yanyuan"
            v-for="(tim,index) in data.actors"
            :key="index"
          >
            <img
              :src="tim.avatarAddress"
              alt=""
            >
            <b>{{tim.name}} </b>
            <span style="text-align: center;">{{tim.role}}</span>
          </div>
        </div>
      </div>
    </div>
    <a
      href=""
      class="xuanzuogoupiao"
    >
      <div> 选座购票 </div>
    </a>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import axios from 'axios'
import { formatDate } from '../../assets/shijian.js' // 在组件中引用date.js
export default {
  data () {
    return {
      data: null,
      xianshiquanbu: true
    };
  },
  created () {

  },
  mounted () {

    axios.get('https://m.maizuo.com/gateway?filmId=' + this.$route.params.filmId + '&k=1623199', {
      headers: {
        'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.2.0","e":"1639130276910043440480257"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
      .then((response) => {
        //console.log(response.data.data.film)
        this.data = response.data.data.film;
        this.$nextTick(function () {
          this.swper1()
        })
      })

  },
  methods: {
    zhaoshiquanbu () {
      this.xianshiquanbu = false;
      console.log('111111');
    },
    fanhui () {
      this.$router.go(-1)
    },
    swper1 () {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      });
    }
  },
  filters: {
    /*
     时间格式自定义 只需把字符串里面的改成自己所需的格式
    */
    formatDate (time) {
      var date = new Date(time * 1000);
      return formatDate(date, 'yyyy.MM.dd');
    },
  }
};
</script>

<style scoped >
.xiangqing {
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  position: relative;
}
.xiangqing .daohang {
  text-align: center;
  padding: 10px 0;
  width: 100%;
  font-size: 17px;
  color: #191a1b;
  position: relative;
  background-color: #fff;
}
.xiangqing .daohang span {
  display: block;
  width: 100%;
}
.xiangqing i {
  position: absolute;
  left: 20px;
  top: 10px;
  z-index: 1;
}
.xiangqing .tupian {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
.xiangqing .jianjie {
  padding: 15px;
  padding-top: 12px;
}
.xiangqing .jianjie > h4 {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
  font-weight: 400;
}
.xiangqing .jianjie span {
  font-size: 13px;
  display: block;
  color: #797d82;
  margin-top: 4px;
}
.xianshiquanbu {
  height: 38px;
  overflow: hidden;
}
.xiangqing .jianjie span div {
  text-align: center;
}
.xiangqing .yanyuan {
  width: 20% !important;
  margin-right: 10px !important;
}
.xiangqing .yanyuanlist b {
  font-weight: 100;
  color: #191a1b;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  display: block;
}
.xiangqing .yanyuanlist span {
  font-size: 10px;
  color: #797d82;
}
.yanyuan img {
  width: 100%;
  height: 85px;
}
.yanyuanlist {
  text-align: center;
}
.yanyuanlist > h4 {
  font-weight: 400;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.yanyuanlist .swiper {
  padding: 0 10px;
}
.xuanzuogoupiao {
  font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.xuanzuogoupiao div {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 100;
}
</style>
