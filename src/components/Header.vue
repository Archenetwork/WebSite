<template>
  <div class="nav">
    <div class="logo"></div>
    <span>FAQ</span>
    <span>Blog</span>
    <span>Forum</span>
    <dropdown
      :options = "languageList"
      :selected = "currentLanguage"
      @updateOption = "updateOption"
    >
    </dropdown>
    <div class="button">
      <span>Get APP</span>
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
        name: 'CN',
        icon: 'iconlanguage-cn'
      }
    }
  },
  methods: {
    updateOption(data){
      this.$i18n.locale = data.name;
      localStorage.setItem('languageName',data.name);
      localStorage.setItem('languageIcon',data.icon);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  // position: -webkit-sticky;
  // position: sticky;
  top: 40px;
  margin: 0 auto;
  width: 1200px;
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