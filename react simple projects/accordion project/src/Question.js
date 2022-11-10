import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ question }) => {
  const { id, title, info } = question
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  )
}

export default Question
