import { IonModal, IonList } from '@ionic/react'
import { Title, Count, CurrentWord, ShowCorrect, ShowAbcent } from './components'
import './hints.scss'

function Hints() {
  return (
    <IonModal trigger="open-hints-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
      <Title />
      <Count />
      <CurrentWord />
      <IonList lines="none">
        <ShowCorrect />
        <ShowAbcent />
      </IonList>
    </IonModal>
  )
}

export default Hints
