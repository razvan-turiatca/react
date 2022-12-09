import React, { useEffect } from 'react'

const Alert = ({ alert, alertSetting, list }) => {
  // console.log(alert)
  useEffect(() => {
    const timer = setTimeout(() => {
      alertSetting({ ...alert })
    }, 2000)
    return () => clearTimeout(timer)
  }, [list])
  console.log(alert)
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert
