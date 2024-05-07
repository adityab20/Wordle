import { IonNote } from '@ionic/react'
import { useTranslation } from 'react-i18next'

function SampleDesc({ type }) {
  const { t } = useTranslation()
  const indexs = { correct: 0, present: 2, absent: 3 }
  const letterIndex = indexs[type]

  return (
    <IonNote>
      {t(`tutorial.sample.${type}.desc.start`)}
      <span>{t(`tutorial.sample.${type}.word`)[letterIndex]}</span>
      {t(`tutorial.sample.${type}.desc.end`)}
    </IonNote>
  )
}

export default SampleDesc
