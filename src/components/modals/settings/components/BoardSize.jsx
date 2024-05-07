import { IonGrid, IonRow, IonText, IonButton } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useGameLogic } from 'src/hooks'
import { useBoardStore } from 'src/store'

function BoardSize() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const boardSize = useBoardStore((state) => state[state.mode].boardSize)
  const setBoardSize = useBoardStore((state) => state.setBoardSize)
  const { newGame } = useGameLogic()
  const isDisabled = mode === 'daily'

  function onChange(size) {
    if (boardSize === size) return
    setBoardSize(size)
    newGame({ newBoardSize: true })
  }

  return (
    <IonGrid className="board-size">
      <IonRow className="ion-text-center ion-padding-bottom ion-justify-content-center">
        <IonText className="ion-margin-top">{t('settings.boardSize')}</IonText>
      </IonRow>
      <IonRow className="ion-justify-content-center">
        {[...new Array(8)].map((_, i) => {
          const j = i + 4
          const color = j === boardSize ? 'primary' : 'dark'
          return (
            <IonButton key={j} color={color} disabled={isDisabled} onClick={() => onChange(j)}>
              {j}
            </IonButton>
          )
        })}
      </IonRow>
    </IonGrid>
  )
}

export default BoardSize
