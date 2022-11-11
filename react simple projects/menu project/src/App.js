import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const categories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = (cat) => {
    if (cat === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === cat)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1 className="title">our menu</h1>
          <div className="underline"></div>
        </div>
      </section>

      <Categories categories={categories} filterItems={filterItems} />

      <Menu menuItems={menuItems} />
    </main>
  )
}

export default App
