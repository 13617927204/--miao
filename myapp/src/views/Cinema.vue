<template>
  <div>
    <div v-if="isShow">
      <cinematabbar @myclick1="handleClick1" @handleMytext="handleMytext"></cinematabbar>
      <cinemalist :handleMytext='text'></cinemalist>
    </div>
    <router-view @myclick2="handleClick2" v-else></router-view>
  </div>
</template>
<script>
import cinematabbar from '../views/Cinema/CinemaTabbar'
import cinemalist from '../views/Cinema/CinemaList'
export default {
  data () {
    return {
      isShow: true,
      text: 1
    }
  },
  methods: {
    handleClick1 () {
      // console.log(11)
      this.isShow = false
      this.$store.commit('isTabbrshow', false)
      this.$router.push('/cinema/search')
    },
    handleClick2 () {
      // console.log(11)
      this.isShow = true
      this.$store.commit('isTabbrshow', true)
      this.$router.push('/cinema')
    },
    handleMytext () {
      this.text++
    }
  },
  components: {
    cinematabbar,
    cinemalist
  },
  mounted () {
    // console.log(this.$route.path)
    if (this.$route.path === '/cinema/search') {
      this.isShow = false
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', true)
  }
}
</script>
<style lang="scss" scoped>

</style>
