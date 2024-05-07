import { IonButton, IonItem, IonLabel, IonText, IonNote, IonIcon } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { useBoardStore, useHintsStore } from 'src/store'
import { LightBulbSvg } from 'src/assets/icons'

function ShowCorrect() {
  const { t } = useTranslation()
  const mode = useBoardStore((state) => state.mode)
  const { answer, boardSize } = useBoardStore((state) => state[mode])
  const { count, correctWord, activeIndex } = useHintsStore((state) => state[mode])
  const addCorrectLetter = useHintsStore((state) => state.addCorrectLetter)
  const isDisabled =
    correctWord.filter((item) => item?.status === 'correct').length >= boardSize ||
    correctWord[activeIndex]?.status === 'correct' ||
    count < 1

  function showCorrectLetter() {
    addCorrectLetter({ letter: answer[activeIndex], i: activeIndex })
  }

  return (
    <IonItem disabled={isDisabled}>
      <IonLabel>
        <IonText>{t('hints.correct.title')}</IonText>
        <br />
        <IonNote className="ion-text-wrap">{t('hints.correct.desc')}</IonNote>
      </IonLabel>
      <IonButton onClick={showCorrectLetter}>
        1 <IonIcon icon={LightBulbSvg} className="hints-btn--icon" />
      </IonButton>
    </IonItem>
  )
}

export default ShowCorrect
