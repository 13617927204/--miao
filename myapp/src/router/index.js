import Vue from 'vue'
import VueRouter from 'vue-router'
import Fitle from '../views/Fitle'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Details from '../views/Details'
import FilmCinema from '../views/Details/FilmCinema'

import Login from '../views/Login'
import Register from '../views/Register'
import City from '../views/City'
import MovieSearch from '../views/MovieSearch'
import CinemaDetails from '../views/CinemaDetails'
import Change from '../views/Change'
import Admin from '../views/Admin'
import User from '../views/User'
import Schedule from '../views/Schedule'
import Information from '../views/Information'
import Preorder from '../views/Preorder'

import Comingsoon from '../views/Fitle/Comingsoon'
import Hotshowing from '../views/Fitle/Hotshowing'
import Setting from '../views/Center/Setting'
import CinemaList from '../views/Admin/CinemaList'
import MovieList from '../views/Admin/MovieList'
import UsersList from '../views/Admin/UsersList'
import Search from '../views/Cinema/Search'

import Material from '../views/Material'
import Balance from '../views/User/Balance'
import Card from '../views/User/Card'
import Order from '../views/User/Order'
import RedPacket from '../views/User/RedPacket'

Vue.use(VueRouter)

const routes = [
  {
    path: '/fitle',
    component: Fitle,
    children: [// 二级路由
      {
        path: '/fitle/hotshowing',
        component: Hotshowing
      },
      {
        path: '/fitle/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/fitle/hotshowing'// 重定向
      }
    ]
  },
  {
    path: '/center',
    component: Center,
    children: [
      {
        path: '/center/setting',
        component: Setting
      }
    ]
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/cinema',
    component: Cinema,
    children: [
      {
        path: '/cinema/search',
        component: Search
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'shen',
    component: Details
  },
  {
    path: '/details/:id/cinemass',
    name: 'len',
    component: FilmCinema
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/cinemaDetails/:id',
    name: 'an',
    component: CinemaDetails
  },
  {
    path: '/moviesearch',
    component: MovieSearch
  },
  {
    path: '/change',
    component: Change
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/admin/userslist',
        component: UsersList
      },
      {
        path: '/admin/movielist',
        component: MovieList
      },
      {
        path: '/admin/cinemalist',
        component: CinemaList
      },
      {
        path: '',
        redirect: '/admin/userslist'// 重定向
      }
    ]
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '/user/balance',
        component: Balance
      },
      {
        path: '/user/card',
        component: Card
      },
      {
        path: '/user/order',
        component: Order
      },
      {
        path: '/user/redPacket',
        component: RedPacket
      }
    ]
  },
  {
    path: '/material',
    component: Material
  },
  {
    path: '/schedule/:id',
    component: Schedule
  },
  {
    path: '/preorder',
    component: Preorder
  },
  {
    path: '*',
    redirect: '/fitle'// 重定向
  }
]

const router = new VueRouter({
  /* vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。 */
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'shenan',
  routes
})

// 全局路由拦截
// router.beforeEach((to, from, next) => {
//   if (to.path === '/center') {
//     console.log('已被拦截')
//   } else {
//     next()
//   }
// })

export default router
