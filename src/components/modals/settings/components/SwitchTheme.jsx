import { IonItem, IonToggle } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useSettingsStore } from 'src/store'

function SwitchTheme() {
  const { t } = useTranslation()
  const { theme, setTheme } = useSettingsStore()
  const isDarkTheme = theme === 'dark'

  function changeTheme() {
    const current = isDarkTheme ? 'light' : 'dark'
    setTheme(current)
  }

  return (
    <IonItem>
      <IonToggle mode="ios" checked={isDarkTheme} onIonChange={changeTheme}>
        {t('settings.darkMode.title')}
      </IonToggle>
    </IonItem>
  )
}

export default SwitchTheme
