import { IonModal, IonTitle, IonList, IonFooter } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useModalsStore } from 'src/store'
import { BoardSize, SwitchWordCheck, SwitchSwapButtons, SwitchTheme, SelectLanguage, OpenTutorial } from './components'
import './settings.scss'

function Settings() {
  const { t } = useTranslation()
  const settings = useModalsStore((state) => state.settings)
  const hideModal = useModalsStore((state) => state.hideModal)
  const didDismiss = () => hideModal('settings')

  return (
    <IonModal isOpen={settings} onDidDismiss={didDismiss} initialBreakpoint={1} breakpoints={[0, 1]}>
      <IonTitle className="ion-text-center ion-margin-top">{t('settings.title')}</IonTitle>
      <BoardSize />
      <IonList lines="none">
        <SwitchWordCheck />
        <SwitchSwapButtons />
        <SwitchTheme />
        <SelectLanguage />
      </IonList>
      <IonFooter>
        <OpenTutorial />
      </IonFooter>
    </IonModal>
  )
}

export default Settings
