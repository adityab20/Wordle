import { useState } from 'react'

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null)

  async function copy(text) {
    if (!navigator?.clipboard) {
      console.warn('clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn('copy failed', error)
      setCopiedText(null)
      return false
    }
  }

  return { copiedText, copy }
}

export default useCopyToClipboard
