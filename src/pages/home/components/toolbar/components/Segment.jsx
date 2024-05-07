import { IonTitle, IonSegment, IonSegmentButton, IonLabel, IonText, IonIcon } from '@ionic/react'
import { CalendarSvg, InfinitySvg } from 'src/assets/icons'
import { useTranslation } from 'react-i18next'
import { useBoardStore } from 'src/store'

function Segment() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const setGameMode = useBoardStore((state) => state.setGameMode)

  return (
    <IonTitle mode="ios">
      <IonSegment value={mode} mode="ios" onIonChange={(e) => setGameMode(e.detail.value)}>
        <IonSegmentButton value="daily">
          <IonLabel>
            <IonIcon icon={CalendarSvg} slot="icon-only" size="small" className="ion-hide-sm-up" />
            <IonText className="ion-hide-sm-down">{t('mode.daily')}</IonText>
          </IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="unlimited">
          <IonLabel>
            <IonIcon icon={InfinitySvg} slot="icon-only" size="small" className="ion-hide-sm-up" />
            <IonText className="ion-hide-sm-down">{t('mode.unlimited')}</IonText>
          </IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonTitle>
  )
}

export default Segment
