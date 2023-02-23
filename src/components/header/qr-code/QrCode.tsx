import { useLanguage } from 'contexts/language'
import QRCode from 'qrcode'
import { useState, useEffect, useCallback } from 'react'

export const QrCode = () => {
  const [qr, setQr] = useState<string>()
  const generateQrCode = useCallback(async () => {
    setQr(await QRCode.toDataURL(window.location.href))
  }, [])

  useEffect(() => {
    addEventListener('beforeprint', generateQrCode)
    return () => removeEventListener('beforeprint', generateQrCode)
  }, [generateQrCode])

  return (
    <>
      <img src={qr} />
      {''}
    </>
  )
}
