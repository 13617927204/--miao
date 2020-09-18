<template>
  <div>
    <!-- <div>轮播图</div> -->
    <!-- <swiper ref="myswiper">
            <div class="swiper-slide" v-for="n in 10" :key="n">{{n}} </div>
    </swiper>-->
    <filterheader class="fixed" ref="myheader">
      <div>
        <div class="top" ref="myheader">
          <div class="left">
            <span @click="handleClick()">{{city}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
              alt
            />
          </div>
          <div class="title">
            <span>电影</span>
          </div>
          <div class="right" @click="handleSearch">
            <i class="iconfont icon-fangdajing"></i>
          </div>
        </div>
      </div>
    </filterheader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import swiper from '../views/Fitle/Swiper'
import filterheader from '../components/FilterHeader'
import dingwei from '../dingwei'
// import axios from 'axios'
export default {
  data () {
    return {
      isFixed: false,
      city: '',
      cityName: ''
    }
  },
  components: {
    // swiper,
    filterheader
  },
  mounted () {
    this.city = localStorage.getItem('cityName')
    // window.onscroll = this.handleScroll// 对页面滚动建立一个监听，只要滚动就调用handleScroll函数
    // 调用自定义函数，将城市名和Id存入本地存储中，页面同步定位数据
    dingwei.dingwei()
  },
  beforeDestroy () {
    // beforeDestroy 页面销毁之前执行
    // window.onscroll = null // 解除对页面滚动的监听
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', true)
  },
  methods: {
    // handleScroll () {
    // //   console.log(this.$refs.myswiper.$el.offsetHeight, document.documentElement.scrollHeight)
    //   if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
    //     // console.log(111)
    //     this.isFixed = true
    //   } else {
    //     // console.log(222)
    //     this.isFixed = false
    //   }
    // },
    handleClick () {
      // 将页面路由地址当作参数传入到要跳转的路由，方便之后直接跳转回本页面
      var router = this.$route.path
      // 编程式导航-名字跳转
      this.$router.push({ name: 'city', params: { router: router } })
    },
    handleSearch () {
      this.$router.push('/moviesearch')
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 100%;
  height: 41.667vw;
}
</style>
