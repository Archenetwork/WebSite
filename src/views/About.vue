<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="test1"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="test2"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  directives: {
    swiper: directive
  },
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide {
  /* height: 100vh; */
}
.test1 {
  height: 100vh;
  background: gold;
}
.test2 {
  height: 100vh;
  background: green;
}
</style>