<template>
  <div class="list">
    <ul>
      <li v-for="data in list" :key="data.filmId" @click="handleChangPag(data.filmId)">
        <img :src="data.poster" alt />
        <div class="center">
          <div class="center_1">
            <span class="span_1">{{data.name}}&nbsp;</span>
            <span class="span_2">{{data.item.name}}</span>
          </div>
          <div class="center_2" v-if="data.grade">
            <span class="center_2-span_1">观众评分</span>
            <span class="center_2-span_2">&nbsp; {{data.grade}}</span>
          </div>
          <div class="center_2" v-else></div>
          <div class="center_3">
            <span>主演：{{data.actors | actorfilter}}</span>
          </div>
          <div class="center_4">
            <span v-if="isHide">{{data.nation}}&nbsp;|&nbsp;{{data.runtime}}分钟</span>
            <span v-else>上映日期：{{data.premiereAt | shenpremiere}}</span>
          </div>
        </div>
        <div class="right" v-if="isHide">
          <span>购票</span>
        </div>
        <div class="right" v-else v-show="data.isPresale">
          <span>预购</span>
        </div>
      </li>
      <div style="height:6.111vw" v-show="!isHide"></div>
    </ul>
  </div>
</template>
<script>
import Vue from 'Vue'
import moment from 'moment'
import { Indicator } from 'mint-ui'
const weekArr = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]
Vue.filter('actorfilter', function (data) {
  // 调用map的对象是 undefined，初始化第一次渲染的时候异步数据返回之前list是undefined。
  // 解决方法：对list作判断，异步ajax返回数据list取到值后再渲染组件。
  if (!data) {
    return
  } else {
    var newlist = data.map((item) => item.name)
  }
  return newlist.join(' ')
})
// 将毫秒数转化成日期和星期数
Vue.filter('shenpremiere', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date1 = moment(parseInt(data * 1000)).format(format || 'M月D日')
  var date2 = moment(parseInt(data * 1000)).format(format || 'YYYY-MM-DD ')
  var dateObject = new Date(date2) // 转化成一个日期对象
  const getWeek = dateObject.getDay() // getDay() 方法可返回一周（0~6）的某一天的数字,注意： 星期天为 0, 星期一为 1, 以此类推。
  var week = weekArr[getWeek]
  return week + ' ' + date1
})
export default {
  props: ['list'],
  data () {
    return {
      isHide: false,
      loading: false,
      count: 1
    }
  },
  methods: {
    handleChangPag (id) {
      // 编程式导航-路径跳转
      // this.$router.push(`/details/${id}`) // this.$router是传参数
      // 编程式导航-名字跳转
      // 将页面路由地址当作参数传入到要跳转的路由，方便之后直接跳转回本页面
      var router = this.$route.path // 获取当前页面路由路径
      this.$router.push({ name: 'shen', params: { id: id, router: router } })
    }
  },
  mounted () {
    if (this.list === this.$store.state.hotshowlist) {
      this.isHide = true
      if (this.list.length === 0) {
        this.$store.dispatch('getHotshowlist')
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      } else {
        // console.log('使用缓存数据')
      }
    } else {
      this.isHide = false
      if (this.list.length === 0) {
        this.$store.dispatch('getCominglist')
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
      } else {
        // console.log('使用缓存数据')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  margin-top: 26.111vw;
  ul {
    margin-bottom: 13.889vw;
    li {
      width: calc(100% -8.333vw);
      height: 26.111vw;
      padding: 4.167vw;
      overflow: hidden;
      position: relative;
      img {
        width: 18.333vw;
        height: 26.111vw;
        float: left;
        cursor: pointer;
      }
    }
  }
}
.center {
  cursor: pointer;
  width: calc(100% - 37.778vw);
  float: left;
  padding: 1.389vw 2.778vw;
}
.center_1 {
  height: 6.111vw;
  width: 100%;
  .span_1 {
    display: inline-block;
    max-width: calc(100% - 6.944vw);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 1.389vw;
  }
  .span_2 {
    color: #fff;
    background: #d2d6dc;
    font-size: 2.5vw;
    display: inline-block;
    width: 4.722vw;
    height: 3.889vw;
    text-align: center;
    position: relative;
    top: -1.389vw;
  }
}
.center_2 {
  height: 5.833vw;
  .center_2-span_1 {
    font-size: 3.611vw;
  }
  .center_2-span_2 {
    color: #ffb232;
    font-size: 3.889vw;
  }
}
.center_3,
.center_4 {
  span {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 3.611vw;
  }
}
.right {
  width: 13.333vw;
  height: 6.389vw;
  border: 0.278vw solid #ff5f16;
  position: absolute;
  right: 4.167vw;
  top: 13.333vw;
  border-radius: 1.389vw;
  cursor: pointer;
  span {
    position: absolute;
    right: 2.778vw;
    top: 0.278vw;
    font-size: 3.889vw;
    color: #ff5f16;
  }
}
.bottom {
  height: 13.889vw;
}
</style>
