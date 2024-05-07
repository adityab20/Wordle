import classNames from 'classnames'
import { useBoardStore } from 'src/store'

function Cell({ letter, status }) {
  const mode = useBoardStore((state) => state.mode)
  const gameover = useBoardStore((state) => state.daily.gameover)
  const isDailyMode = mode === 'daily'
  const isDisabled = isDailyMode && gameover

  return (
    <div disabled={isDisabled} className={classNames('board-cell', status)}>
      {letter}
    </div>
  )
}

export default Cell
