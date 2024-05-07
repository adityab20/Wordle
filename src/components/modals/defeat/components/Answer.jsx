import { IonGrid, IonRow, IonText } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore } from 'src/store'

function Answer() {
  const { t } = useTranslation()
  const answer = useBoardStore((state) => state[state.mode].answer)

  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        <IonText>{t('defeat.answer')}</IonText>
      </IonRow>
      <IonRow className="ion-justify-content-center ion-margin-vertical">
        <IonText className="defeat-answer">{answer}</IonText>
      </IonRow>
    </IonGrid>
  )
}

export default Answer
