<template>
  <div>
    <div class="top" ref="myheader">
      <div class="left" @click="handleRetru">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
                    ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div class="title">
        <span>{{data.name}}</span>
      </div>
      <div class="right">
        <i class="iconfont icon-fangdajing"></i>
      </div>
    </div>
    <div class="bar">
      <detailsswiper class="actorswiper" perview="3" myclassname="actorswiper">
        <li :style="colin === index ? 'border-bottom: 0.278vw solid orange;' : ''"  class="swiper-slide" v-for="(data,index) in cinemaData.showCinemas" :key="data.showDate" @click="axiosCinemaData(index)">
          <span :style="colin === index ? 'color:orange;border-bottom: 0.278vw solid orange;' : ''" @click="handle(index)">{{data.showDate | shenpremiere1}}</span>
        </li>
      </detailsswiper>
    </div>
     <div class="cinema-list-tag">
            <ul>
          <li>
            <!-- xuanxiang1计算属性 -->
            <span > 全城</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </li>
          <li>
            <span >最近去过</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </li>
        </ul>
        </div>
    <div class="cinemalist">
      <ul>
        <li
          v-for="data in datalist"
          :key="data.cinemaId"
          class="cinemalist-li"
          v-show="data.districtName === $store.state.filtrate || !$store.state.filtrate"
          @click="handleDetails(data.cinemaId)"
        >
          <div class="cinemalist-li-1">
            <span class="cinemalist-li-1-span1">{{data.name}}</span>
            <span class="cinemalist-li-1-span2">{{data.address}}</span>
          </div>
          <div class="cinemalist-li-2">
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
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import detailsswiper from './Detailsswiper'
import moment from 'moment'
// 将毫秒数转化成日期
Vue.filter('shenpremiere1', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date = moment(parseInt(data * 1000)).format(format || 'M月D日')
  return date
})
export default {
  props: ['id', 'router'],
  data () {
    return {
      data: {},
      cinemaData: [],
      datalist: [],
      colin: 0
    }
  },
  components: {
    detailsswiper
  },
  mounted () {
    console.log(this.$route.params.id)
    var cityId = localStorage.getItem('cityId')
    this.axiosFilm()
    this.axiosFilmTime(cityId)
  },
  methods: {
    async axiosCinemaData (index) {
      var cityId = localStorage.getItem('cityId')
      var cinemalist = [] // 存放影院ID
      for (
        var i = 0;
        i < this.cinemaData.showCinemas[index].cinemaList.length;
        i++
      ) {
        cinemalist.push(this.cinemaData.showCinemas[index].cinemaList[i])
      }
      var cinemaIds = ''
      for (var j = 0; j < cinemalist.length; j++) {
        if (j === cinemalist.length - 1) {
          cinemaIds += cinemalist[j]
        } else {
          cinemaIds += cinemalist[j] + ','
        }
      }
      // 获取影院信息
      const res = await this.$http.post('/gateway?k=8', {
        cityId: cityId,
        cinemaIds: cinemaIds
      })
      this.datalist = res.data.data.cinemas
    },
    handle (index) {
      this.colin = index
    },
    handleDetails (id) {
      console.log(id)
      this.$router.push(`/cinemadetails/${id}`)
    },
    handleRetru () {
      console.log(this.$route.params.router)
      this.$router.push(this.$route.params.router)
    },
    // 获取影片信息
    async axiosFilm () {
      const res = await this.$http.get(`/gateway?filmId=${this.$route.params.id}&k=5`)
      this.data = res.data.data.film
    },
    // 获取影片放映时间
    async axiosFilmTime (cityId) {
      const res = await this.$http.get(`/gateway/?filmId=${this.$route.params.id}&cityId=${cityId}&k=7`)
      this.cinemaData = res.data.data
      this.axiosCinemaData(0)
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>
<style lang="scss" scoped>
.top {
  padding: 0 4.167vw;
  width: 100%;
  height: 12.222vw;
  display: flex;
  box-sizing: border-box;
  background: white;
  margin-bottom: 2.778vw;
  position:fixed;
  z-index: 99;
}
.left {
  width: 13.333vw;
  flex: 1;
  img {
    width: 8.333vw;
    height: 8.333vw;
    display: inline-block;
    position: relative;
    top: 1.944vw;
    left: -2.778vw;
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
.bar {
  width: 100%;
  height: 13.611vw;
  position: relative;
  top:12.222vw;
  margin-bottom: 13.611vw;
  .actorswiper {
    width: 100%;
    text-align: center;
    li {
      width: calc(100% / 3);
      height: 13.611vw;
      float: left;
      line-height: 13.611vw;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.cinemalist {
  // height: 125vw;
  // overflow: hidden;
  position: relative;
//   top: 26.111vw;
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
</style>
