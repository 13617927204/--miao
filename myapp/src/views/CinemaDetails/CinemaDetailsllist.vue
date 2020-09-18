<template>
  <div>
    <div style="margin-bottom:61.667vw" v-if="isif">
      <mt-swipe
        @change="handleChange"
        :auto="0"
        :show-indicators="false"
        id="mint-swipe-items-wrap"
      >
        <mt-swipe-item v-for="data in datalist" :key="data.filmId">
          <div class="ccc">
            <div :style="{'background-image' : 'url(' + data.poster + ')'}" class="bbb"></div>
            <img :src="data.poster" alt />
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <div class="shen" @click="handleChangPag(newlist.filmId)">
        <div class="title">
          <span class="title-span1">{{newlist.name}}</span>
          <span class="title-span2">{{newlist.grade}}</span>
          <span class="title-span3">分</span>
        </div>
        <div class="desc">
          <span>{{newlist.category}} | {{newlist.runtime}} 分钟</span>
          <span v-for="name in newlist.actors" :key="name.name">| {{name.name}}</span>
        </div>
        <div class="an">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg=="
            alt
          />
        </div>
      </div>
      <div class="bar">
        <detailsswiper class="actorswiper" perview="3" myclassname="actorswiper">
          <li
            class="swiper-slide"
            v-for="(time, index) in newlist.showDate"
            :key="time"
            @click="handleClick(time, index)"
            :style="colin === index ? 'color:orange' : ''"
          ><span @click="handle">{{time | shenpremiere1}}</span></li>
        </detailsswiper>
        <div class="xian" :style="left"></div>
      </div>
      <div class="list" v-for="list in list" :key="list.scheduleId">
        <div class="left">
          <div class="aaa">{{list.showAt | shenpremiere2}}</div>
          <div>{{list.endAt | shenpremiere2}} 散场</div>
        </div>
        <div class="center">
          <div class="center-1 aaa">{{list.filmLanguage}} {{list.imagery}}</div>
          <div class="center-1">{{list.hallName}}</div>
        </div>
        <div class="right">
          <div class="right-1">
            ￥
            <span>{{(list.salePrice)/100}}</span>
          </div>
          <div class="right-2" @click="handleTicket(list.scheduleId)">购票</div>
        </div>
      </div>
    </div>
    <div class="hint" v-else>
      <p>
        <i class="iconfont icon-luxiangji"></i>
      </p>暂无场次
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import Vue from 'Vue'
import detailsswiper from '../Details/Detailsswiper'
// 将毫秒数转化成日期
Vue.filter('shenpremiere1', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date = moment(parseInt(data * 1000)).format(format || 'M月D日')
  return date
})
// 将毫秒数转化成时分
Vue.filter('shenpremiere2', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date = moment(parseInt(data * 1000)).format(format || 'HH:mm')
  return date
})
export default {
  props: ['id'],
  data () {
    return {
      datalist: [],
      newlist: [],
      list: [],
      millisecond: '',
      isif: true,
      left: {
        left: '0vw'
      },
      colin: 0
    }
  },
  components: {
    detailsswiper
  },
  methods: {
    handle (ev) {
      var width = document.documentElement.clientWidth
      if (ev.pageX > 0 && ev.pageX < width / 3) {
        this.left.left = '0vw'
      } else if (ev.pageX > width / 3 && ev.pageX < (width / 3) * 2) {
        this.left.left = width / 3 + 'px'
      } else {
        this.left.left = (width / 3) * 2 + 'px'
      }
    },
    handleChange (index) {
      this.newlist = this.datalist[index]
      // console.log(this.newlist)
      this.axioslist()
    },
    async handleClick (time, index) {
      this.colin = index
      this.millisecond = time
      const res = await this.$http.get(`/gateway/?filmId=${this.newlist.filmId}&cinemaId=${this.id}&date=${this.millisecond}&k=9`)
      this.list = res.data.data.schedules
    },
    async axioslist () {
      const res = await this.$http.get(`/gateway/?filmId=${this.newlist.filmId}&cinemaId=${this.id}&date=${this.newlist.showDate[0]}&k=9`)
      this.list = res.data.data.schedules
    },
    handleChangPag (id) {
      // 编程式导航-路径跳转
      // this.$router.push(`/details/${id}`) // this.$router是传参数
      // 编程式导航-名字跳转
      // 将页面路由地址当作参数传入到要跳转的路由，方便之后直接跳转回本页面
      var router = this.$route.path // 获取当前页面路由路径
      this.$router.push({ name: 'shen', params: { id: id, router: router } })
    },
    handleTicket (scheduleId) {
      // console.log(scheduleId)
      this.$router.push(`/schedule/${scheduleId}`)
    },
    // 获取影院影片信息
    async axiosFilms () {
      const res = await this.$http.get(`/gateway/?cinemaId=${this.id}&k=0`)
      if (res.data.data.films.length > 0) {
        this.datalist = res.data.data.films
        this.newlist = this.datalist[0]
        this.millisecond = this.newlist.showDate[0]
        this.axioslist()
        this.isif = true
      } else {
        this.isif = false
      }
    }
  },
  mounted () {
    this.axiosFilms()
  }
}
</script>
<style lang="scss" scoped>
#mint-swipe-items-wrap {
  height: 55.556vw;
  background: url();
  img {
    margin: 5.556vw auto;
    width: 27.778vw;
  }
}
.shen {
  padding: 4.167vw 0;
  position: relative;
  .title {
    height: 5.556vw;
    margin-bottom: 2.778vw;
    text-align: center;
    .title-span1 {
      font-size: 4.167vw;
      color: #191a1b;
      padding-right: 1.389vw;
    }
    .title-span2 {
      font-size: 4.444vw;
      font-style: italic;
      color: #ffb232;
    }
    .title-span3 {
      font-size: 2.778vw;
      color: #ffb232;
    }
  }
  .desc {
    padding: 0 10.556vw;
    height: 5vw;
    text-align: center;
    color: #797d82;
    font-size: 3.611vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .an {
    position: absolute;
    right: 4.167vw;
    top: 9.722vw;
    img {
      width: 1.111vw;
      height: 2.222vw;
    }
  }
}
.bar {
  width: 100%;
  height: 13.611vw;
  position: relative;
  .actorswiper {
    width: 100%;
    text-align: center;
    li {
      width: calc(100% / 3);
      height: 13.611vw;
      float: left;
      line-height: 13.611vw;
      span{
        display: inline-block;
        width:100%;
        height: 100%;
      }
    }
  }
  .xian{
    position: absolute;
    top:13.611vw;
    border-bottom: 0.278vw solid orange;
    width:calc(100% / 3);
  }
}
.list {
  height: 20.556vw;
  padding: 4.167vw;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 3.611vw;
  .left {
    float: left;
    width: 27.778vw;
    height: 12.222vw;
  }
  .center {
    float: left;
    width: calc(100% - 27.778vw - 27.778vw - 11.111vw);
    .center-1 {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .right {
    float: right;
    width: 26.944vw;
    position: relative;
    top: 2.5vw;
    div {
      float: left;
    }
    .right-1 {
      width: 12.5vw;
      height: 6.944vw;
      padding-right: 0vw;
      color: #ff5f16;
      font-size: 2.778vw;
      line-height: 6.944vw;
      span {
        font-size: 3.611vw;
      }
    }
    .right-2 {
      width: 13.333vw;
      height: 6.389vw;
      border: 0.278vw solid #ff5f16;
      text-align: center;
      line-height: 6.389vw;
      color: #ff5f16;
      font-size: 3.889vw;
      border-radius: 1.111vw;
    }
  }
  .aaa {
    font-size: 4.167vw;
    color: #191a1b;
  }
}
.ccc {
  width: 100%;
  height: 100%;
  img {
    display: block;
    position: relative;
    top: 2.778vw;
    z-index: 9;
  }
}
.bbb {
  width: 100%;
  height: 100%;
  background: no-repeat;
  background-size: 100% 100%;
  filter: blur(5.556vw);
  position: absolute;
}
.hint {
  text-align: center;
  position: relative;
  top: 55.556vw;
  i {
    font-size: 16.667vw;
  }
}
</style>
