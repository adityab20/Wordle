import { IonRow, IonCol } from '@ionic/react'
import { SampleWord, SampleDesc } from '..'

function Example({ type }) {
  return (
    <IonRow className="ion-margin-top">
      <IonCol>
        <SampleWord type={type} />
        <SampleDesc type={type} />
      </IonCol>
    </IonRow>
  )
}

export default Example
