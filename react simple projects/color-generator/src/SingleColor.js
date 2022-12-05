import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, hexValue, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexColor = `#${hexValue}`

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
