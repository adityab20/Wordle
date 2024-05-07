import { IonGrid, IonRow, IonCol, IonText, IonTitle } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore, useStatisticsStore } from 'src/store'
import { ProgressBar } from './'

function Chart() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const dist = useStatisticsStore((state) => state[mode].dist)

  return (
    <IonGrid className="chart">
      <IonRow className="ion-text-center">
        <IonTitle size="small">{t('statistics.guessDist')}</IonTitle>
      </IonRow>
      <IonRow className="ion-nowrap">
        {dist.map((value, i) => (
          <IonCol key={i} className="ion-text-center">
            <IonText>{value}</IonText>
            <ProgressBar value={value} />
            <IonText>
              <span>#</span>
              {i + 1}
            </IonText>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  )
}

export default Chart
