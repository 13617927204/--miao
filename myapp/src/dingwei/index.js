import axios from 'axios'
function dingwei () {
  axios({
    url: '/geo/'
  }).then(res => {
    // console.log(res.data.address)
    var start = res.data.address.search('省') + 1
    var end = res.data.address.search('市')
    // console.log(res.data.address.substring(start, end))
    var cityName = res.data.address.substring(start, end)
    if (!localStorage.getItem('cityName')) {
      localStorage.setItem('cityName', cityName)
      if (!localStorage.getItem('cityId')) {
        axios({
          url: 'https://m.maizuo.com/gateway?k=8555192',
          headers: {
            'X-Client-Info':
                            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"211300"}',
            'X-Host': 'mall.film-ticket.city.list'
          }
        }).then((res) => {
          var citylist = res.data.data.cities
          for (var i = 0; i < citylist.length; i++) {
            if (cityName === citylist[i].name) {
              localStorage.setItem('cityId', citylist[i].cityId)
              location.reload()
            }
          }
        })
      }
    } else {

    }
  })
}
function cityDingwei () {
  var city = {}
  return axios({
    url: '/geo/'
  }).then(res => {
    // console.log(res.data.address)
    var start = res.data.address.search('省') + 1
    var end = res.data.address.search('市')
    // console.log(res.data.address.substring(start, end))
    var cityName = res.data.address.substring(start, end)
    return axios({
      url: 'https://m.maizuo.com/gateway?k=8555192',
      headers: {
        'X-Client-Info':
                          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15965124511069446856705","bc":"211300"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      var citylist = res.data.data.cities
      for (var i = 0; i < citylist.length; i++) {
        if (cityName === citylist[i].name) {
          var cityId = citylist[i].cityId
          city = {
            cityName: cityName,
            cityId: cityId
          }
        }
      }
      return city
    })
  })
}
export default {
  dingwei,
  cityDingwei
}
