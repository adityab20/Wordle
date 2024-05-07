import { IonModal, IonHeader, IonFooter } from '@ionic/react'
import { useGameLogic } from 'src/hooks'
import { useModalsStore } from 'src/store'
import { Toolbar, Earned, Share, Controls } from './components'
import { enterAnimation, leaveAnimation } from '../animations'
import './win.scss'

function Win() {
  const anims = { enterAnimation, leaveAnimation }
  const win = useModalsStore((state) => state.win)
  const { newGame } = useGameLogic()

  return (
    <IonModal id="win-modal" isOpen={win} onDidDismiss={() => newGame()} {...anims}>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <Earned />
      <Share />
      <IonFooter>
        <Controls />
      </IonFooter>
    </IonModal>
  )
}

export default Win
