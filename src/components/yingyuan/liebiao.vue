<template>
  <div>
    <div></div>
    <div>
      <ul class="liebiaoxiangqing">
        <li
          v-for="list in cinemas"
          :key="list.cinemaId"
        >
          <a :href="list.logoUrl">
            <div class="dizhi">
              <b class="flaot-left">{{list.name}}</b>
              <div class="flaot-left">{{list.address}}</div>
            </div>
            <div class="jiage">
              <span>￥{{list.lowPrice/100}}起</span>
              <p>未知距离</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cinemas: null
    }
  },
  mounted () {
    axios.get(`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=6901817`, {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1639130276910043440480257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
      .then((response) => {
        //console.log(response.data.data.cinemas)
        this.cinemas = response.data.data.cinemas
      })
  }
}
</script>

<style>
.flaot-left {
  float: left;
}
.liebiaoxiangqing li {
  position: relative;
  background-color: #fff;
  padding: 15px;
}
.liebiaoxiangqing li a {
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.liebiaoxiangqing li a div {
  display: flex;
  flex-direction: column;
}
.liebiaoxiangqing li a div b {
  display: block;
  font-weight: 500;
  font-size: 15px;
}
.liebiaoxiangqing li a div > div {
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  display: block;
  max-width: 80%;
  overflow: hidden;
}
.liebiaoxiangqing .jiage {
  width: 70px;
  text-align: center;
  float: right;
  margin-right: -5px;
  float: right;
}
.liebiaoxiangqing .dizhi {
  width: calc(100% - 66px);
  text-align: left;
  padding-right: 15px;
  float: left;
}
.liebiaoxiangqing .jiage span {
  font-size: 15px;
  color: #ff5f16;
}
.liebiaoxiangqing .jiage p {
  font-weight: 400;
  margin-top: 5px;
  font-size: 11px;
  color: #797d82;
}
</style>