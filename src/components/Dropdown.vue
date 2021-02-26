<template>
    <div class="dropdown-group">
        <div class="box">
            <div class="dropdown-toggle" @click.stop="toggleMenu()">
                <div class="dropdown-toggle-item">
                    <span>{{ selectedOption.name }}</span>
                    <svg-icon :icon-name="selectedOption.icon" :font-size="25">
                    </svg-icon>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="dropdown-menu" v-if="showMenu">
                <div v-for="(option, idx) in options" :key="idx">
                    <div class="item" @click.stop="updateOption(option)">
                        <!-- <div class="arrow-right"></div> -->
                        <div class="item-country">
                            {{ option.name }}
                        </div>
                        <div class="item-icon">
                            <svg-icon :icon-name="option.icon" layout-type="noText" :font-size="25">
                            </svg-icon>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import svgIcon from './SvgIcon'
export default {
    components: {
        svgIcon
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        selected: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            selectedOption: {
                name: '',
                icon: ''
            },
            showMenu: false,
        }
    },
    mounted() {
        this.selectedOption = this.selected;
        document.addEventListener('click', this.clickHandler);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.clickHandler);
    },
    methods: {
        updateOption(option) {
            this.selectedOption = option;
            this.showMenu = false;
            this.$emit('updateOption', this.selectedOption);
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        // outside click event
        clickHandler(event) {
            const { target } = event;
            const { $el } = this;
            if (!$el.contains(target)) {
                this.showMenu = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.dropdown-group {
    // position: absolute;
    // top: 50%;
    // left: 90%;
    // transform: translate(-50%, -90%);
}
.box {
    position: relative;
    width: 51px;
    height: 26px;
    // background: #efb133;
    display: flex;
    justify-content: center;
    align-items: center;
    // FIXME: 不显示
    &::after {
        content: '';
        position: absolute;
        bottom: 8px;
        right: -10px;
        transform: rotate(90deg);
        width: 0; 
        height: 0;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-left: 6px solid #fff;
    }
    .dropdown-toggle {
        position: relative;
        width: 49px;
        height: 24px;
        box-sizing: border-box;
        font-size: 16px;
        color: #fff;
        .dropdown-toggle-item {
            height: 100%;
            line-height: 26px;
            display: flex;
            justify-content: space-around;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.dropdown-menu {
    // z-index: 1000;
    position: absolute;
    margin-top: 4px;
    margin-left: -30px;
    width: 72px;
    height: 64px;
    background: #FFFFFF;
    box-shadow: 0px 3px 4px rgba(243, 67, 43, 0.1);
    border-radius: 5px;
    // 显示隐藏动画

    .item {
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        color: #000;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
        &:hover:before  {
            content: '';
            width: 0; 
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 9px solid #000;
        }
        .item-icon {
            // margin-left: 7px;
            .noText {
                position: relative;
                top: 2px;
                margin-left: 3px;
            }
        }
    }
}
</style>