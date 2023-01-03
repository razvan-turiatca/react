import React from 'react'
import { Flashcard } from './Flashcard'

export const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        const { id, question, answer, options } = flashcard

        return <Flashcard key={id} {...flashcard} />
      })}
    </div>
  )
}
