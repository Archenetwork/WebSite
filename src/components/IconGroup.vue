<template>
    <div class="icon-group">
        <div class="icon" v-for="icon in icons" :key="icon.name"> 
            <a :href="icon.link"><svg-icon :icon-name="icon.name" :font-size="18"/></a>
        </div>
    </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";
export default {
    components: {
      SvgIcon
    },
    data() {
        return {
            icons: [
                {
                    name: 'iconbottom-icon-telegram',
                    link: 'https://t.me/ArcheNetwork'
                },
                {
                    name: 'iconbottom-icon-medium',
                    link: 'https://archenetwork.medium.com/'
                },
                {
                    name: 'iconbottom-icon-twitter',
                    link: 'https://twitter.com/Arche_Network'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-group {
    display: flex;
    flex-direction: column;
    height: 120PX;
    justify-content: space-around;
    .icon {
        width: 30px;
        height: 30px;
        // background: #023AFF;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background: #023AFF;
        }
    }
}
</style>