<template>
  <div>
    <van-index-bar
      :index-list='weizhi'
      @select="handleChange"
    >
      <div
        v-for="itme in ciytList"
        :key="itme.type"
      >
        <van-index-anchor :index="itme.type" />
        <van-cell
          :title="lis.name"
          v-for="lis in itme.list"
          :key="lis.cityId"
          @click="xuanzeweizhi(lis)"
        />
      </div>

    </van-index-bar>
  </div>

</template>

<script>
import axios from 'axios'
import { Toast } from 'vant';
export default {
  data () {
    return {
      ciytList: []
    }
  },
  computed: {
    weizhi () {
      return this.ciytList.map(itme => itme.type)
    }
  },
  mounted () {
    axios.get('https://m.maizuo.com/gateway?k=5925414', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1639130276910043440480257","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    })
      .then((response) => {
        // console.log(response.data.data.cities)
        this.rendClty(response.data.data.cities)
      })
  },
  methods: {
    xuanzeweizhi (data) {
      //console.log(data)
      this.$store.commit('xuanzechengshi', data)
      this.$router.go(-1)
    },
    handleChange (data) {
      Toast(data);
    },
    rendClty (list) {
      //console.log(list)
      let letterlist = [];
      let ciytList = [];
      for (let i = 65; i < 91; i++) {
        letterlist.push(String.fromCharCode(i))
      }
      //console.log(letterlist)

      letterlist.forEach(letter => {
        let newList = list.filter(itme => itme.pinyin.substring(0, 1).toUpperCase() == letter)
        //console.log(newList)
        newList.length > 0 && ciytList.push({
          type: letter,
          list: newList
        })
      })
      this.ciytList = ciytList
      //console.log(this.ciytList)
    }
  }
}
</script>

<style>
.van-toast--html,
.van-toast--text {
  min-width: 30px;
}
</style>