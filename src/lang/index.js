 import Vue from 'vue'
 import VueI18n from 'vue-i18n'
 import enLocale from './en'
 import zhLocale from './zh'
 Vue.use(VueI18n)
console.log(VueI18n,"VueI18n")
 const messages = {
     "en-US": {
 ...enLocale,
 },
 "zh-CN": {
 ...zhLocale,
 }
 }

 const i18n = new VueI18n({
     locale: localStorage.getItem('language') || 'en-US',
     messages
 })
console.log(i18n,"i18n")
 export default i18n
