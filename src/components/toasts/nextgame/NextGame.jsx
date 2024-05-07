import { IonToast } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { timeOutline } from 'ionicons/icons'
import { useMidnightTimer } from 'src/hooks'
import { useBoardStore, useModalsStore } from 'src/store'
import './nextgame.scss'

function NextGame() {
  const { t } = useTranslation()
  const timer = useMidnightTimer()
  const mode = useBoardStore((state) => state.mode)
  const gameover = useBoardStore((state) => state.daily.gameover)
  const [win, defeat] = useModalsStore((state) => [state.win, state.defeat])
  const isDailyMode = mode === 'daily'
  const nextgame = isDailyMode && gameover && !win && !defeat

  return (
    <IonToast
      isOpen={nextgame}
      icon={timeOutline}
      message={t('nextGame', { timer })}
      position="top"
      className="ion-text-center toast-next-game"
    />
  )
}

export default NextGame
