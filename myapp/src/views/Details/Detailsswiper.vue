<template>
  <div class="swiper-container detailsswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  props: ['perview', 'myclassname'],
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.perview,
      spaceBetween: 10,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
