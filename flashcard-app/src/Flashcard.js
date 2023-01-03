import React, { useState } from 'react'

export const Flashcard = ({ id, question, answer, options }) => {
  const [flip, setFlip] = useState(false)
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <h3>question</h3>
        <div className="flashcard-option">
          {options.map((option, i) => {
            return (
              <div className="flashcard-option" key={i}>
                {option}
              </div>
            )
          })}
        </div>
      </div>

      <div className="back">{answer}</div>
    </div>
  )
}
