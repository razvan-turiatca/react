import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState()
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#e389b9').all(10))

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      setError(false)
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={`${error ? 'error' : null}`}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              hexValue={color.hex}
              index={index}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
