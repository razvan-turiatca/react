import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  const openSidebar = () => {
    setShowSidebar(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }
  return <AppContext.Provider value={{showModal, showSidebar, openModal, openSidebar, closeModal, closeSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
