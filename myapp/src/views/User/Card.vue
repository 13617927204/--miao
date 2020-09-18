<template>
    <div>
        <userhead headName='卖座券'></userhead>
        <div class="order">
            <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iGT/hWL/hGL/hWL/hGL/hGL/hGP/hWP/jGn/hGISk7EWAAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII=" alt="">
            <p class="order-p"><span>你还没有卖座券哦～</span></p>
            <div>激活新券</div>
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
    img{
        margin:0 auto;
        width:22.222vw;
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
