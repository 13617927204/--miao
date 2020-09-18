<template>
    <div>
        <log></log>
        <div class="form">
          <form action="">
            <div class="user">
              <input type="text" name="username"  placeholder="请输入用户名" v-model="myuser">
              <i class="iconfont icon-quxiao2" v-show="myuser" @click="handleCancel"></i>
            </div>
            <input type="password" name="password" placeholder="请输入密码" v-model="mypass">
            <div class="user1">
              <input type="text" name="username" placeholder="验证码" v-model="myverify" >
              <img @click="handleVerify" src="/api/users/getCaptcha">
            </div>
            <div class="tishi">
              <span class="tishi-span1" @click="handleRegister">立即注册</span>
              <span class="tishi-span2" @click="handleUpdate">修改密码</span>
            </div>
            <div @click="handleLogin" class="submit"><span>登录</span></div>
          </form>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import axios from 'axios'
import log from '../components/Log'
export default {
  data () {
    return {
      myuser: '',
      mypass: '',
      myverify: ''
    }
  },
  components: {
    log
  },
  methods: {
    handleUpdate () {
      this.$router.push('/change')
    },
    handleRegister () {
      this.$router.push('/register')
    },
    handleLogin () {
      axios.post('/api/users/login', {
        username: this.myuser,
        password: this.mypass,
        verify: this.myverify
      }).then((res) => {
        console.log(res.data.status)
        if (res.data.status === 0) {
          MessageBox('', '登录成功')
          this.$router.push('/center')
        } else {
          MessageBox('提示', res.data.msg)
          this.myverify = ''
          if (res.data.status !== -14) {
            this.myuser = ''
            this.mypass = ''
          }
        }
      })
    },
    handleCancel () {
      this.myuser = ''
    },
    handleVerify (ev) {
      // axios.get('/api/users/getCaptcha?' + Math.random())
      ev.target.src = '/api/users/getCaptcha?' + Math.random()
      // console.log(ev.target)
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>
<style lang="scss" scoped>
  .form{
    width:100%;
    height:62.222vw;
    padding:0 6.944vw;
    box-sizing: border-box;
    form{
      input{
        width:100%;
        padding:5.556vw 1.389vw;
        height: 4.167vw;
        outline: none;
        border:none;
      }
    .user{
      font-size: 3.889vw;
        input{
          width:calc(100% - 13.889vw)
        }
        i{
          position: relative;
          top:0.556vw;
        }
      }
      .user1{
        font-size: 3.889vw;
        input{
          width:calc(100% - 33.333vw)
        }
        img{
          width:30.556vw;
          float: right;
        }
      }
      .tishi{
        margin:2.778vw 0;
        height: 5.556vw;
        width:100%;
        text-align: left;
        font-size: 2.778vw;
        .tishi-span1{
          text-align: left;
        }
        .tishi-span2{
          float: right;
        }
      }
      .submit{
        margin:13.889vw 0 0 0;
        width:100%;
        height:12.222vw;
        background:#ff5f16;
        text-align: center;
        color: white;
        line-height: 12.222vw;
        span{
          opacity: .3;
        }
      }
    }
  }
</style>
