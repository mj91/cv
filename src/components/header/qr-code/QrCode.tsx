import QRCode from 'qrcode'
import { useState, useEffect, useCallback } from 'react'

export const QrCode = () => {
  const [qr, setQr] = useState<string>()

  const generateQrCode = useCallback(async () => {
    const url = new URL(window.location.href)
    url.searchParams.set('utm_medium', 'qr')
    setQr(await QRCode.toDataURL(url.toString()))
  }, [])

  useEffect(() => {
    generateQrCode()
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
