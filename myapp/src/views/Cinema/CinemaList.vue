<template>
  <div>
    <div v-if="isShow" class="cinemalist" :style="myheight">
      <ul>
        <li
          v-for="data in datalist2"
          :key="data.cinemaId"
          class="cinemalist-li"
          v-show="data.districtName === $store.state.filtrate || !$store.state.filtrate"
        >
          <div class="cinemalist-li-1" @click="handleChangPag(data.cinemaId)">
            <span class="cinemalist-li-1-span1">{{data.name}}</span>
            <span class="cinemalist-li-1-span2">{{data.address}}</span>
          </div>
          <div class="cinemalist-li-2" v-if="data.lowPrice">
            <div>
              <span class="cinemalist-li-2-span1">￥{{parseInt(data.lowPrice / 100)}}</span>
              <span
                class="cinemalist-li-2-span2"
                v-if="(data.lowPrice / 10)%10"
              >.{{(data.lowPrice / 10)%10}} 起</span>
              <span class="cinemalist-li-2-span2" v-else>起</span>
            </div>
            <strong>距离未知</strong>
          </div>
          <div v-else class="cinemalist-li-3">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAA1CAMAAAD1YwKXAAABblBMVEX////s7O7NztHFx8r+/v7AwsbHycy+wMS/wcXCxMje3+H5+frt7e/32.4pxT1df39/fV1tnz8/T8/Pz6+vv9/f3j5ObGyMv7+/vO0NPBw8ff4OLLzdDBwsbz9PT6+vro6er39/jY2dz29vf4+Pnx8vPs7e7n6OnGyMzJy87P0dTt7u/l5uji4+Xh4uTGx8vExsrNz9L09fXMztHR0tXHyMzT1NfIys3y8/TX2Nvd3uDCw8f4+fnq6+zu7/Dn6Orl5uf6+/vDxMj9/v77+/zX2Nrn5+ns7O3Iys7m5+nx8fLi4+TDxcj19vbk5efS09bKzM/AwcXv7/DQ0tTp6evb3N7c3d/3+PjZ2tzt7e7Dxcnb3N/U1tjQ0tXFx8vR09by8vPj5OXX2dv4+Pj5+fn19fbU1djY2dvS1NbJys7ExcnMzdH5+vrg4ePw8fLLzND+///7/PzP0NPr7O3a293W19rQ0dTk5ebW2Nr8/f3R09WCbK1KAAACgklEQVRIx52UV1vbQBREx7bks7LBNBeMDab3DoGEhJBACr0kpPfee//3eZCFZZDsfJmn3auR9s7s6Ep+tJV+fbnq5OPTqfEZheHT+qyhgsnDvkDaYJxjsHu6T7DORgHsa5mD7dZ098b1S1MAduYYbfkNENtp9ZU+7AK8yvlpJQPFifSxl/vbgSFfl8s2ZBcDek4YWGjzdjMOvO0KFDeQh4LXzR5k34WYNWDgibscg3ynV29MRGN2LJpo9ApjYDYkqXUKJsrFptSReammcu0FfJSkCZhcdUsNjs9lp8EtPi3CdUmzsF6mGTDNkaSVjDQbMGViAnalPrBdQU0OxFvKp7XEwXGP7gN7TT9hzn2UgnhbJTpxSLnLWbis77DjKgXT4nOkxYCrehN69AMOvDaaq6xrhoQkaRTmNAzbkqQoRKp4EYi69wV7ugiujBgkq3hJiEmSPsOWimBJkmxv4cEC21sUlYULdb7XBlkVoLdOf71Q0Jz3OFzvFfijb9BRx78OONRXuFbnPkYgotZ99nM177fLYP+WpmGlZl4y0O4G9qpq5M8agvOSVqfgXI08D0LWkqT38NoK/T/Sk+BOhZwD46HT6QzEygNgBZa6Q2j9ptKVojASTEsvwKmjXacJO/kSOM8q2w6wHwXQLgMlf6Ed4msnaItFuFU9Ju/Aw+O0riwUqrOrK3i5qeS5HS52B/hkBqoqPWBGT/Z8H5xe3z4DPA7QlpuH4cqAbjBwOtCrzrzP0+cOTFvB5pcqWi7EYagr7M5vgIl4UpcaQ7OhkbKWl94LIcjNw3BaGWBTtdCZh3ujoVIrOA/YELXq8NQD8CBZjyarAHa/6uPmFoP6F9y+q//HXzl1QJFrg6y6AAAAAElFTkSuQmCC" alt="">
            <span>距离未知</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="hint">
      <div class="hint-img">
        <i class="iconfont icon-zhaojihuiyi"></i>
      </div>
      <p class="hint-text-1">没有找到匹配的影院</p>
      <p class="hint-text-2">提示：仅支持搜索“影院”，建议您检查输入的影院名称是否有误？</p>
    </div>
  </div>
</template>
<script>
// import BetterScroll from 'better-scroll'
import { Indicator } from 'mint-ui'
export default {
  props: ['isFiltration', 'handleMytext'],
  data () {
    return {
      datalist1: [],
      datalist2: [],
      myheight: {
        height: '0vw',
        top: ''
      },
      isShow: true
    }
  },
  mounted () {
    this.myheight.height = document.documentElement.clientHeight - 194 + 'px'
    var id = localStorage.getItem('cityId')
    if (this.$store.state.cinemaList.length > 0 && Number(id) === this.$store.state.cinemaList[0].cityId) {
      this.datalist1 = this.$store.state.cinemaList
      this.datalist2 = this.$store.state.cinemaList
      this.axiosDatalist()
    } else {
      this.axiosCinemaList(id)
    }
    // 子父通信
    this.$emit('myhandle', this.axiosDatalist) // 第二个可以用来传参数
  },
  methods: {
    async axiosCinemaList (id) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      const res = await this.$http.get(`/gateway?cityId=${id}&ticketFlag=${this.$store.state.ticketFlag}&k=1`)
      console.log(res)
      this.datalist1 = res.data.data.cinemas
      this.datalist2 = res.data.data.cinemas
      this.$store.commit('cinemaList', this.datalist1)
      this.axiosDatalist()
      Indicator.close()
    },
    handleChangPag (id) {
      var router = this.$route.path // 获取当前页面的路由地址
      this.$router.push({ name: 'an', params: { id: id, router: router } })
    },
    axiosDatalist (mytext) {
      if (this.isFiltration) {
        if (mytext) {
          var newDataList = []
          for (var i = 0; i < this.datalist1.length; i++) {
            if (
              this.datalist1[i].address.search(mytext) > -1 ||
              this.datalist1[i].name.search(mytext) > -1
            ) {
              newDataList.push(this.datalist1[i])
            }
          }
          this.datalist2 = newDataList
          if (this.datalist2.length === 0) {
            this.isShow = false
          } else {
            this.isShow = true
          }
        } else {
          this.datalist2 = []
        }
      }
    }
  },
  watch: {
    handleMytext () {
      var id = localStorage.getItem('cityId')
      this.axiosCinemaList(id)
    }
  }
}
</script>
<style lang="scss" scoped>
.cinemalist {
  position: relative;
  top: 26.111vw;
  ul {
    padding-bottom: 13.889vw;
  }
  .cinemalist-li {
    height: 20.833vw;
    box-sizing: border-box;
    padding: 4.167vw;
    position: relative;
    .cinemalist-li-1 {
      width: calc(100% - 22.222vw);
      padding-right: 4.167vw;
      float: left;
      span {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .cinemalist-li-1-span1 {
        color: #191a1b;
        font-size: 4.167vw;
      }
      .cinemalist-li-1-span2 {
        color: #797d82;
        font-size: 3.333vw;
      }
    }
    .cinemalist-li-2 {
      width: 19.444vw;
      float: right;
      position: absolute;
      right: 2.222vw;
      color: #ff5f16;
      text-align: center;
      .cinemalist-li-2-span1 {
        font-size: 4.167vw;
      }
      .cinemalist-li-2-span2 {
        font-size: 2.778vw;
      }
      strong {
        font-weight: 400;
        display: block;
        margin-top: 1.389vw;
        font-size: 3.056vw;
        color: #797d82;
      }
    }
    .cinemalist-li-3 {
      width: 19.444vw;
      float: right;
      position: absolute;
      right: 2.222vw;
      text-align: center;
      img{
        margin:0 auto;
        width:3.611vw;
        height:4.722vw;
      }
      span{
        font-weight: 400;
        display: block;
        margin-top: 1.389vw;
        font-size: 3.056vw;
      }
    }
  }
}
.hint {
  margin-top: 53.889vw;
  width: 100%;
  text-align: center;
  .hint-img {
    i {
      font-size: 22.222vw;
      opacity: 0.3;
    }
  }
  .hint-text-1 {
    color: #bdc0c5;
    font-size: 3.889vw;
  }
  .hint-text-2 {
    color: #bdc0c5;
    font-size: 3.056vw;
    padding: 0 79.2px;
  }
}
</style>
