import QRCode from 'qrcode'
import { useState, useEffect } from 'react'

export const QrCode = () => {
  const [qr, setQr] = useState<string>()

  useEffect(() => {
    QRCode.toDataURL(window.location.href).then(setQr)
  }, [])

  return (
    <>
      <img src={qr} />
      {''}
    </>
  )
}
