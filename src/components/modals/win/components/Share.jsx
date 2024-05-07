import { IonGrid, IonRow, IonButtons, IonButton, IonIcon, IonText } from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { logoTwitter } from 'ionicons/icons'
import { ShareSvg, RedditSvg, TelegramSvg } from 'src/assets/icons'
import { useClipboard, useSimpleCrypto } from 'src/hooks'
import { useBoardStore, useSettingsStore } from 'src/store'
import Copied from 'src/components/toasts/copied/Copied'

const hostname = window.location.hostname
const path = import.meta.env.VITE_BASE_URL

function Share() {
  const { t } = useTranslation()
  const { copy } = useClipboard()
  const { encrypt } = useSimpleCrypto()
  const tries = useBoardStore((state) => state.tries)
  const { letters, boardSize, row, answer } = useBoardStore((state) => state[state.mode])
  const langValue = useSettingsStore((state) => state.language.value)
  const board = makeEmojiBoard(boardSize)
  const text = `${t('win.share.statement', { row: row - 1, tries })}%0A%0A${board}%0A%0A${t('win.share.question')}`
  const source = `https://${hostname}${path}?challenge=${encrypt(answer)}%26lang=${langValue}`
  
  const share = [
    {
      target: 'copy',
      icon: ShareSvg,
      url: `${text.replaceAll('%0A', '\n')}\n${source.replaceAll('%26', '&')}`
    },
    {
      target: 'twitter',
      icon: logoTwitter,
      url: `https://www.twitter.com/share?text=${text}%0A${source}`
    },
    {
      target: 'reddit',
      icon: RedditSvg,
      url: `https://www.reddit.com/submit?title=Wordle&text=${text.replaceAll('%0A', '%20%20%0A')}%20%20%0A${source}`
    },
    {
      target: 'telegram',
      icon: TelegramSvg,
      url: `https://t.me/share/url?text=${text}%0A${source}&url=%20`
    }
  ]

  function convertToEmoji(letters) {
    const emoji = letters.map(({ status }) => {
      const pattern = { correct: '🟩', present: '🟧', absent: '⬜️' }
      const res = pattern[status]
      return res
    })
    return emoji
  }

  function makeEmojiBoard(chunkSize) {
    const emoji = convertToEmoji(letters)
    const chunked = emoji.reduce((acc, current, i) => {
      const j = Math.floor(i / chunkSize)
      acc[j] ??= ''
      acc[j] += current
      return acc
    }, [])
    const board = chunked.join('%0A')
    return board
  }

  function openInNewTab(url) {
    window.open(url, '_blank', 'noreferrer')
  }

  function onClickShareBtn(target, url) {
    target === 'copy' ? copy(url) : openInNewTab(url)
  }

  return (
    <IonGrid>
      <IonRow className="ion-justify-content-center">
        <IonText color="primary">{t('win.share.title')}</IonText>
      </IonRow>
      <IonRow>
        <Copied />
        <IonButtons>
          {share.map(({ target, icon, url }) => (
            <IonButton
              key={target}
              id={`open-${target}-toast`}
              fill="clear"
              onClick={() => onClickShareBtn(target, url)}
            >
              <IonIcon icon={icon} slot="icon-only" className={`logo-${target}`} />
            </IonButton>
          ))}
        </IonButtons>
      </IonRow>
    </IonGrid>
  )
}

export default Share
