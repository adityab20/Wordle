import { IonButton, IonIcon, IonItem, IonLabel, IonNote, IonText } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore, useHintsStore, useSettingsStore } from 'src/store'
import { LightBulbSvg } from 'src/assets/icons'
import { languages } from 'src/locales'
import { shuffle } from 'src/utils'

function ShowAbcent() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const { letters, answer, boardSize } = useBoardStore((state) => state[mode])
  const { count, absentLetters } = useHintsStore((state) => state[mode])
  const addAbsentLetter = useHintsStore((state) => state.addAbsentLetter)
  const language = useSettingsStore((state) => state.language)
  const { alpha } = languages.items.find((item) => item.value === language.value)
  const isDisabled = absentLetters.length > alpha.length - boardSize || count < 0.1

  function showAbsentLetter() {
    const absentLetter = getAbsentLetter()
    addAbsentLetter(absentLetter)
  }

  function getAbsentLetter() {
    const absentBoard = letters.filter((item) => item.status === 'absent').map((obj) => obj.letter)
    const absentHint = absentLetters.map((obj) => obj.letter)
    const aLetters = alpha
      .split('')
      .filter((item) => !answer.split('').includes(item))
      .filter((item) => !absentBoard.includes(item))
      .filter((item) => !absentHint.includes(item))

    return shuffle(aLetters).at(-1)
  }

  return (
    <IonItem disabled={isDisabled}>
      <IonLabel>
        <IonText>{t('hints.absent.title')}</IonText>
        <br />
        <IonNote className="ion-text-wrap">{t('hints.absent.desc')}</IonNote>
      </IonLabel>
      <IonButton onClick={showAbsentLetter}>
        1 <IonIcon icon={LightBulbSvg} className="hints-btn--icon" />
      </IonButton>
    </IonItem>
  )
}

export default ShowAbcent
