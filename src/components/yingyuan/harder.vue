<template>
  <van-nav-bar
    title="影院"
    left-arrow
    @click-left="city"
    @click-right="search"
  >
    <template #left>
      <div class="clty"> <span>{{cityname}} <i></i></span></div>
    </template>
    <template #right>
      <van-icon
        name="search"
        size="18"
      />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  computed: {
    cityname () {
      return this.$store.state.name

    }
  },
  methods: {
    city () {
      this.$router.push('/city')
    },
    search(){
      this.$router.push('/search')
    }
  }
}
</script>

<style>
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
