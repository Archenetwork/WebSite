<template>
    <div class="card" :style="cardBackgroundColor">
            <div class="card-title">
                <slot name="card-title"></slot>
            </div>
            <div class="card-content">
                <slot name="card-content"></slot>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        cardColor: String,
        required: true
    },
    computed: {
        cardBackgroundColor() {
            return {
                background: this.cardColor
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 707px;
    height: 246px;
    border-radius: 80px 80px 80px 30px;
    // FIXME:
    padding: 50px 0 0 100px;
    text-align: left;
    .card-title {
        font-weight: bold;
        font-size: 36px;
        color: #ffffff;
    }
    .card-content {
        margin-top: 20px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
    }
}
</style>