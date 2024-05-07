import { IonRow, IonButton, IonIcon } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { QuestionSvg } from 'src/assets/icons'
import { useModalsStore } from 'src/store'

function OpenTutorial() {
  const { t } = useTranslation()
  const [showModal, hideModal] = useModalsStore((state) => [state.showModal, state.hideModal])

  function openTutorial() {
    hideModal('settings')
    showModal('tutorial')
  }

  return (
    <IonRow className="ion-justify-content-center">
      <IonButton id="open-tutorial-modal" fill="clear" size="small" onClick={openTutorial}>
        <IonIcon icon={QuestionSvg} slot="start" />
        {t('settings.howToPlay')}
      </IonButton>
    </IonRow>
  )
}

export default OpenTutorial
