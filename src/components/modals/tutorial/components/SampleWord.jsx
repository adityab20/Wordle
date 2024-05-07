import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { Stack } from 'src/components/ui'

function SampleWord({ type }) {
  const { t } = useTranslation()
  const word = t(`tutorial.sample.${type}.word`)

  return (
    <Stack row x="center" className="sample-word">
      {word.split('').map((letter, i) => (
        <span
          key={i}
          className={classNames({
            correct: type === 'correct' && i === 0,
            present: type === 'present' && i === 2,
            absent: type === 'absent' && i === 3
          })}
        >
          {letter}
        </span>
      ))}
    </Stack>
  )
}

export default SampleWord
