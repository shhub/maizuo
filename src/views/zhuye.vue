<template>
  <div class="city-weizhi">

    <router-view />
    <xuanxiangka></xuanxiangka>
  </div>
</template>

<script>
import xuanxiangka from '../components/tab/xuanxianka.vue'
export default {

  components: {
    xuanxiangka
  },

}
</script>

<style >
.router-link-active {
  color: #ff5f16 !important;
}
.city-weizhi {
  position: relative;
}
</style>