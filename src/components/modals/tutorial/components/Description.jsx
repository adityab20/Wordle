import { IonRow, IonNote } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore } from 'src/store'

function Description() {
  const { t } = useTranslation()
  const tries = useBoardStore((state) => state.tries)

  return (
    <IonRow className="tutorial-desc ion-justify-content-center">
      <IonNote>{t('tutorial.description', { tries })}</IonNote>
    </IonRow>
  )
}

export default Description
