import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  console.log(typeof count)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount <= 0) {
      amount = 1
    }
    if (amount > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h3 className="title">tired of boring lorem ipsum?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className="btn">generate</button>
      </form>
      {text.map((item, i) => {
        return (
          <article key={i} className="lorem-text">
            {item}
          </article>
        )
      })}
    </section>
  )
}

export default App
