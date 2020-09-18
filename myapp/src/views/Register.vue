<template>
  <div>
    <log></log>
    <div class="form">
      <form action>
        <div class="user user-email">
          <input type="email" name="email" placeholder="请输入电子邮件地址" v-model="myemail" />
          <i class="iconfont icon-quxiao2" v-show="myemail" @click="handleCancel1"></i>
          <div v-if="isIf" @click="handleVerify">获取验证码</div>
          <div v-else>{{countDown1}} </div>
        </div>
        <div class="user">
          <input type="text" name="verify" placeholder="请输入验证码" v-model="myverify" />
          <i class="iconfont icon-quxiao2" v-show="myverify" @click="handleCancel2"></i>
        </div>
        <div class="user">
          <input type="text" name="username" id placeholder="请输入用户名" v-model="myuser" />
          <i class="iconfont icon-quxiao2" v-show="myuser" @click="handleCancel3"></i>
        </div>
        <div class="user">
          <input type="password" name="password" placeholder="请输入密码" v-model="mypass" />
          <i class="iconfont icon-quxiao2" v-show="mypass" @click="handleCancel4"></i>
        </div>
        <div class="user">
          <input type="password" name="password1" placeholder="请确认密码" v-model="mypass1" />
          <i class="iconfont icon-quxiao2" v-show="mypass1" @click="handleCancel5"></i>
        </div>

        <div class="tishi">
          <span @click="handleLogin">立即登录</span>
        </div>
        <div @click="handleRegister" class="submit">
          <span>注册</span>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui'
import axios from 'axios'
import log from '../components/Log'
export default {
  data () {
    return {
      myuser: '',
      mypass: '',
      myemail: '',
      myverify: '',
      mypass1: '',
      isIf: true,
      countDown1: ''
    }
  },
  components: {
    log
  },
  methods: {
    handleLogin () {
      this.$router.push('/login')
    },
    handleRegister () {
      axios
        .post('/api/users/register', {
          email: this.myemail,
          username: this.myuser,
          password: this.mypass,
          password1: this.mypass1,
          verify: this.myverify
        })
        .then((res) => {
          console.log(res.data.status)
          if (res.data.status === 0) {
            MessageBox('', '注册成功')
            setTimeout(() => {
              this.$router.push('/login')
            }, 2000)
          } else {
            MessageBox('提示', res.data.msg)
            this.email = ''
            this.myuser = ''
            this.mypass = ''
            this.mypass1 = ''
            this.myverify = ''
          }
        })
    },
    handleCancel1 () {
      this.myemail = ''
    },
    handleCancel2 () {
      this.myverify = ''
    },
    handleCancel3 () {
      this.myuser = ''
    },
    handleCancel4 () {
      this.mypass = ''
    },
    handleCancel5 () {
      this.mypass1 = ''
    },
    handleVerify () {
      axios.get('/api/users/verify?email=' + this.myemail).then((res) => {
        console.log(res.data)
        if (res.data.status === 0) {
          Toast({
            message: '验证码发送成功',
            duration: 1000
          })
          this.isIf = false
          this.countDown()
        } else if (res.data.status === -1) {
          Toast({
            message: res.data.msg,
            duration: 1000
          })
        } else {
          Toast({
            message: '验证码发送失败',
            duration: 1000
          })
        }
      })
    },
    countDown () {
      console.log(11)
      var a = 60
      var timer = null
      this.countDown1 = a + '秒'
      timer = setInterval(() => {
        a--
        this.countDown1 = a + '秒'
        if (a === 0) {
          this.isIf = true
          clearInterval(timer)
        }
      }, 1000)
    }
  },
  created () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>
<style lang="scss" scoped>
.form {
  width: 100%;
  height: 62.222vw;
  padding: 0 6.944vw;
  box-sizing: border-box;
  form {
    input {
      width: calc(100% - 2.778vw);
      padding: 4.167vw 1.389vw;
      height: 4.167vw;
      outline: none;
      border: none;
      border-bottom: 0.278vw solid skyblue;
    }
    .user {
      width: 100%;
      font-size: 3.889vw;
      border-bottom: 0.278vw solid skyblue;
      input {
        width: calc(100% - 11.111vw);
        border: none;
      }
      i {
        position: relative;
        top: 0.556vw;
      }
      div {
        text-align: center;
        float: right;
        width: 19.444vw;
        line-height: 12.5vw;
        height: 12.5vw;
        font-size: 3.333vw;
      }
    }
    .user-email{
        input{
            width: calc(100% - 27.778vw);
        }
    }
    .tishi {
      margin: 2.778vw 0;
      height: 5.556vw;
      width: 100%;
      text-align: right;
      font-size: 2.778vw;
    }
    .submit {
      margin: 11.111vw 0 0 0;
      width: 100%;
      height: 12.222vw;
      background: #ff5f16;
      text-align: center;
      color: white;
      line-height: 12.222vw;
      span {
        opacity: 0.3;
      }
    }
  }
}
</style>
