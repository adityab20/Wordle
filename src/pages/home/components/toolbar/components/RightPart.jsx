import { IonButton, IonButtons, IonIcon } from '@ionic/react'
import { LightBulbSvg, SettingsSvg } from 'src/assets/icons'
import { useBoardStore, useModalsStore } from 'src/store'

function RightPart() {
  const mode = useBoardStore((state) => state.mode)
  const gameover = useBoardStore((state) => state.daily.gameover)
  const showModal = useModalsStore((state) => state.showModal)
  const isDailyMode = mode === 'daily'
  const isDisabled = isDailyMode && gameover

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
  }

  return (
    <IonButtons slot="end">
      <IonButton id="open-hints-modal" disabled={isDisabled} onKeyDown={handleKeyPress}>
        <IonIcon icon={LightBulbSvg} slot="icon-only" />
        {/* <IonBadge>999</IonBadge> */}
      </IonButton>
      <IonButton onClick={() => showModal('settings')} onKeyDown={handleKeyPress}>
        <IonIcon icon={SettingsSvg} slot="icon-only" />
      </IonButton>
    </IonButtons>
  )
}

export default RightPart
