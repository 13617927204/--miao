<template>
  <div>
    <div>
        <userhead headName="我的资料"></userhead>
        <div>
        <div>
            <div class="list">
            <div class="div1">头像</div>
            <div class="list-input">
                <input type="file" name="file" @change="handleFile" />
            </div>
            <div class="r list-balance">
                <img
                class="img2"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt
                />
                <img class="img3" :src="$store.state.identity.userHead" alt />
            </div>
            </div>
            <div class="list list-1" @click="selectNick">
            <span>昵称</span>
            <div
                class="list-div"
            >{{$store.state.identity.nickname ? $store.state.identity.nickname : '未设置'}}</div>
            <img
                class="img4"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt
            />
            </div>
            <div class="list list-1" @click="selectSex">
            <span>性别</span>
            <div class="list-div">{{$store.state.identity.sex ? $store.state.identity.sex : '未设置'}}</div>
            <img
                class="img4"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt
            />
            </div>
            <div class="list list-1" @click="selectYear">
            <span>出生日期</span>
            <!-- <div class="list-div list-div-1" v-if="isIf">未设置</div> -->
            <div
                class="list-div list-div-1"
            >{{$store.state.identity.birthdate ? $store.state.identity.birthdate : '未设置'}}</div>
            <img
                class="img4"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt
            />
            </div>
        </div>
        <mt-datetime-picker
            v-model="dateValue"
            type="date"
            ref="datePicker"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="new Date('1950-01-01')"
            :endDate="new Date()"
            @confirm="handleConfirm"
        ></mt-datetime-picker>
        <mt-actionsheet :actions="actions" v-model="sexValue" ref="sexPicker"></mt-actionsheet>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { MessageBox, Toast } from 'mint-ui'
import userhead from '../components/UserHead'
export default {
  data () {
    return {
      isIf: true,
      year: '',
      dateValue: '',
      month: '',
      date: '',
      sexValue: '',
      actions: [
        {
          name: '更改性别'
        },
        {
          name: '男',
          method: this.sexNan
        },
        {
          name: '女',
          method: this.sexNv
        }
      ]
    }
  },
  components: {
    userhead
  },
  methods: {
    handleFile (ev) {
      var file = ev.target.files[0]
      var param = new FormData()
      param.append('file', file, file.name)
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post('api/users/uploadUserHead', param, config).then((res) => {
        console.log(res.data.userHead)
        var sex = localStorage.getItem('sex')
        var birthdate = localStorage.getItem('birthdate')
        var nickname = localStorage.getItem('nickname')
        var userHead = res.data.userHead + '?' + Math.random()
        this.storage(userHead, birthdate, nickname, sex, res.data.status)
      })
    },
    selectYear () {
      this.$refs.datePicker.open()
    },
    selectSex () {
      this.$refs.sexPicker.open()
    },
    handleConfirm (value) {
      //   console.log(value)
      this.year = value.getFullYear()
      this.month = value.getMonth() + 1
      this.date = value.getDate()
      this.isIf = false
      var birthdate = this.year + '年' + this.month + '月' + this.date + '日'
      axios
        .post('/api/users/updateBirthdate', {
          username: this.$store.state.identity.username,
          birthdate: birthdate
        })
        .then((res) => {
          // console.log(res)
          var sex = localStorage.getItem('sex')
          var birthdate = res.data.birthdate
          var nickname = localStorage.getItem('nickname')
          var userHead = localStorage.getItem('userHead')
          this.storage(userHead, birthdate, nickname, sex, res.data.status)
        })
    },
    sexNan () {
      //   console.log('男')
      this.updateSex('男')
    },
    sexNv () {
      //   console.log('女')
      this.updateSex('女')
    },
    updateSex (sex1) {
      axios
        .post('/api/users/updateSex', {
          username: this.$store.state.identity.username,
          sex: sex1
        })
        .then((res) => {
          // console.log(res.data)
          // if (res.data.status === 0) {
          var birthdate = localStorage.getItem('birthdate')
          var sex = sex1
          var nickname = localStorage.getItem('nickname')
          var userHead = localStorage.getItem('userHead')
          this.storage(userHead, birthdate, nickname, sex, res.data.status)
          // }
        })
    },
    selectNick () {
      MessageBox.prompt('请输入您想要昵称')
        .then(({ value, action }) => {
          axios
            .post('/api/users/updateNickname', {
              username: this.$store.state.identity.username,
              nickname: value
            })
            .then((res) => {
              //   console.log(res.data)
              // if (res.data.status === 0) {
              var birthdate = localStorage.getItem('birthdate')
              var nickname = value
              var sex = localStorage.getItem('sex')
              var userHead = localStorage.getItem('userHead')
              this.storage(userHead, birthdate, nickname, sex, res.data.status)
              // }
            })
        })
        .catch(() => {
          console.log('取消操作')
        })
    },
    storage (userHead, birthdate, nickname, sex, status) {
      if (status === 0) {
        var username = localStorage.getItem('username')
        var isAdmin = localStorage.getItem('isAdmin')
        var id = localStorage.getItem('id')
        localStorage.setItem('username', username)
        localStorage.setItem('isAdmin', isAdmin)
        localStorage.setItem('userHead', userHead)
        localStorage.setItem('birthdate', birthdate)
        localStorage.setItem('nickname', nickname)
        localStorage.setItem('sex', sex)
        localStorage.setItem('id', id)
        this.$store.commit('getUsername', {
          username,
          isAdmin,
          userHead,
          birthdate,
          nickname,
          sex,
          id
        })
        Toast({
          message: '您的修改已生效',
          duration: 1000
        })
      } else {
        Toast({
          message: '您的修改未成功，请重新修改',
          duration: 1000
        })
      }
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
    // this.$store.commit('isUser', true)
  },
  mounted () {
    var username = localStorage.getItem('username')
    var isAdmin = localStorage.getItem('isAdmin')
    var sex = localStorage.getItem('sex')
    var birthdate = localStorage.getItem('birthdate')
    var nickname = localStorage.getItem('nickname')
    var userHead = localStorage.getItem('userHead')
    this.$store.commit('getUsername', {
      username,
      isAdmin,
      userHead,
      birthdate,
      nickname,
      sex
    })
  }
}
</script>
<style lang="scss" scoped>
.list {
  color: #2c3e50;
  width: 100%;
  height: 16.389vw;
  background: white;
  padding: 0 4.167vw;
  box-sizing: border-box;
  border-bottom: 0.278vw solid #ededed;
  overflow: hidden;
  position: relative;
  .div1 {
    display: inline-block;
    width: 13.889vw;
    line-height: 16.389vw;
  }
  .img1 {
    display: inline-block;
    width: 5.556vw;
    position: relative;
    top: 1.389vw;
  }
  .list-input {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    z-index: 99;
    input {
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
  .img2 {
    float: right;
    width: 1.667vw;
    height: 2.778vw;
    position: relative;
    top: -9.167vw;
  }
  .img3 {
    float: right;
    width: 12.5vw;
    height: 12.5vw;
    position: relative;
    top: -14.444vw;
    right: 4.167vw;
    border-radius: 50%;
  }
  .img4 {
    float: right;
    width: 1.667vw;
    height: 2.778vw;
    position: relative;
    top: 5.833vw;
  }
  span {
    line-height: 13.611vw;
  }
  .list-balance {
    .list-balance-span {
      color: #797d82;
      i {
        font-size: 3.056vw;
        font-style: normal;
      }
      span {
        font-size: 4.167vw;
        margin-left: 0;
        padding-right: 3.889vw;
      }
    }
  }
  .list-div {
    display: inline-block;
    width: calc(100% - 13.333vw);
    margin-right: 2.778vw;
    height: 100%;
    line-height: 13.333vw;
    text-align: right;
  }
  .list-div-1 {
    width: calc(100% - 22.222vw);
  }
}
.list-1 {
  height: 13.333vw;
}
</style>
