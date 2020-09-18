<template>
  <div v-if="detailsinto" class="details">
    <!-- details--{{$route.params.id}} -->
    <transition name="animate">
      <div class="title" v-show="isTitle">
        <div class="return" @click="handlereturn">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
            ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
            alt
          />
        </div>
        <span>{{detailsinto.name}}</span>
      </div>
    </transition>
    <div class="return return-hide" @click="handlereturn">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
        ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        alt
      />
    </div>
    <div class="top">
      <img :src="detailsinto.poster" alt />
    </div>
    <div class="center">
      <div class="center_1">
        <span>{{detailsinto.name}}&nbsp;</span>
        <span class="span_2">{{detailsinto.item.name}}</span>
        <div class="center_1-1" v-if="detailsinto.grade">
          <span class="center_1-1-span_1">{{detailsinto.grade}}</span>
          <span class="center_1-1-span_2">分</span>
        </div>
      </div>
      <div class="center_2">{{detailsinto.category}}</div>
      <div class="center_2">{{detailsinto.premiereAt | shenpremiere }} 上映</div>
      <div class="center_2">{{detailsinto.nation}} | {{detailsinto.runtime}}分钟</div>
      <transition name="details">
        <div class="center_3" ref="mytext">{{detailsinto.synopsis}}</div>
      </transition>
      <div class="center_4" @click="handleClick()">
        <img
          ref="myimg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW
                ////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div v-show="isClick"></div>
    </div>
    <div class="bottom-1">
      <div style="height:2.778vw;background:#FAFAFA"></div>
      <div class="bottom_1">
        <span>演职人员</span>
      </div>
      <detailsswiper class="bottom_2 actorswiper" perview="3" myclassname="actorswiper">
        <div class="swiper-slide bottom_2-1" v-for="data in detailsinto.actors" :key="data.name">
          <img :src="data.avatarAddress" alt />
          <p class="bottom_2-1-span1">{{data.name}}</p>
          <p class="bottom_2-1-span2">{{data.role}}</p>
        </div>
      </detailsswiper>
    </div>
    <div class="bottom-1">
      <div style="height:2.778vw;background:#FAFAFA"></div>
      <div class="bottom_1">
        <span>剧照</span>
        <span class="headline" v-if="detailsinto.photos">全部({{detailsinto.photos.length}})></span>
      </div>
      <div class="shen">
        <detailsswiper
          class="bottom_3 photoswiper"
          perview="2"
          myclassname="photoswiper"
          v-if="detailsinto.photos"
        >
          <div
            class="swiper-slide bottom_3-2"
            v-for="(data,index) in detailsinto.photos"
            :key="index"
          >
            <img :src="data" alt />
          </div>
        </detailsswiper>
        <div class="shen-1" v-else>
          <span>暂无电影剧照</span>
        </div>
      </div>
    </div>
    <div style="height:3.889vw;background:#FAFAFA"></div>
    <div style="height:13.889vw"></div>
    <div class="ticket" v-show="detailsinto.isSale" @click="handleCinema">
      <span>选座购票</span>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import moment from 'moment'
import detailsswiper from '../views/Details/Detailsswiper'
import { MessageBox } from 'mint-ui'
Vue.filter('shenpremiere', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date = moment(parseInt(data * 1000)).format(format || 'YYYY-MM-DD ')
  return date
})
export default {
  props: ['id', 'router'],
  components: {
    detailsswiper
  },
  data () {
    return {
      isClick: false,
      detailsinto: null,
      isTitle: false
    }
  },
  methods: {
    handleClick () {
      if (!this.isClick) {
        this.$refs.myimg.style.transform = 'rotate(180deg)'
        this.$refs.mytext.style.height = 'auto'
        this.isClick = !this.isClick
      } else {
        this.$refs.myimg.style.transform = 'rotate(0deg)'
        this.$refs.mytext.style.height = '10.556vw'
        this.isClick = !this.isClick
      }
    },
    handlereturn () {
      if (this.$route.params.router) {
        this.$router.push(this.$route.params.router)
      } else {
        this.$router.push('/fitle/hotshowing')
      }
    },
    handleSrcoll () {
      if (document.documentElement.scrollTop >= 44) {
        this.isTitle = true
      } else {
        this.isTitle = false
      }
    },
    handleCinema () {
      var router = this.$route.path
      var id = this.$route.params.id
      this.$router.push({ name: 'len', params: { id: id, router: router } })
    },
    async axiosDetails () {
      const res = await this.$http.get(`/gateway?filmId=${this.$route.params.id}&k=5`)
      this.detailsinto = res.data.data.film
      if (!this.detailsinto.isSale) {
        MessageBox({
          title: '',
          message: '该影片目前没有排期，到首页看其他电影吧',
          showCancelButton: true,
          confirmButtonText: '同意',
          cancelButtonText: '拒绝'
        }).then((res) => {
          // console.log(res)
          if (res === 'confirm') {
            this.$router.push('/fitle')
          }
        })
      }
      window.onscroll = this.handleSrcoll // 建立监听
    }
  },
  mounted () {
    this.axiosDetails()
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  },
  beforeDestroy () {
    // this.$store.commit('isTabbrshow', true)
    window.onscroll = null // 解除监听
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12.222vw;
  text-align: center;
  line-height: 12.222vw;
  z-index: 999;
  background: white;
}
.return {
  position: absolute;
  z-index: 999;
  width: 8.333vw;
  height: 8.333vw;
  left: 1.389vw;
  top: 1.389vw;
  img {
    width: 8.333vw;
    height: 8.333vw;
  }
}
.return-hide {
  position: fixed;
}
.details {
  height: auto;
}
.top {
  width: 100%;
  height: 54.167vw;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    position: absolute;
    // top: -38.889vw;
  }
}
.center {
  padding: 4.167vw;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  background: white;
}
.center_1 {
  font-size: 5vw;
  height: 6.667vw;
  .span_2 {
    color: #fff;
    background: #d2d6dc;
    font-size: 2.5vw;
    display: inline-block;
    width: 4.722vw;
    height: 3.889vw;
    text-align: center;
    position: relative;
    top: -0.833vw;
  }
  .center_1-1 {
    float: right;
    color: #ffb232;
    .center_1-1-span_1 {
      font-size: 5vw;
      font-style: italic;
    }
    .center_1-1-span_2 {
      font-size: 2.778vw;
    }
  }
}
.center_2 {
  width: 100%;
  height: 5.278vw;
  margin: 1.111vw 0 0 0;
  font-size: 3.611vw;
}
.center_3 {
  height: 10.556vw;
  margin: 3.333vw 0 0 0;
  width: 100%;
  font-size: 3.611vw;
  line-height: 5.278vw;
  overflow: hidden;
  transition: 1.5s all;
}
.center_4 {
  width: 5.556vw;
  height: 1.111vw;
  margin: 0 auto;
  line-height: normal;
  padding-top: 3.333vw;
  img {
    width: 2.222vw;
    height: 1.111vw;
    margin: auto;
  }
}
.bottom-1 {
  .bottom_1 {
    padding: 4.167vw;
  }
  .bottom_2 {
    padding: 0 2.778vw;
    img {
      width: 23.611vw;
      margin: auto;
    }
  }
}
.bottom_2-1 {
  text-align: center;
  cursor: pointer;
  .bottom_2-1-span1 {
    padding-top: 2.778vw;
    font-size: 3.333vw;
    color: #191a1b;
  }
  .bottom_2-1-span2 {
    font-size: 2.778vw;
    color: #797d82;
  }
}
.bottom_3 {
  padding-left: 2.778vw;
}
.bottom_3-2 {
  width: 41.667vw;
  height: 27.778vw;
  img {
    width: 41.667vw;
    height: 27.778vw;
  }
}
.headline {
  float: right;
  margin-right: 1.389vw;
  cursor: pointer;
  font-size: 3.611vw;
}
.shen {
  height: 27.778vw;
  .shen-1 {
    width: 100%;
    text-align: center;
    line-height: 27.778vw;
    font-size: 3.889vw;
    color: #bdc0c5;
  }
}
.ticket {
  height: 13.889vw;
  background: #ff5f16;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  text-align: center;
  line-height: 13.889vw;
  cursor: pointer;
  color: #fff;
  font-size: 4.444vw;
}
.animate-enter-active,
.animate-leave-active {
  transition: 0.5s all;
}

.animate-enter,
.animate-leave-to {
  opacity: 0;
}
</style>
