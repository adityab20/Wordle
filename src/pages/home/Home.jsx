import { useEffect } from 'react'
import { IonPage, IonHeader, IonContent, IonFooter } from '@ionic/react'
import { useGameLogic } from 'src/hooks'
import { Modals, Toasts } from 'src/components'
import { Toolbar, Board, Keyboard } from './components'

function Home() {
  const { newGame, challengeGame } = useGameLogic()

  useEffect(() => {
    newGame()
    challengeGame()
    // eslint-disable-next-line
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent>
        <Board />
      </IonContent>
      <IonFooter>
        <Keyboard />
      </IonFooter>
      <Modals />
      <Toasts />
    </IonPage>
  )
}

export default Home
