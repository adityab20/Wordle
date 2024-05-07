import Settings from './settings/Settings'
import Statistics from './statistics/Statistics'
import Tutorial from './tutorial/Tutorial'
import Hints from './hints/Hints'
import Win from './win/Win'
import Defeat from './defeat/Defeat'
import './modals.scss'

function Modals() {
  return (
    <>
      <Settings />
      <Statistics />
      <Tutorial />
      <Hints />
      <Win />
      <Defeat />
    </>
  )
}

export default Modals
