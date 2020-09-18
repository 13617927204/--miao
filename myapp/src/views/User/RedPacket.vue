<template>
    <div>
        <userhead headName='组合红包'></userhead>
        <div class="order">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq25.2px3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ14.4px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC" alt="">
            <p class="order-p"><span>没有组合红包</span></p>
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
