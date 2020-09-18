<template>
  <div>
    <div class="tab">
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="请输入查询的电影名" v-model="mytext" @input="func(mytext)" />
        <span v-show="mytext ? true : false" @click="handleClick">x</span>
      </div>
      <div class="return" @click="handleReturn">取消</div>
    </div>
    <cinemalist v-show="mytext? true : false" class="list" isFiltration="ture" @myhandle="receive" />
    <div v-show="mytext? false : true" class="history">
      <p>离你最近</p>
      <div>
        <ul>
          <li
            v-for="data in historyList"
            :key="data.cinemaId"
            @click="handleCinemaDetails(data.cinemaId)"
          >
            <div>{{data.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import cinemalist from './CinemaList'
export default {
  data () {
    return {
      mytext: '',
      func: null,
      historyList: []
    }
  },
  components: {
    cinemalist
  },
  methods: {
    handleReturn () {
      this.$emit('myclick2')
    },
    handleClick () {
      this.mytext = ''
      this.func(this.mytext)
    },
    receive (ev) {
      this.func = ev
    },
    handleCinemaDetails (id) {
      var router = this.$route.path
      this.$router.push({ name: 'an', params: { id: id, router: router } })
    }
  },
  mounted () {
    this.historyList = this.$store.state.cinemaList.slice(0, 5)
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  }
}
</script>
<style lang="scss" scoped>
.tab {
  padding: 2.5vw 4.167vw;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  .return {
    margin-left: 2.778vw;
    line-height: 8.333vw;
  }
}
.header {
  height: 13.889vw;
  line-height: 13.889vw;
  text-align: center;
  background-color: red;
  overflow: hidden;
  width: 100%;
  opacity: 0.8;
  color: white;
}
.search {
  width: calc(100% - 11.944vw);
  height: 8.333vw;
  line-height: 8.333vw;
  background-color: #f4f4f4;
  position: relative;
  float: left;
  border-radius: 2.778vw;
  input {
    outline: none;
    border: none;
    background-color: #f4f4f4;
    width: calc(100% - 16.667vw);
  }
  i {
    font-size: 3.889vw;
    margin: 0 2.222vw;
  }
  span {
    width: 8.333vw;
    height: 8.333vw;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
  }
}
.list {
  position: relative;
  top: -12.222vw;
  //   margin-top: 0;
}
.history {
  margin-top: 13.889vw;
  padding: 0 4.167vw 2.222vw;
  p {
    margin-bottom: 4.167vw;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 0 2.778vw 2.778vw 0;
      font-size: 3.611vw;
      div {
        height: 3.889vw;
        padding: 2.222vw 3.333vw;
        background-color: hsla(0, 0%, 96%, 0.6);
        border-radius: 1.389vw;
      }
    }
  }
}
</style>
