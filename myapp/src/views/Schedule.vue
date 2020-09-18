<template>
  <div v-if="isShow" class="schedule">
    <div class="top" ref="myheader">
      <div class="left" @click="handleReturn">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
                            ///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <div class="title">
        <span>{{data.cinema.name}}</span>
      </div>
      <div class="right"></div>
    </div>
    <div class="hint">
      <div class="hint-img">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABnlBMVEVHcEznkBzmjxrmjxrmjhrplCrmjxvmjhv/qlXnjx/mjhr////njhrmjhr/qhznjxvmjhrmjxrojh3mjhrmjxr/mTPmkBzmjxrmjhrnjxrnjhrmjhrnkhzmjhr////utGn11Kj22K/88+jmjx3omjPmkiL+/v3+/fz+/Pr88uXvt23mjhv+/v7nlivmkB7rqE7+/PnomTH77tz++/j77dv22LD99u3yx4389OrtsGD11KnxxIf10qX99+7sqVH++vb216/++/b89ez44cL9+PLqokPxwYPtsWLolyztsF/yyJD78ePwv3399/D55MnvuXL77+DomzTzzJjxw4X10aPzyJHrp0366dLxwoT88eTvuHDyxozqoD/xwIH00KHqoUD448fpnTr33br106bsrFf33Lj548jyxYvzzJfsqlTomC7omTDsrVj448brqVDoly3mkSDrqE/sqlPvt27nlCb00KDnkyTsrVn2167669j438D9+PH66tT++/fomjTmkSHpnTnmjxz88+f327jzypXvtmzrpkv89Onus2Xwvnu8Un1FAAAAHXRSTlMAY4Ww+QxJ7AMg0gHV5Al538JP8HIFNZvpq6yaNghS9YQAAAJ6SURBVEjHpZdVe+pAEIYXaaFUkCK1eYG6u3uPu7u7u7vrvz4XlGQDW5rmfFf7ZPI+DLvfzkyUMiicTrbGY6FgMBSLtybTYeVKqURzozjU2JxIbYo1RENiUCjaUBEL++plA9X7KmRcXScVVFe9AVbrl03krzVxVQHZVIGqcq4mIi4UqSnjmsSVmkrIqoi4VMSRbW1AXCug75BftiC/dn6yJVnnGa7bGlhX9JDPGO5cPDJ5Yo8x5Fv3tdGfcwcB2u8ZfVtwfNQQ6vhBQfPGn4wqpVTKcI/uX1nn6DOCoZRSKlH+/NksQO8BABGRrxdzT51vJJRSLWXc8R6AvlNSBM9A717HK81Khe060bnajqV3Q2KBb4CJ145qElZtNrdkY93nB8QGb3QDazt1Mq2S1nrV5qYfiGig9HcDp4c1MKky1trKs31xTJygHAa4rYEZFbfW9muGJzlgR5cdiquYO/DFb+CcHYqpkDtQZoDtmgVU0CV4Ffhmh4KuwYFRGHyigW5TlW3AYy1Vl5sjXcBHfXNcHocsA+P6cWRcgvNAzg61apbrAbLZbDa73FUOfloB7uqWS1vrt5ZVZ5+XgTeB/Q6T29dqwTY51z87wX6An45rZV/kju8a+eGLDo5MAA+dF1kvHXPH8vl8fmoF4P1uGzw6DaxdKCkd5cXq8iQAdzqK4CVg8E9psTKUx1dTABwCekREXgILZeXRWJD/jq7/13ERkbFbS/sMBdnYAn6dLYC7KrQAc9MZugaQG67UdDZocyMzJx9VbnPeG6v3Vu55ePA+rngfkLyPZN6HQO9j538Mut5H68Iw31I6zLe4GOYLGbclM8XPh0yyzZjjP+5qL4a1poxrAAAAAElFTkSuQmCC"
          alt="111"
        />
      </div>
      <div class="hint-text">{{data.noticeMsg}}</div>
    </div>
    <div class="film">
      <div class="film-name">{{data.film.name}}</div>
      <div class="film-des">{{data.showAt | shenpremiere}} {{data.film.language}} {{data.imagery}}</div>
    </div>
    <div class="screen">{{data.hall.name}}</div>
    <svg-list :id="$route.params.id" @myclick='headleClick'/>
    <svg-input v-show="isclick" />
    <div class="btn"  @click="handlePreorder">请先选座</div>
  </div>
</template>
<script>
import moment from 'moment'
import Vue from 'vue'
import SvgList from './Schedule/SvgList'
import SvgInput from './Schedule/SvgInput'
// import { MessageBox } from 'mint-ui'
const weekArr = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
]
// 将毫秒数转化成日期和星期数
Vue.filter('shenpremiere', function (data, format) {
  // data*1000，是因为在后台拿到的时间戳是php的，而js的的是比php的多三位，所以需要*1000
  var date1 = moment(parseInt(data * 1000)).format(format || 'M月D日 HH:mm')
  var date2 = moment(parseInt(data * 1000)).format(format || 'YYYY-MM-DD ')
  var dateObject = new Date(date2) // 转化成一个日期对象
  const getWeek = dateObject.getDay() // getDay() 方法可返回一周（0~6）的某一天的数字,注意： 星期天为 0, 星期一为 1, 以此类推。
  var week = weekArr[getWeek]
  return week + ' ' + date1
})
export default {
  components: {
    SvgList,
    SvgInput
  },
  props: ['id'],
  data () {
    return {
      isShow: false,
      data: {},
      isclick: false
    }
  },
  mounted () {
    this.$store.commit('isTabbrshow', false)
    // MessageBox({
    //   title: '',
    //   message: '根据国家相关要求，为了您和他人的身体健康，请您佩戴好口罩，请勿在影厅内饮食，感谢您的配合。',
    //   confirmButtonText: '我知道了'
    // })
    this.axiossSchedule()
  },
  methods: {
    handleReturn () {
      this.$router.push(`/cinemadetails/${this.data.cinema.cinemaId}`)
    },
    async axiossSchedule () {
      const res = await this.$http.get(
        `/gateway/?scheduleId=${this.$route.params.id}&k=4`
      )
      this.data = res.data.data.schedule
      this.isShow = true
    },
    headleClick (isa) {
      console.log('点击了')
      this.isclick = !this.isclick
      if (isa === 1) {
        this.isclick = true
      }
    },
    handlePreorder () {
      // console.log(1)
      this.$router.push('/preorder')
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>
<style lang="scss" scoped>
.schedule{
  background:#F4F4F4;
}
.top {
  padding: 0 4.167vw;
  width: 100%;
  height: 12.222vw;
  display: flex;
  box-sizing: border-box;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  overflow: hidden;
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
.hint {
  margin-top: 12.222vw;
  width: 100%;
  height: 15.833vw;
  display: flex;
  padding: 2.778vw 4.167vw;
  box-sizing: border-box;
  background: #fbf4d8;
  color: #e68e1a;
  font-size: 3.333vw;
  .hint-img {
    margin: 0.833vw 1.389vw 0 0;
    img {
      width: 3.889vw;
      height: 3.889vw;
    }
  }
}
.film {
  padding: 4.167vw;
  height: 11.944vw;
  background: #fff;
  .film-name {
    line-height: 5.833vw;
    color: #191a1b;
  }
  .film-des {
    font-size: 3.611vw;
    line-height: 5.278vw;
    margin-top: 1.111vw;
    color: #797d82;
  }
}
.screen {
  position: relative;
  z-index: 2;
  height: 5.556vw;
  min-width: 52.778vw;
  font-size: 3.056vw;
  line-height: 5.556vw;
  border-radius: 0.278vw 0.278vw 2.222vw 2.222vw;
  text-align: center;
  color: #fff;
  background-color: #dbdbdb;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 12.5vw;
  width: 100%;
  font-size: 4.167vw;
  line-height: 5.833vw;
  padding: 3.889vw 0;
  text-align: center;
  background-color: #ff5f16;
  box-sizing: border-box;
  color: hsla(0, 0%, 100%, 0.3);
}
</style>
