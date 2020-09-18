import Vue from 'vue'
import Vuex from 'vuex'
import { Indicator } from 'mint-ui'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarshow: true,
    hotshowlist: [],
    cominglist: [],
    filtrate: '',
    identity: [],
    isSetting: true,
    isUser: false,
    cinemaList: [],
    ticketFlag: 1
  },
  mutations: { // 唯一修改状态的位置
    isTabbrshow (state, data) {
      state.isTabbarshow = data
    },
    filtrate (state, data) {
      state.filtrate = data
      console.log(state.filtrate)
    },
    getHotshowlist (state, data) {
      state.hotshowlist = data
      Indicator.close()
    },
    getCominglist (state, data) {
      state.cominglist = data
      Indicator.close()
    },
    getUsername (state, data) {
      state.identity = data
    },
    isSetting (state, data) {
      state.isSetting = data
    },
    isUser (state, data) {
      state.isUser = data
    },
    cinemaList (state, data) {
      state.cinemaList = data
    },
    ticketFlag (state, data) {
      state.ticketFlag = data
    }
  },
  actions: {
    async getHotshowlist (store) {
      var arr = []
      var j = 1
      var cityId = localStorage.getItem('cityId')
      for (var i = 1; i < 5; i++) {
        const res = await Vue.prototype.$http.get(`/gateway?cityId=${cityId}&pageNum=${i}&pageSize=10&type=1&k=2`)
        arr.push(...res.data.data.films)
        if (j === 4) {
          store.commit('getHotshowlist', arr)
        } else {
          j++
        }
      }
    },
    async getCominglist (store) {
      const res = await Vue.prototype.$http.get('/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=2')
      store.commit('getCominglist', res.data.data.films)
    }
  },
  modules: {
  }
})
