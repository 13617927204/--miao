import Vue from 'vue'
import axios from 'axios'
import router from 'vue-router'

// 封装axios的请求
const http = axios.create({
  baseURL: 'https://m.maizuo.com'
})

http.interceptors.request.use(function (config) {
  const k = config.url[config.url.length - 1]
  if (k === '1') { // 1代表请求的电影院相关信息
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596268264308915522764801","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  } else if (k === '2') { // 电影列表
    console.log(2)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596268264308915522764801","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  } else if (k === '3') { // 影院详情
    console.log(3)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.info'
    }
  } else if (k === '4') { // 放映厅详情
    console.log(4)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.schedule.info'
    }
  } else if (k === '5') { // 影片详情
    console.log(5)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.info'
    }
  } else if (k === '6') { // 城市列表
    console.log(6)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  } else if (k === '7') { // 获取影片放映时间
    console.log(7)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.film-show-cinema'
    }
  } else if (k === '8') { // 获取影院详细信息
    console.log(8)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.batch-cinema'
    }
  } else if (k === '9') { // 电影院电影的场次
    console.log(9)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.schedule.list'
    }
  } else if (k === '0') { // 影院的影片信息
    console.log(0)
    config.headers = {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.cinema-show-film'
    }
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.dir(error)
  if (error.response.status === 401 || error.response.status === 402) {
    router.push('/login')
    Vue.prototype.$msg.fail(error.response.data.message)
  }
  return Promise.reject(error)
})
export default http
