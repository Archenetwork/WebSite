<template>
    <div :class="layout">
        <svg class="icon" aria-hidden="true" :style="iconFontSize" >
            <use :xlink:href="iconClass"></use>
        </svg>
        <slot name="append"></slot>
    </div>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        iconName: {
            type: String,
            required: true
        },
        layoutType: {
            type: String,
            default: 'noText'
        },
        fontSize: {
            type: Number,
            default: 25
        }
    },
    computed: {
        iconClass() {
            return `#${this.iconName}`
        },
        layout() {
            return `${this.layoutType}`
        },
        iconFontSize() {
            return {
                width: this.fontSize + 'px',
                height: this.fontSize + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.noText {
    // height: 100%;
    // width: 100%;
}
.column {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .icon {
        width: 30px; 
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
}
.row {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .icon {
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    & > div > span {
        margin-left: 10px;
    }
}
</style>