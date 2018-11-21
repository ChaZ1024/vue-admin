<template>
<div class="Login" :style="{height:winHeight}">
  <el-row :gutter="0">
    <el-col class="Login-box" :span="6" :offset="9">
      <div class="Login-title">
        后台登录
      </div>
      <el-input placeholder="请输入账号" suffix-icon="el-icon-date" v-model="account">
      </el-input>
      <el-input placeholder="请输入密码" suffix-icon="el-icon-date" v-model="password">
      </el-input>
      <el-input placeholder="验证码" suffix-icon="el-icon-date" v-model="verify" @focus="showVerifyFunc" />
      <el-collapse-transition>
        <div class="verify-image" v-if="showVerify">
          <img src="http://www.peise.net/images/ipeiseapp.png" alt="">
          <el-button>点击刷新</el-button>
        </div>
      </el-collapse-transition>
      <el-row :gutter="20">
        <el-col :span="10" :offset="1">
          <el-button type="primary" @click="doLogin">登录</el-button>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-button>取消</el-button>
          <!-- <el-button>{{$store.state.userInfo.name}}</el-button> -->
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
// import verify from '../components/verify' 8
export default {
  name: 'login',
  data() {
    return {
      account: '',
      password: '',
      verify: '',
      showVerify: false,
      winHeight:0
    }
  },
  methods: {
    showVerifyFunc(e) {
      this.showVerify = true
    },
    doLogin(next) {
      if (this.account == '') {
        this.$message.error('账号不能为空！');
        return false;
      }
      if (this.password == '') {
        this.$message.error('密码不能为空！');
        return false;
      }
      if (this.verify == '') {
        this.$message.error('验证码不能为空！');
        return false;
      }
       sessionStorage.setItem("accessToken", 123123);
       this.$router.push({//你需要接受路由的参数再跳转
                              path: "/index"
                            });
    }
  },
  mounted: function() {
    this.winHeight = document.documentElement.clientHeight+'px'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.Login {
  padding: 0px;
  background:url('../assets/images/loginbg.jpg')  #0d1740;
  background-size: 100% 100%;

}
.login_bg{
  overflow-x: hidden;
    overflow-y: hidden;
}

.Login-box {
  padding: 30px !important;
  background: rgba(255,255,255,0.7);
  margin-top: 15%;

}

.Login-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.el-input {
  margin-bottom: 20px;
}

.el-button {
  width: 100%;
}

.verify-image {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}

.verify-image>img {
  width: 60%;
  height: 40px;
  margin-right: 10px;
}
</style>
