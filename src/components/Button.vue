<template>
  <div class="button" @click="jump">
    <span>{{$t('home.homeButton')}}</span>
    <svg-icon icon-name="iconArrowRight" />
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
  components: {
    SvgIcon
  },
  methods: {
    jump() {
      window.open(
        'https://app.arche.network/',
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
    width: $button-width;
    height: $button-height;
    background: #023AFF;
    border-radius: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 23px;
    z-index: 999;
    cursor: pointer;
    span {
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
}

</style>