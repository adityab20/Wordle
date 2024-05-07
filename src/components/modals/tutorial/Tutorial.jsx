import { IonModal, IonGrid } from '@ionic/react'
import { useModalsStore } from 'src/store'
import { Title, Description, Examples } from './components'
import './tutorial.scss'

function Tutorial() {
  const tutorial = useModalsStore((state) => state.tutorial)
  const hideModal = useModalsStore((state) => state.hideModal)
  const didDismiss = () => hideModal('tutorial')

  return (
    <IonModal isOpen={tutorial} onDidDismiss={didDismiss} initialBreakpoint={1} breakpoints={[0, 1]}>
      <Title />
      <IonGrid className="ion-text-center">
        <Description />
        <Examples />
      </IonGrid>
    </IonModal>
  )
}

export default Tutorial
