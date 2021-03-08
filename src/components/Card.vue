<template>
    <div class="card" :style="cardBackgroundColor">
            <div class="card-title">
                <slot name="card-title"></slot>
            </div>
            <div class="antitle">
                <slot></slot>
            </div>
            <div class="card-content">
                <slot name="card-content"></slot>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        cardColor: {
            type: String,
            required: true
        }
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
    width: 1037;
    height: 446px;
    // border-radius: 40px 40px 40px 20px;
    box-shadow: 0px 6px 60px rgba(20, 0, 255, 0.3);
    border-radius: 80px 80px 80px 30px;
    // FIXME:
    padding: 20px 20px 20px 100px;
    text-align: left;
    .card-title {
        margin-top: 50px;
        font-weight: bold;
        font-size: 36px;
        color: #ffffff;
    }
    .antitle, .card-content {
        width: 808px;
        margin-top: 30px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
    }
}
</style>