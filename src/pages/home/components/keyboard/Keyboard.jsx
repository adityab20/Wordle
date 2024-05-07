import { IonRow, IonCol } from '@ionic/react'
import { languages } from 'src/locales'
import { useSettingsStore } from 'src/store'
import { SubmitButton, BackspaceButton, KeyButton } from './components'
import './keyboard.scss'

function Keyboard() {
  const language = useSettingsStore((state) => state.language)
  const swapButtons = useSettingsStore((state) => state.swapButtons)

  return (
    <IonRow className="keyboard ion-justify-content-center ion-padding">
      <IonCol className="ion-no-padding">
        {languages
          .keyboard(language.value)
          .map((row, i, self) => (i === self.length - 1 ? (swapButtons ? `<${row}>` : `>${row}<`) : row))
          .map((row, i) => (
            <div key={i} className="keyboard-row">
              {row
                .split('')
                .map((letter) =>
                  letter === '>' ? (
                    <SubmitButton key={letter} />
                  ) : letter === '<' ? (
                    <BackspaceButton key={letter} />
                  ) : (
                    <KeyButton key={letter} letter={letter} />
                  )
                )}
            </div>
          ))}
      </IonCol>
    </IonRow>
  )
}

export default Keyboard
