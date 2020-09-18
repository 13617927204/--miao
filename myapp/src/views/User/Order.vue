<template>
    <div>
        <userhead headName='电影订单'></userhead>
        <div class="order">
            <p><i class="iconfont icon-dianying"></i></p>
            <p class="order-p"><span>去挑些喜欢的商品吧</span></p>
            <div @click="handleFitle">首页</div>
        </div>
    </div>
</template>
<script>
import userhead from '../../components/UserHead'
export default {
  components: {
    userhead
  },
  methods: {
    handleFitle () {
      this.$router.push('.fitle')
    }
  },
  beforeMount () {
    this.$store.commit('isTabbrshow', false)
    this.$store.commit('isUser', false)
  },
  beforeDestroy () {
    this.$store.commit('isTabbrshow', true)
  }
}
</script>
<style lang="scss" scoped>
.order{
    width:41.667vw;
    height: 50vw;
    text-align: center;
    color: #bdc0c5;
    font-size: 3.889vw;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top:-25vw;
    margin-left: -20.833vw;
    p{
        margin:0 auto;
        width:22.222vw;
        i{
            font-size: 22.222vw;
            opacity: .5;
        }
    }
    .order-p{
        padding:4.444vw 0 5.556vw 0;
        width:100%;
    }
    div{
        width:100%;
        height: 9.167vw;
        border: 0.278vw solid #ff5f16;
        line-height: 9.167vw;
        border-radius: 1.389vw;
        color: #ff5f16;
        box-sizing: border-box;
    }
}
</style>
