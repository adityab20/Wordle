import { IonTitle } from '@ionic/react'
import { useTranslation } from 'react-i18next'

function Title() {
  const { t } = useTranslation()
  return <IonTitle className="ion-text-center ion-margin-top">{t('tutorial.title')}</IonTitle>
}

export default Title
