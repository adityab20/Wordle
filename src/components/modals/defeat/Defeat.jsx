import { IonModal, IonFooter, IonHeader } from '@ionic/react'
import { useGameLogic } from 'src/hooks'
import { useModalsStore } from 'src/store'
import { Toolbar, Answer, Controls } from './components'
import { enterAnimation, leaveAnimation } from '../animations'
import './defeat.scss'

function Defeat() {
  const anims = { enterAnimation, leaveAnimation }
  const defeat = useModalsStore((state) => state.defeat)
  const { newGame } = useGameLogic()

  return (
    <IonModal id="defeat-modal" isOpen={defeat} onDidDismiss={() => newGame()} {...anims}>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <Answer />
      <IonFooter>
        <Controls />
      </IonFooter>
    </IonModal>
  )
}

export default Defeat
