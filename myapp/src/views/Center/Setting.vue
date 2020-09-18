<template>
    <div>
        <userhead headName='设置'></userhead>
          <div class="list margin-bottom" >
              <span class="shen">账号ID</span>
              <div class="list-div">{{parseInt($store.state.identity.id)}}</div>
          </div>
          <div class="list" @click="handleUpdate">
              <span class="shen">登录密码</span>
              <div class="list-div">修改</div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list margin-bottom" >
              <span class="shen">安全密码</span>
              <div class="list-div">未设置</div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list" >
              <span>软件版本</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list" >
              <span>隐私政策</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list" >
              <span>用户协议</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list margin-bottom" >
              <span>意见反馈</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list margin-bottom" >
              <span>清除缓存</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
          <div class="list" @click="handleDelete">
              <span>注销账号</span>
              <div class="list-div"></div>
              <img class="img4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH180px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC" alt="">
          </div>
        <div class="secede" @click="handleOutlogin">
            <div>
              退出登录
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import userhead from '../../components/UserHead'
import { MessageBox } from 'mint-ui'
export default {
  components: {
    userhead
  },
  methods: {
    handleOutlogin () {
      this.$store.commit('isTabbrshow', true)
      this.$store.commit('isSetting', true)
      axios.get('/api/users/logout').then((res) => {
        console.log(res.data.status)
        if (res.data.status === 0) {
          localStorage.removeItem('username')
          localStorage.removeItem('isAdmin')
          localStorage.removeItem('username')
          localStorage.removeItem('isAdmin')
          localStorage.removeItem('userHead')
          localStorage.removeItem('birthdate')
          localStorage.removeItem('nickname')
          localStorage.removeItem('sex')
          this.$store.commit('getUsername', { })
          this.$router.push('/fitle')
        }
      })
    },
    handleUpdate () {
      this.$router.push('/change')
    },
    handleDelete () {
      MessageBox({
        title: '',
        message: '若你需要注销账号，请联系在线客服或拨打人工客服（13617927204），并自愿放弃你账号内的所有虚拟资产，收到申请后，客服将会在15个工作日内完成注销！',
        confirmButtonText: '朕知道了'
      })
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  },
  beforeDestroy () {
    this.$store.commit('isSetting', true)
    this.$store.commit('isTabbrshow', true)
  }
}
</script>
<style lang="scss" scoped>
.list{
  color: #2c3e50;
  width:100%;
  height:13.333vw;
  background: white;
  padding: 0 4.167vw;
  box-sizing: border-box;
  border-bottom: 0.278vw solid #ededed;
  overflow: hidden;
  position: relative;
    .img4{
    float: right;
    width:1.667vw;
    height: 2.778vw;
    position: relative;
    top:5.833vw;
  }
    span{
    line-height: 13.611vw;
    display: inline-block;
     width:calc(100% - 55.556vw);
     position: relative;
     top:-4.722vw;
  }
  .list-div{
      display: inline-block;
      width:51.111vw;
      margin-right: 2.778vw;
      height: 100%;
      line-height: 13.333vw;
      text-align: right;
  }
  .shen{
    top:0vw;
  }
}
.margin-bottom{
  margin-bottom: 2.778vw;
}
.secede{
  height: 11.111vw;
  width:100%;
  text-align: center;
  background: white;
  color: orangered;
  line-height: 11.111vw;
  position: fixed;;
  bottom: 0;
  left: 0;
  div{
    margin: 0 auto;
  }
}
</style>
