import React, { useState, useEffect, useRef } from 'react'

export const Flashcard = ({ id, question, answer, options }) => {
  const [flip, setFlip] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  const setMaxHeight = () => {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight, backHeight, 100))
  }

  // using this useEffect in order to change the card's height according to the height its content takes
  useEffect(setMaxHeight, [question, answer, options])

  //using this useEffect to adjust the card's height again, this time according to the changes in page size
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)

    //this return will be called whenever our componnent destroys itself
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <p>{question}</p>
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

      <div className="back" ref={backEl}>
        {answer}
      </div>
    </div>
  )
}
