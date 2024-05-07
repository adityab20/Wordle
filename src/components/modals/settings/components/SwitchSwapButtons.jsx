import { IonItem, IonToggle } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useSettingsStore } from 'src/store'

function SwitchSwapButtons() {
  const { t } = useTranslation()
  const { swapButtons, toggleSwapButtons } = useSettingsStore()

  return (
    <IonItem>
      <IonToggle mode="ios" checked={swapButtons} onIonChange={toggleSwapButtons}>
        {t('settings.swapButtons.title')}
      </IonToggle>
    </IonItem>
  )
}

export default SwitchSwapButtons
