<template>
  <div>
    <div class="touxiang">
      <img
        src="../assets/download3.png"
        alt=""
      >
      <div>立即登录</div>
    </div>

    <ul class="my-order-tab">
      <li>
        <img
          src="../assets/download.png"
          alt=""
        >
        <div>电影订单</div>
      </li>
      <li>
        <img
          src="../assets/download1.png"
          alt=""
        >
        <div>商品订单</div>
      </li>
    </ul>
    <div class="margin-set ">
      <img
        src="../assets/download4.png"
        alt=""
      >
      <span>卖座券</span>
    </div>
    <div class="margin-set ">
      <img
        src="../assets/download (7).png"
        alt=""
      >
      <span>组合红包</span>
    </div>
    <div class="margin-set ">
      <img
        src="../assets/download (6).png"
        alt=""
      >
      <span>余额</span>
    </div>
    <div class="margin-set ">
      <img
        src="../assets/help.a9203368.png"
        alt=""
      >
      <span>帮助与客服</span>
    </div>
    <div class="margin-set ">
      <img
        src="../assets/download (5).png"
        alt=""
      >
      <span>设置</span>
    </div>
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
.touxiang {
  text-align: center;
  margin-top: -44px;
  height: 200px;
  padding-left: 22px;
  padding-top: 64px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  background: url("../assets/bg.a5bdd690.png");
  background-size: cover;
  box-sizing: border-box;
}
.touxiang img {
  width: 63px;
  height: 63px;
  border-radius: 35px;
  margin-right: 20px;
  border: 2px solid #fff;
}
.touxiang div {
  font-size: 16px;
}
.my-order-tab {
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 0;
  height: 79px;
  background: #fff;
  margin-bottom: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.my-order-tab img {
  width: 26px;
  aspect-ratio: auto 26 / 26;
  height: 26px;
}
.my-order-tab li {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
}
.margin-set {
  background: #fff;
  padding: 0 15px;
  height: 49px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.margin-set img {
  width: 20px;
  aspect-ratio: auto 20 / 20;
  height: 20px;
}
.margin-set span {
  margin-left: 15px;
  color: #191a1b;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
