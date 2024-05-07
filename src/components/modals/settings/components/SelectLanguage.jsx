import { IonItem, IonSelect, IonSelectOption } from '@ionic/react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { fullDataLanguage } from 'src/utils'
import { useGameLogic } from 'src/hooks'
import { useSettingsStore } from 'src/store'
import { languages } from 'src/locales'

function SelectLanguage() {
  const { t } = useTranslation()
  const { newGame } = useGameLogic()
  const language = useSettingsStore((state) => state.language)
  const setLanguage = useSettingsStore((state) => state.setLanguage)

  function changeLanguage(e) {
    const { value, label } = fullDataLanguage(languages, e.detail.value)
    i18n.changeLanguage(value)
    setLanguage({ value, label })
    newGame({ newLanguage: true })
  }

  return (
    <IonItem>
      <IonSelect
        value={language.value}
        label={t('settings.language.title')}
        placeholder={language.label}
        onIonChange={changeLanguage}
        interface="popover"
      >
        {languages.items.map(({ value, label }) => (
          <IonSelectOption key={value} value={value}>
            {label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  )
}

export default SelectLanguage
