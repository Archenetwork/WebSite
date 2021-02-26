import VueI18n from 'vue-i18n'
import Vue from 'vue'
// import { DEFAULT_LANGUAGE } from '../constants/translate'
import EN from '../lang/en.json'
import CN from '../lang/cn.json'
Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'EN', // set locale
    messages: {
       CN,
       EN
    }
})