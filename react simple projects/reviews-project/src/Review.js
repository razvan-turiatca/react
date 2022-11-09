import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    } else if (number < 0) {
      return people.length - 1
    } else {
      return number
    }
  }
  const nextReview = () => {
    setIndex(checkNumber(index + 1))
  }
  const prevReview = () => {
    setIndex(checkNumber(index - 1))
  }

  const randomReview = () => {
    let rand = Math.floor(Math.random() * people.length)
    if (rand === index) {
      rand = index + 1
    }

    setIndex(checkNumber(rand))
  }

  return (
    <article className="review">
      <div key={id} className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  )
}

export default Review
