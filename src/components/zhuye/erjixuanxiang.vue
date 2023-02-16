<template>
  <div style="background: #fff;">
    <ul class="sticky">
      <li>
        <router-link to="/zhuye/yinglist/zhengzaishangying">正在热映</router-link>
      </li>
      <li>
        <router-link to="/zhuye/yinglist/jijiangsshangying">即将上映</router-link>
      </li>
    </ul>
    <router-view />
  </div>

</template>

<script>
export default {
  data () {
    return {

    };
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style scoped >
ul {
  width: 100%;
  border-bottom: 1px solid #ededed;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  background: #fff;
}
li {
  width: 50%;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 16px;
  color: #191a1b;
}
a {
  width: 100%;
  height: 100%;
  line-height: 100%;
  display: block;
  line-height: 49px;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
.router-link-active {
  color: #ff5f16 !important;
}
</style>
