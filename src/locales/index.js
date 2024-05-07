import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useSettingsStore } from 'src/store'
import { chunk } from 'src/utils'
import en from './en.json'

i18n.use(initReactI18next).init({
  resources: { en },
  fallbackLng: useSettingsStore.getState().language.value,
  debug: false
})

export const languages = {
  items: [
    {
      value: 'en',
      label: 'English',
      alpha: 'qwertyuiopasdfghjklzxcvbnm',
      rows: [10, 9, 7]
    }
  ],
  alpha(langValue) {
    const { alpha } = this.items.find(({ value }) => value === langValue)
    return alpha
  },
  keyboard(langValue) {
    const { alpha, rows } = this.items.find(({ value }) => value === langValue)
    const chunked = chunk(alpha, rows)
    return chunked
  }
}

export default i18n
