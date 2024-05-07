import { IonIcon, IonRow, IonText } from '@ionic/react'
import { LampSvg } from 'src/assets/icons'

function Earned() {
  return (
    <IonRow className="ion-justify-content-center">
      <IonText className="win-earned">
        +1 <IonIcon icon={LampSvg} />
      </IonText>
    </IonRow>
  )
}

export default Earned
