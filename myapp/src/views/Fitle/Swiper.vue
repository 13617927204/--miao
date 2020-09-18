<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.filmswiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    })
  }
}
</script>
