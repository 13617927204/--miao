<template>
  <div>
    <div class="header">沈安影院</div>
    <div class="tab">
      <div class="search">
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="请输入查询的电影名" v-model="mytext" />
        <span v-show="mytext ? true : false" @click="handleClick">x</span>
      </div>
      <div class="return" @click="handleReturn">取消</div>
    </div>
    <div v-if="datalist ? true : false" v-show="mytext ? true : false">
      <ul>
        <li v-for="data in datalist.list" :key="data.id">
          <img :src="data.img | path" alt />
          <div class="center">
            <div class="center_1">
              <span class="span_1">{{data.nm}}&nbsp;</span>
            </div>
            <div class="center_2" v-if="data.grade">
              <span class="center_2-span_1">观众评分</span>
              <span class="center_2-span_2">&nbsp; {{data.sc}}</span>
            </div>
            <div class="center_2" v-else></div>
            <div class="center_3">
              <span>主演：{{data.act}}</span>
            </div>
            <div class="center_4">
              <span>上映日期：{{data.rt}}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="all" v-show="datalist ? true : false">
        <span>查看全部{{datalist.total}}部影视剧</span>
      </div>
    </div>
    <div v-else v-show="isShow">
        <span>没有找到相关内容</span>
    </div>
  </div>
</template>
<script>
import Vue from 'Vue'
import axios from 'axios'
Vue.filter('path', (data) => {
  return data.replace('w.h', '140.200')
})
export default {
  data () {
    return {
      mytext: '',
      datalist: [],
      isShow: false
    }
  },
  methods: {
    handleClick () {
      this.mytext = ''
      this.isShow = false
    },
    handleReturn () {
      this.$router.push('/fitle')
    }
  },
  watch: {
    mytext () {
      if (!this.mytext) {
        this.datalist = null
      } else {
        axios
          .get(`/ajax/search?kw=${this.mytext}&cityId=10&stype=-1`)
          .then((res) => {
            this.datalist = res.data.movies
            if (this.datalist) {
              this.isShow = false
            } else {
              this.isShow = true
            }
          })
      }
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  },
  beforeDestroy () {
    this.$store.commit('isTabbrshow', true)
  }
}
</script>
<style lang="scss" scoped>
.tab {
  padding: 2.5vw 4.167vw;
  display: flex;
  top: 0;
  left: 0;
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
.return {
  line-height: 8.333vw;
  padding-left: 2.778vw;
}
div {
  ul {
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
.all {
  width: 100%;
  height: 12.222vw;
  line-height: 12.222vw;
  text-align: center;
  color: red;
}
</style>
