<template>
  <div>
    <slot></slot>
    <ul>
      <router-link to="/fitle/hotshowing" tag="li" activeClass="active">
        <span>正在热映</span>
      </router-link>
      <router-link to="/fitle/comingsoon" tag="li" activeClass="active">
        <span>即将上映</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      city: ''
    }
  },
  methods: {
    // handleClick () {
    //   // 将页面路由当作参数传入到要跳转的路由，方便之后直接跳转回本页面
    //   var router = this.$route.path
    //   //  this.$router.push('/city')
    //   // 编程式导航-名字跳转
    //   this.$router.push({ name: 'city', params: { router: router } })
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  z-index: 2000;
  background: white;
  border-bottom: 0.278vw solid #ededed;
}
.top {
  padding: 0 4.167vw;
  width: 100%;
  height: 12.222vw;
  display: flex;
  box-sizing: border-box;
}
.left {
  width: 13.333vw;
  flex: 1;
  span {
    display: inline-block;
    font-size: 3.611vw;
    height: 12.222vw;
    line-height: 12.222vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 10.556vw;
  }
  img {
    width: 1.667vw;
    height: 0.833vw;
    display: inline-block;
    position: relative;
    top: -5.556vw;
    left: 1.111vw;
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
.active {
  color: red;
}
ul {
  display: flex;
  width: 100%;
  justify-content: center;
  li {
    // flex:1;
    width: 50%;
    list-style: none;
    text-align: center;
    line-height: 13.889vw;
    font-size: 3.889vw;
    span {
      cursor: pointer;
    }
  }
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  width: 100%;
  height: 26.111vw;
  z-index: 99;
}
</style>
