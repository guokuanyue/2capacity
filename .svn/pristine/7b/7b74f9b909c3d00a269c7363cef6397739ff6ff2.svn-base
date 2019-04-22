<!-- 登录页面 -->
<template>
  <div style="overflow: auto;">
    <div class="login-wrap">
      <img src="../../static/images/header/logo_new.png" alt class="login-logo">
      <h2 class="system-title">互联网智能配用电管理系统</h2>
      <p class="system-subTitle">Internet&nbsp;&nbsp;Intelligent&nbsp;&nbsp;P.M.P</p>
      <form class="login-form clear" :model="formData">
        <div class="login-input-div left">
          <label
            style="background:url('./static/images/login/login-user.png') no-repeat 10px 10px;"
          ></label>
          <input
            @keyup.13="handleLogin"
            type="text"
            class="login-input"
            placeholder="用户名"
            v-model="formData.username"
          >
        </div>
        <div class="login-input-div left">
          <label style="background:url('./static/images/login/login-pwd.png') no-repeat 10px 10px;"></label>
          <input
            @keyup.13="handleLogin"
            type="password"
            class="login-input"
            placeholder="密码"
            v-model="formData.password"
          >
        </div>
        <input type="button" @click="handleLogin" value="登 录" class="login-btn">
      </form>
    </div>
    <div id="jq_ez_bg">
      <img
        src="../../static/images/header/login.png"
        border="0"
        style="width: 100%; height: 100%;object-fit:cover;"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      if (this.formData.username !== "admin") {
        this.$alert("请输入正确用户名", "用户名不存在", {
          confirmButtonText: "确定"
        });
        return false;
      } else if (this.formData.password !== "123456") {
        this.$alert("请输入正确密码", "你输入的密码不正确", {
          confirmButtonText: "确定"
        });
        return false;
      } else {
        // sessionStorage.setItem("user", JSON.stringify(this.formData));
        this.$router.push("/home");
      }
    }
  }
};
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font: 14px Helvetica, Arial, sans-serif;
  border: none;
}
#jq_ez_bg {
  visibility: visible;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.login-logo {
  margin: 0 auto;
  width: 115px;
  display: block;
}
.system-title {
  width: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 1px;
}
.system-subTitle {
  width: 100%;
  text-align: center;
  color: #aeb4bd;
  font-weight: bold;
  margin-top: 5px;
  font-size: 17px;
  margin-bottom: 80px;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #25292f inset;
  -webkit-box-background-image: url("../../static/images/login/login-user.png") !important;
  color: #aeb4bd;
  -webkit-text-fill-color: #aeb4bd;
}
.login-form {
  text-align: center;
  float: left;
  position: absolute;
  left: 50%;
  margin-left: -322px;
  width: 640px;
}
.login-btn {
  width: 90px;
  height: 41px;
  line-height: 41px;
  background: #2a84f6;
  color: white;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.login-input-div {
  margin-right: 20px;
  display: inline-block;
  background: #25292f;
  height: 42px;
  width: 250px;
}
.login-input {
  width: 210px;
  height: 42px;
  line-height: 42px;
  border: none;
  outline: none;
  background: #25292f;
  color: #aeb4bd;
  float: left;
}
.login-input-div > label {
  width: 40px;
  height: 42px;
  float: left;
}
.login-wrap {
  width: 100%;
  height: 270px;
  margin: 0 auto;
  margin-top: 13%;
}
</style>
