import { IonRow, IonNote } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore, useHintsStore } from 'src/store'
import { roundTo } from 'src/utils'

function Count() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const count = useHintsStore((state) => state[mode].count)
  const rounded = roundTo(count, 1)

  return (
    <IonRow className="ion-justify-content-center">
      <IonNote>{t('hints.count', { count: rounded })}</IonNote>
    </IonRow>
  )
}

export default Count
