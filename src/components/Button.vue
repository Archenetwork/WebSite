<template>
  <div class="button">
    <span>{{$t('home.homeButton')}}</span>
    <svg-icon icon-name="iconArrowRight" />
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
    components: {
      SvgIcon
    }
}
</script>

<style lang="scss" scoped>
.button {
    width: 293px;
    height: 64px;
    background: #023AFF;
    border-radius: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 23px;
    span {
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
}

</style>