import React, { useState, useEffect, useRef } from 'react'
import { FlashcardList } from './FlashcardList'
import './app.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  // this function will decode the html encoded elements from the API
  const decodeString = (str) => {
    const textArea = document.createElement('textArea')
    textArea.innerHTML = str
    return textArea.value
  }

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then((res) => {
      setCategories(res.data.trivia_categories)
    })
  }, [])

  useEffect(() => {}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .get('https://opentdb.com/api.php', {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((item, index) => {
            const answer = decodeString(item.correct_answer)
            const options = [
              ...item.incorrect_answers.map((a) => decodeString(a)),

              answer,
            ]
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(item.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            }
          }),
        )
      })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              const { id, name } = category
              return (
                <option value={id} key={id}>
                  {' '}
                  {name}{' '}
                </option>
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className="form-group">
          <button className="button">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  )
}

export default App
