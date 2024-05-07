import { useBoardStore, useStatisticsStore } from 'src/store'

function ProgressBar({ value }) {
  const mode = useBoardStore((state) => state.mode)
  const played = useStatisticsStore((state) => state[mode].played)
  const fontSize = 16
  const percents = Math.round((value / played) * 100)

  return (
    <div className="progress-bar">
      <span>{percents < fontSize && percents}</span>
      <div className="progress-bar--fill" style={{ height: `${percents}%` }}>
        {percents >= fontSize && percents}
      </div>
    </div>
  )
}

export default ProgressBar
