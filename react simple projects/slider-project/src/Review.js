import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const Review = ({ reviews, value, prevSlide, nextSlide }) => {
  return (
    <div className="section-center">
      {reviews.map((review, index) => {
        const { id, image, name, title, quote } = review
        console.log(name)
        let slide = 'nextSlide'
        if (index == value) {
          slide = 'activeSlide'
        }
        if (index < value) {
          slide = 'lastSlide'
        }
        if (value == 0 && index == reviews.length - 1) {
          slide = 'lastSlide'
        }

        return (
          <article key={id} className={slide}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p>{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
        )
      })}
      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Review
