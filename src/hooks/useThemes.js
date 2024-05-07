import { useEffect } from 'react'
import { useSettingsStore } from 'src/store'

function useThemes() {
  const theme = useSettingsStore((state) => state.theme)

  useEffect(() => {
    document.body.className = theme
  }, [theme])
}

export default useThemes
