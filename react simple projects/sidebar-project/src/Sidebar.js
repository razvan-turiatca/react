import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext, AppContext } from './context'
import { social, links } from './data'

const Sidebar = () => {
  const data = useGlobalContext()
  const { showSidebar, closeSidebar } = data
  return (
    <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <h3>Logo</h3>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link

          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link

          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
