import React, { useState, useEffect } from 'react'

import Title from './Title'
import Review from './Review'
import data from './data'
function App() {
  const [reviews, setReviews] = useState(data)
  const [value, setValue] = useState(0)

  const prevSlide = () => {
    value == 0 ? setValue(reviews.length - 1) : setValue(value - 1)
  }

  const nextSlide = () => {
    value == reviews.length - 1 ? setValue(0) : setValue(value + 1)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(nextSlide)
    }, 3000)
    return () => clearInterval(interval)
  }, [value])

  return (
    <section>
      <Title />
      <Review
        reviews={reviews}
        value={value}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </section>
  )
}

export default App
