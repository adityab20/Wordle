import { useEffect } from 'react'

const useKeyboard = (callback, options) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { detectKeys = [] } = options
      const key = event.key

      if (detectKeys.includes(key) || detectKeys.includes(event.keyCode)) {
        callback(key)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [callback, options])
}

export default useKeyboard
