import { IonButton, IonRow } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useGameLogic } from 'src/hooks'

function Controls() {
  const { t } = useTranslation()
  const { newGame } = useGameLogic()

  return (
    <IonRow className="ion-justify-content-center ion-padding-bottom">
      <IonButton color="primary" onClick={() => newGame()}>
        {t('defeat.tryAgainButton')}
      </IonButton>
    </IonRow>
  )
}

export default Controls
