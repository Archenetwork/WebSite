<template>
  <div class="nav">
    <div class="logo"></div>
    <span @click="jump('https://gitbook.arche.network/')">Docs</span>
    <span @click="jump('https://archenetwork.medium.com/')">Blog</span>
    <span @click="jump('https://discord.gg/ah8h2sqF2B')">Forum</span>
    <dropdown
      :options = "languageList"
      :selected = "currentLanguage"
      @updateOption = "updateOption"
    >
    </dropdown>
    <div class="button">
      <span @click="jump('https://app.arche.network/')">Get APP</span>
    </div>
  </div>
</template>

<script>
import dropdown from "@/components/Dropdown.vue";
export default {
  components: {
    dropdown
  },
  data() {
    return {
      languageList: [
        {
          name: 'EN',
          icon: 'iconlanguage-en'
        },
        {
          name: 'CN',
          icon: 'iconlanguage-cn'
        }
      ],
      currentLanguage: {
        name: '',
        icon: ''
      }
    }
  },
  methods: {
    getCurrentLanguage() {
      const langName = localStorage.getItem('languageName') || 'EN';
      const langIcon = localStorage.getItem('languageIcon') || 'iconlanguage-en';
      this.currentLanguage.name = langName;
      this.currentLanguage.icon = langIcon;
      this.$i18n.locale = langName;
    },
    updateOption(data){
      this.$i18n.locale = data.name;
      localStorage.setItem('languageName',data.name);
      localStorage.setItem('languageIcon',data.icon);
      setTimeout(() => {
        window.location.reload();
      })
    },
    jump(url) {
      window.open(url, '_blank');
    }
  },
  mounted() {
    this.getCurrentLanguage();
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  margin: 0 auto;
  width: 80%;
  height: 90px;
  border-radius: 100px;
  background: $nav-background;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 999;
  .logo {
    background-image: url('../assets/imgs/logo-icon.svg');
    width: 44px;
    height: 35px;
    background-size: cover;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    color: #E5E5E5;
    cursor: pointer;
  }
  .button {
    width: 164px;
    height: 48px;
    border-radius: 100px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 18px;
      color: #000000;
    }
  }
}
</style>