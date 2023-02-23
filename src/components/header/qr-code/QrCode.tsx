import { useLanguage } from 'contexts/language'
import QRCode from 'qrcode'
import { useState, useEffect } from 'react'

export const QrCode = () => {
  const { language } = useLanguage()
  const [qr, setQr] = useState<string>()

  useEffect(() => {
    QRCode.toDataURL(window.location.href).then(setQr)
  }, [language])

  return (
    <>
      <img src={qr} />
      {''}
    </>
  )
}
