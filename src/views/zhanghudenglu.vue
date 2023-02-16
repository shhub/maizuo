<template>
  <div class="web-login">
    <div class="logo">
      <img
        src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"
        alt=""
      >
    </div>
    <div class="login-form">
      <form action="">
        <div class="form-group">
          <input
            type="tel"
            class="input-control"
            maxlength="13"
            placeholder="手机号"
          >
          <div class="getSmsCode">获取验证码</div>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="input-control"
            placeholder="验证码"
          >
        </div>
        <div class="submit login-btn">
          <span>登录</span>
        </div>
        <div class="cannot-receive-code">
          <span>收不到验证码</span>
        </div>

      </form>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.web-login .logo {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.web-login .logo img {
  height: 60px;
}
.web-login .login-form {
  width: 100%;
  position: relative;
}
.web-login .login-form .form-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}
.web-login .login-form .input-control {
  display: block;
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
  font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.web-login .login-form .getSmsCode {
  position: absolute;
  right: 0px;
  top: 13px;
  font-size: 13px;
  color: #bdc0c5;
  line-height: 30px;
  width: 90px;
  text-align: right;
  float: right;
  border-radius: 3px;
  cursor: pointer;
}
.web-login .login-form .submit {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
}
.web-login .login-form .login-btn {
  margin-top: 70px;
}
.web-login .login-form .submit span {
  opacity: 0.3;
}
.web-login .login-form .cannot-receive-code {
  text-align: right;
  margin: 15px 25px 0;
  color: #797d82;
  font-size: 13px;
}
</style>