<template>
  <el-container>
    <el-header>
      <p>
        欢迎您，管理员
        <span>{{username}}</span>
      </p>
    </el-header>
    <el-container>
      <el-aside width="55.556vw">
        <el-menu
          class="el-menu-vertical-demo"
        >
          <router-link to="/admin/userslist" tag="el-menu-item" index="1" activeClass="is-active">
              <i class="el-icon-location"></i>
              <span>用户列表</span>
          </router-link>
          <router-link to="/admin/cinemalist" tag="el-menu-item" index="2" activeClass="is-active">
              <i class="el-icon-menu"></i>
              <span>影院列表</span>
          </router-link>
          <router-link to="/admin/movielist" tag="el-menu-item" index="3" activeClass="is-active">
              <i class="el-icon-document"></i>
              <span>电影列表</span>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    this.username = localStorage.getItem('username')
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
  },
  // 设置路由拦截 判断用户身份，只有管理员身份才能进入本页面
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    axios.get('/api/users/getUser').then((res) => {
      // console.log(res.data)
      if (res.data.user[0].isAdmin) {
        next()
      } else {
        next('/login')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 16.667vw;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 44.444vw;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
//   line-height: 44.444vw;
}
body > .el-container {
  margin-bottom: 11.111vw;
}
.el-header {
  text-align: left;
  p {
    margin-left: 27.778vw;
    span {
      margin-left: 8.333vw;
      color: wheat;
    }
  }
}
</style>
