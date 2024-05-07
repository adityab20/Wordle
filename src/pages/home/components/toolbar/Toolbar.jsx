import { IonToolbar } from '@ionic/react'
import { LeftPart, Segment, RightPart } from './components'
import './toolbar.scss'

function Toolbar() {
  return (
    <IonToolbar>
      <LeftPart />
      <Segment />
      <RightPart />
    </IonToolbar>
  )
}

export default Toolbar
