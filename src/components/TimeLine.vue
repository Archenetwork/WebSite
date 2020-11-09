<template>
  <div>
    <div class="timeline" v-for="(item, index) in itemTimeline" :key="index">
      <div class="timeline-item">
        <div class="left">
          <div class="ellipse"></div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="date">{{ item.date }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
    itemTimeline: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="less" scoped>
.timeline {
  .timeline-item {
    display: flex;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .ellipse {
        width: 12px;
        height: 12px;
        background: #604eff;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }

      .line {
        width: 2px;
        height: 64px;
        background: #604eff;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;

      .date {
        font-weight: bold;
        font-size: 16px;
        color: #604eff;
      }

      .content {
        width: 266px;
        font-size: 12px;
        line-height: 20px;
        color: #333333;
        text-align: left;
      }
    }
  }
}
</style>
