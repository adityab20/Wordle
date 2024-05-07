import { IonIcon } from '@ionic/react'
import { backspaceOutline } from 'ionicons/icons'
import { useKeyboard } from 'src/hooks'
import { useBoardStore } from 'src/store'
import { Button } from './'

function BackspaceButton() {
  const { letters, boardSize, row } = useBoardStore((state) => state[state.mode])
  const backspace = useBoardStore((state) => state.backspace)
  const isDisabled = letters.length === boardSize * (row - 1)
  const detectKeys = [8]

  useKeyboard(() => !isDisabled && backspace(), { detectKeys })

  return (
    <Button className="keyboard-button backspace-btn" disabled={isDisabled} onClick={backspace}>
      <IonIcon icon={backspaceOutline}></IonIcon>
    </Button>
  )
}

export default BackspaceButton
