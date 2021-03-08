<template>
  <div class="container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="dot"></div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
    
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .title {
    font-weight: bold;
    font-size: 32px;
    color: #fff;
  }
  .dot {
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
  }
  .content {
    width: 280px;
    font-size: 16px;
    text-align: left;
    padding: 15px;
    background: rgba(0, 0, 0, 0.65);
    border: 2px solid rgba(255, 255, 255, 0.24);
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    border-radius: 12px;
    color: #fff;
  }
}
</style>
