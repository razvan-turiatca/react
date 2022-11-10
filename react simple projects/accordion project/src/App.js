import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <section className="info">
          {questions.map((question) => {
            const { id } = question
            return <SingleQuestion key={id} question={question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
