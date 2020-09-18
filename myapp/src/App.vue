<template>
  <div>
    <tabbar v-show="this.$store.state.isTabbarshow"></tabbar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from '../src/components/Tabbar'
export default {
  components: {
    tabbar: tabbar
  }
}
</script>
<style lang="scss">
  *{
    padding:0;
    margin:0;
  }
  ul{
    li{
      list-style: none;
    }
  }
  li{
    list-style: none;
  }
  html{
    height: 100%;
    color:#797d82;
    font-family: "Microsoft YaHei","宋体",'sunshine',"SimHei",  "SimSun", \5B8B\4F53, Arial Narrow, arial, serif;
    // background: #F4F4F4;
  }
  img{
    display: block;
  }
  a{
    text-decoration: none;
  }
</style>
