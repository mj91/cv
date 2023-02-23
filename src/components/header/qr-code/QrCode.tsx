import QRCode from 'qrcode'
import { useState, useEffect } from 'react'

export const QrCode = () => {
  const [qr, setQr] = useState<string>()

  useEffect(() => {
    QRCode.toDataURL('http://192.168.1.109:3000').then(setQr)
  }, [])

  return (
    <>
      <img src={qr} />
      {''}
    </>
  )
}
