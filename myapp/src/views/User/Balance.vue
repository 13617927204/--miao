<template>
    <div>
        <userhead headName='余额明细'></userhead>
        <div class="top">
            <div class="top-div1">当前余额</div>
            <div class="top-div2">￥ 0.00</div>
        </div>
    </div>
</template>
<script>
import userhead from '../../components/UserHead'
export default {
  components: {
    userhead
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
.top{
    width:100%;
    height: 28.056vw;
    padding-top: 11.111vw;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/head-bg.424c804.png);
    color: #fff;
    text-align: center;
    position: relative;
    top:-2.778vw;
    .top-div1{
        font-size: 3.611vw;
        margin:auto;
        width:14.444vw;
        height: 5.278vw;
        line-height: 5.278vw;
    }
    .top-div2{
        font-size: 8.333vw;
        margin:auto;
        display: inline-block;
        height: 12.5vw;
        line-height: 12.5vw;
    }
}
</style>
