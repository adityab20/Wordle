import { IonButton, IonIcon } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { TrashBinSvg } from 'src/assets/icons'
import { useBoardStore, useStatisticsStore } from 'src/store'

function ClearBtn() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const played = useStatisticsStore((state) => state[mode].played)
  const resetStats = useStatisticsStore((state) => state.resetStats)
  const isDisabled = played === 0

  function clearStatistics() {
    resetStats({ mode })
  }

  return (
    <IonButton color="danger" disabled={isDisabled} onClick={clearStatistics}>
      <IonIcon icon={TrashBinSvg} slot="start" className="trash-icon" />
      {t('statistics.clearBtn')}
    </IonButton>
  )
}

export default ClearBtn
