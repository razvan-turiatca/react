import React from 'react'

export const Flashcard = ({ id, question, answer, options }) => {
  return (
    <div key={id}>
      <p>{question}</p>
      <ul>
        {options.map((answer, i) => {
          return <li key={i}>{answer}</li>
        })}
      </ul>
    </div>
  )
}
