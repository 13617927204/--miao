<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="left">
          <span @click="handleClick()">{{city}}</span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
            alt
          />
        </div>
        <div class="title">
          <span>影院</span>
        </div>
        <div class="right" @click="handleSearch">
          <i class="iconfont icon-fangdajing"></i>
        </div>
      </div>
      <div class="cinema-list-tag">
        <ul>
          <li>
            <!-- xuanxiang1计算属性 -->
            <span @click="handle1"> {{xuanxiang1}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </li>
          <li>
            <span  @click="handle2">{{mytext1}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </li>
          <li>
            <span @click="handle3">{{mytext2}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </li>
        </ul>
      </div>
    </div>
          <div class="list1" v-show="isa">
          <ul>
              <li v-for="(data, index) in datalist" :key="data" @click="handleFiltrate1(data, index)">
                  <div :class="index=== colin ? ' active cter-border' : ''">
                      {{data}}
                  </div>
              </li>
          </ul>
      </div>
      <div class="list2" v-show="isb">
          <ul>
              <li>
                  <div :class="mytext1 === 'APP订票' ? 'active': '' " @click="handleMytext1">
                      APP订票
                  </div>
              </li>
              <li>
                  <div :class="mytext1 === '前台兑换' ? 'active': '' " @click="handleMytext2">
                      前台兑换
                  </div>
              </li>
          </ul>
      </div>
      <div class="list2" v-show="isc">
          <ul>
              <li>
                  <div :class="mytext2 === '最近去过' ? 'active': '' " @click="handleMytext3">
                      最近去过
                  </div>
              </li>
              <li>
                  <div :class="mytext2 === '离我最近' ? 'active': '' " @click="handleMytext4">
                      离我最近
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      city: '',
      datalist: [],
      isa: false,
      isb: false,
      isc: false,
      xuanxiang: true,
      colin: 0,
      mytext1: 'APP订票',
      mytext2: '最近去过'
    }
  },
  methods: {
    handleClick () {
      // 将页面路由地址当作参数传入到要跳转的路由，方便之后直接跳转回本页面
      var router = this.$route.path
      // 编程式导航-名字跳转
      this.$router.push({ name: 'city', params: { router: router } })
    },
    handleChange (data) {
      var arr = []
      var newarr = ['全城']
      for (var i = 0; i < data.length; i++) {
        arr.push(data[i].districtName)
      }
      for (var j = 0; j < arr.length; j++) {
        if (newarr.indexOf(arr[j]) < 0) {
          newarr.push(arr[j])
        }
      }
      // console.log(newarr)
      return newarr
    },
    handle1 () {
      this.isa = !this.isa
      this.isb = false
      this.isc = false
    },
    handle2 () {
      this.isb = !this.isb
      this.isa = false
      this.isc = false
    },
    handle3 () {
      this.isc = !this.isc
      this.isa = false
      this.isb = false
    },
    handleFiltrate1 (data, index) {
      this.colin = index
      if (index === 0) {
        this.xuanxiang = true
        this.isa = !this.isa
        this.$store.commit('filtrate', '')
      } else {
        this.$store.commit('filtrate', data)
        this.isa = !this.isa
        this.xuanxiang = false
      }
    },
    handleSearch () {
      // 子父通信
      this.$emit('myclick1')// 第二个可以用来传参数
    },
    handleMytext1 () {
      this.mytext1 = 'APP订票'
      this.isb = false
      this.$store.commit('ticketFlag', 1)
      this.$emit('handleMytext')
    },
    handleMytext2 () {
      this.mytext1 = '前台兑换'
      this.isb = false
      this.$store.commit('ticketFlag', 2)
      this.$emit('handleMytext')
    },
    handleMytext3 () {
      this.mytext3 = '最近去过'
      this.isc = false
    },
    handleMytext4 () {
      this.mytext2 = '离我最近'
      this.isc = false
    },
    async axiosDatalist () {
      this.city = localStorage.getItem('cityName')
      const id = localStorage.getItem('cityId')
      const res = await this.$http.get(`/gateway?cityId=${id}&ticketFlag=1&k=1`)
      this.datalist = this.handleChange(res.data.data.cinemas)
    }
  },
  mounted () {
    this.axiosDatalist()
  },
  computed: {
    xuanxiang1 () {
      return this.xuanxiang ? '全城' : this.$store.state.filtrate
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2000;
  background: white;
  border-bottom: 0.278vw solid #ededed;
}
.top {
  padding: 0 4.167vw;
  width: 100%;
  height: 12.222vw;
  display: flex;
  box-sizing: border-box;
}
.left {
  width: 13.333vw;
  flex: 1;
  span {
    display: inline-block;
    font-size: 3.611vw;
    height: 12.222vw;
    line-height: 12.222vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 10.556vw;
  }
  img {
    width: 1.667vw;
    height: 0.833vw;
    display: inline-block;
    position: relative;
    top: -5.556vw;
    left: 1.111vw;
  }
}
.title {
  flex: 4;
  text-align: center;
  span {
    line-height: 12.222vw;
    color: #191a1b;
    font-size: 4.722vw;
  }
}
.right {
  flex: 1;
  text-align: right;
  i {
    line-height: 12.222vw;
    font-size: 5vw;
  }
}
.cinema-list-tag {
  height: 13.889vw;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      height: 13.889vw;
      float: left;
      color: #191a1b;
      span {
        display: inline-block;
        font-size: 3.889vw;
        max-width: 16.111vw;
        height: 12.222vw;
        line-height: 12.222vw;
      }
      img {
        width: 1.667vw;
        height: 0.833vw;
        display: inline-block;
        position: relative;
        top: -0.833vw;
        left: 1.111vw;
      }
    }
  }
}
.list1{
    ul{
        position: fixed;
        top:26.111vw;
        padding: 2.778vw 0 0 2.778vw;
        box-sizing: border-box;
        width:100%;
        font-size: 3.333vw;
        background: white;
        z-index: 999;
        li{
            width:25%;
            float: left;
            height:12.5vw;
            padding: 0 2.778vw 4.167vw 0;
            box-sizing: border-box;
            text-align: center;
            div{
                width:100%;
                height: 100%;
                line-height: 8.333vw;
                border:0.278vw solid rgba(210,214,220,.5);
                border-radius: 1.389vw;
            }
            .cter-border{
                border: 0.278vw solid #ff5f16;;
            }
        }
    }
}
.list2{
    position: fixed;
    top:26.111vw;
    background: white;
    z-index: 999;
    width: 100%;
    font-size: 3.333vw;
    ul{
        width: 100%;
        li{
            height:12.222vw;
            width:100%;
            border-bottom:0.278vw solid rgba(210,214,220,.5);
            padding:0 4.167vw;
            box-sizing: border-box;
            div{
                line-height: 12.222vw;
            }
        }
    }
}
.active{
    color: #ff5f16;
}
</style>
