import { IonItem, IonToggle } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useSettingsStore } from 'src/store'

function SwitchWordCheck() {
  const { t } = useTranslation()
  const wordcheck = useSettingsStore((state) => state.wordcheck)
  const toggleWordcheck = useSettingsStore((state) => state.toggleWordcheck)

  return (
    <IonItem>
      <IonToggle mode="ios" checked={wordcheck} onIonChange={toggleWordcheck}>
        {t('settings.wordCheck.title')}
      </IonToggle>
    </IonItem>
  )
}

export default SwitchWordCheck
