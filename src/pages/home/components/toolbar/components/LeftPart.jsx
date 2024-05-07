import { IonButton, IonButtons, IonIcon } from '@ionic/react'
import { ChartSvg } from 'src/assets/icons'

function LeftPart() {
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
  }

  return (
    <IonButtons slot="start" className="ion-justify-start">
      <IonButton id="open-statistics-modal" onKeyDown={handleKeyPress}>
        <IonIcon icon={ChartSvg} slot="icon-only" />
      </IonButton>
    </IonButtons>
  )
}

export default LeftPart
