import { IonToast } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { copyOutline } from 'ionicons/icons'
import './copied.scss'

function Copied() {
  const { t } = useTranslation()

  return (
    <IonToast
      mode="ios"
      trigger="open-copy-toast"
      icon={copyOutline}
      message={`${t('copy')}`}
      position="top"
      translucent={true}
      duration={1500}
    />
  )
}

export default Copied
