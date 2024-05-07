import { IonToast } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useModalsStore } from 'src/store'

function WordNotFound() {
  const { t } = useTranslation()
  const wordnotfound = useModalsStore((state) => state.wordnotfound)
  const hideModal = useModalsStore((state) => state.hideModal)

  return (
    <IonToast
      isOpen={wordnotfound}
      message={t('wordNotFound')}
      onDidDismiss={() => hideModal('wordnotfound')}
      duration={3000}
      color="danger"
      position="middle"
      className="ion-text-center"
    />
  )
}

export default WordNotFound
