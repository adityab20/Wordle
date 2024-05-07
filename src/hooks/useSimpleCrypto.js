const key = 'keyforsimplexor'

function useSimpleCrypto() {
  function encrypt(text) {
    let encryptedText = ''
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      encryptedText += String.fromCharCode(charCode)
    }
    return btoa(encodeURIComponent(encryptedText))
  }

  function decrypt(encryptedText) {
    const decodedText = decodeURIComponent(atob(encryptedText))
    let decryptedText = ''
    for (let i = 0; i < decodedText.length; i++) {
      const charCode = decodedText.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      decryptedText += String.fromCharCode(charCode)
    }
    return decryptedText
  }

  return { encrypt, decrypt }
}

export default useSimpleCrypto
