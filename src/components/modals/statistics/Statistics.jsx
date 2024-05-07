import { IonModal } from '@ionic/react'
import { Title, Table, Chart, Controls } from './components'
import './statistics.scss'

function Statistics() {
  return (
    <IonModal trigger="open-statistics-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
      <Title />
      <Table />
      <Chart />
      <Controls />
    </IonModal>
  )
}

export default Statistics
