import { IonRow, IonCol, IonText, IonNote } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { Grid } from 'src/components/ui'
import { useBoardStore, useStatisticsStore } from 'src/store'

function Table() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const { played, wins, winRate, currentStreak, maxStreak } = useStatisticsStore((state) => state[mode])
  const bestTry = useStatisticsStore((state) => state.bestTry)
  const statistics = [
    { value: played, icon: '🕹️', desc: t('statistics.played') },
    { value: wins, icon: '🏆', desc: t('statistics.wins') },
    { value: winRate.toFixed(), icon: '📈', desc: t('statistics.winRate') },
    { value: `#${bestTry()}`, icon: '💎', desc: t('statistics.bestTry') },
    { value: currentStreak, icon: '🔥', desc: t('statistics.currentStreak') },
    { value: maxStreak, icon: '⚡️', desc: t('statistics.maxStreak') }
  ]

  return (
    <Grid rows={2} cols={3} gap={16}>
      {statistics.map(({ value, icon, desc }, i) => (
        <IonRow key={i}>
          <IonCol>
            <IonRow className="ion-justify-content-center">
              <IonText className="statistics-value">{value}</IonText>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-text-center">
              <IonNote>
                {icon} {desc}
              </IonNote>
            </IonRow>
          </IonCol>
        </IonRow>
      ))}
    </Grid>
  )
}

export default Table
