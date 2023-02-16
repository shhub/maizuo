<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check="false"
    offset=50
  >
    <van-cell
      v-for="list in films"
      :key="list.filmId"
    >
      <router-link :to="`/xiangqing/${list.filmId}`">
        <div class="list"><img
            :src="list.poster"
            alt=""
          ></div>

        <div class="list">
          <div>
            <span class="yangshi">{{list.name}}</span>
            <span class="erde">{{list.filmType.name}}</span>
          </div>
          <div>观众评分：{{list.grade}}</div>
          <div class="dianyingzhuyan">主演：{{list.actors|daoyan}}</div>
          <div>{{list.nation}} | {{list.runtime}}分钟</div>
        </div>
      </router-link>

    </van-cell>
  </van-list>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      films: [],
      loading: false,
      finished: false,
      conent: 1,
      toutou: 0
    };
  },
  filters: {
    daoyan (vlue) {
      let a = ''
      vlue.forEach(element => {
        //console.log(element.name)
        a += element.name
      });
      return a
    }
  },
  created () {

  },
  mounted () {
    axios.get(`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=227794`, {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1639130276910043440480257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then((response) => {
        //console.log(response.data.data.films)
        this.films = response.data.data.films;
        this.toutou = response.data.data.total
      })
  },
  methods: {
    onLoad () {
      //console.log('加载了')
      this.conent++
      // 异步更新数据
      axios.get(`https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.conent}&pageSize=10&type=1&k=227794`, {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1639130276910043440480257","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
        .then((response) => {
          console.log(response.data.data.films)
          this.films = [...this.films, ...response.data.data.films]
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.films.length >= this.toutou) {
            this.finished = true;
          }
        })


    }
  }

}
</script>

<style  scoped >
.van-list {
  border-bottom: none !important;
  overflow: inherit !important;
  margin-left: 5px;
  padding-bottom: 50px;
}
.van-cell {
  padding: 15px 15px 15px 0;
  overflow: hidden;
  border-bottom: 1px solid #ededed;
}
.list {
  display: inline-block;
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
a {
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
}
a > div {
  float: left;
  padding: 0 10px;
}
.erde {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.yangshi {
  color: #191a1b;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
}
img {
  width: 69px;
  height: 93px;
  vertical-align: middle;
  border-radius: 2px;
}
.dianyingzhuyan {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
