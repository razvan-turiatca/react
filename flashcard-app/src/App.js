import React, { useState, useEffect } from 'react'
import { FlashcardList } from './FlashcardList'
import './app.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  // this function will decode the html encoded elements from the API
  const decodeString = (str) => {
    const textArea = document.createElement('textArea')
    textArea.innerHTML = str
    return textArea.value
  }
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      setFlashcards(
        res.data.results.map((item, index) => {
          const answer = item.correct_answer
          const options = [
            ...item.incorrect_answers.map((a) => decodeString(a)),

            decodeString(answer),
          ]
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(item.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          }
        }),
      )
      console.log(res.data)
    })
  }, [])

  return <FlashcardList flashcards={flashcards} />
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+2?',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: ['Answer2', 'Answer3', 'Answer4', 'Answer5'],
  },
  {
    id: 3,
    question: 'Question 3',
    answer: '4',
    options: ['Answer2', 'Answer3', 'Answer4', 'Answer5'],
  },
]

export default App
