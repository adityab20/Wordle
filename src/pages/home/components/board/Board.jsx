import { IonRow } from '@ionic/react'
import { useBoardStore } from 'src/store'
import { Grid } from 'src/components/ui'
import { Cell } from './components'
import './board.scss'

function Board() {
  const tries = useBoardStore((state) => state.tries)
  const { letters, boardSize } = useBoardStore((state) => state[state.mode])

  return (
    <IonRow className="ion-justify-content-center ion-align-items-center ion-padding-horizontal hfull">
      <Grid rows={tries} cols={boardSize} size="minmax(1.2rem, 55px)" gap={5}>
        {[...new Array(boardSize * tries)].map((_, i) => (
          <Cell key={i} letter={letters[i]?.letter} status={letters[i]?.status} />
        ))}
      </Grid>
    </IonRow>
  )
}

export default Board
