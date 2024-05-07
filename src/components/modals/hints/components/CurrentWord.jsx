import { IonRow, IonCol } from '@ionic/react'
import classNames from 'classnames'
import { useBoardStore, useHintsStore } from 'src/store'

function Word() {
  const mode = useBoardStore((state) => state.mode)
  const boardSize = useBoardStore((state) => state[mode].boardSize)
  const { correctWord, activeIndex } = useHintsStore((state) => state[mode])
  const setActiveIndex = useHintsStore((state) => state.setActiveIndex)

  function changeIndex(i) {
    if (correctWord[i]?.status === 'correct' || activeIndex === i) return
    setActiveIndex(i)
  }

  return (
    <IonRow className="ion-padding ion-justify-content-center">
      {[...new Array(boardSize)].map((_, i) => (
        <IonCol
          key={i}
          className={classNames('hints-cell', correctWord[i]?.status, { active: activeIndex === i })}
          onClick={() => changeIndex(i)}
        >
          {correctWord[i]?.letter}
        </IonCol>
      ))}
    </IonRow>
  )
}

export default Word
