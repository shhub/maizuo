<template>
  <ul>
    <li
      v-for="(time,index) in xuanxianshuju"
      :key="index"
    >
      <router-link :to="time.url">
        <i :class="'iconfont '+ time.class"></i>
        <span>{{time.name}}</span>

      </router-link>
    </li>
  </ul>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  data () {
    return {
      xuanxianshuju: [
        { name: '电影', url: '/zhuye/yinglist', class: 'icon-dianying' },
        { name: '影院', url: '/zhuye/yingyuan', class: 'icon-yingyuan' },
        { name: '我的', url: '/zhuye/wode', class: 'icon-wode' },
      ]
    }
  }
}
</script>

<style scoped >
ul {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
}
li {
  width: 33.3%;
  flex: 1;

  overflow: hidden;
}
li a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router-link-active {
  color: #ff5f16 !important;
}
</style>
