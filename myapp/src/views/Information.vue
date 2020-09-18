<template>
    <div>
        <div v-html="text">

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?actId=ElzMZU125260',
      headers: {
        'X-Client-Info': '',
        'X-Host': 'mall.act.static-page.info'
      }
    }).then(res => {
      this.text = res.data.data.data.content
    })
  }
}
</script>
