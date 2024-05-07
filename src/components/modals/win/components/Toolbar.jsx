import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { closeOutline } from 'ionicons/icons'
import { useGameLogic } from 'src/hooks'

function Toolbar() {
  const { t } = useTranslation()
  const { newGame } = useGameLogic()

  return (
    <IonToolbar>
      <IonTitle mode="ios" className="with-badget">
        {t('win.title')}
      </IonTitle>
      <IonButtons slot="end">
        <IonButton fill="clear" onClick={() => newGame()}>
          <IonIcon icon={closeOutline} slot="icon-only" />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  )
}

export default Toolbar
