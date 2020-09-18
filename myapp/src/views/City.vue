<template>
  <div>
    <transition name="animate">
      <div class="title">
        <div class="return" @click="handlereturn">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
              ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
            alt
          />
        </div>
        <span>当前城市</span>
      </div>
    </transition>
    <div class="return return-hide" @click="handlereturn">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
          ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        alt
      />
    </div>
    <div></div>
    <mt-index-list>
      <div class="hot hot-gps">
        <div style="height:2.778vw;background: #f4f4f4;"></div>
        <div class="hot-tilte">GPS定位你所在城市</div>
        <ul>
          <li @click="handleClick(dingweicity.cityName, dingweicity.cityId)">
            <div>{{dingweicity.cityName}}</div>
          </li>
        </ul>
      </div>
      <div class="hot">
        <div style="height:2.778vw;background: #f4f4f4;"></div>
        <div class="hot-tilte">热门城市</div>
        <ul>
          <li
            v-for="data in hotlist"
            :key="data.cityId"
            v-show="data.isHot === 1"
            @click="handleClick(data.name, data.cityId)"
          >
            <div>{{data.name}}</div>
          </li>
        </ul>
      </div>
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div
          v-for="city in data.list"
          :key="city.name"
          @click="handleClick(city.name, city.cityId)"
        >
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import dingwei from '../dingwei'
export default {
  props: ['router'],
  data () {
    return {
      datalist: [],
      isTitle: false,
      hotlist: [],
      dingweicity: {}
    }
  },
  mounted () {
    this.axiosCityList()
  },
  methods: {
    // 转化数据
    handleChange (data) {
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      var newlist = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = data.filter(
          (item) => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        )
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      return newlist
    },
    handleClick (name, id) {
      // console.log(name, id)
      // 将选择的城市存入localStorage里面，方便在其他组件中使用
      localStorage.setItem('cityName', name)
      localStorage.setItem('cityId', id)
      // 跳转到这个页面的上一个页面中去
      if (this.$route.params.router) {
        this.$router.push(this.$route.params.router)
      } else {
        this.$router.push('/fitle/hotshowing')
      }
    },
    handlereturn () {
      if (this.$route.params.router) {
        this.$router.push(this.$route.params.router)
      } else {
        this.$router.push('/fitle/hotshowing')
      }
    },
    async axiosCityList () {
      const res = await this.$http.get('/gateway?k=6')
      this.hotlist = res.data.data.cities
      this.datalist = this.handleChange(res.data.data.cities)
      // 调用自定义函数，取出当前所在城市的名字和ID
      dingwei.cityDingwei().then((res) => {
        this.dingweicity = res
      })
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  },
  beforeDestroy () {
    this.$store.commit('isTabbrshow', true)
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
.animate-enter-active,
.animate-leave-active {
  transition: 0.5s all;
}

.animate-enter,
.animate-leave-to {
  opacity: 0;
}
.hot {
  overflow: hidden;
  ul {
    width: 100%;
    text-align: center;
    li {
      width: 33%;
      float: left;
      padding-bottom: 5.556vw;
      div {
        margin: 0 2.778vw;
        height: 8.333vw;
        line-height: 8.333vw;
        background-color: #f4f4f4;
        font-size: 3.889vw;
      }
    }
  }
  .hot-tilte {
    height: 8.333vw;
    line-height: 8.333vw;
    padding: 0 2.778vw;
    font-size: 3.611vw;
    margin-bottom: 2.778vw;
  }
}
.hot-gps {
  margin-top: 13.889vw;
}
</style>
