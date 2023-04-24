import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Sales from './Sales'

const Homepage = () => {
  return (
    <div className='HomePage__container'>
      <Header />
      <Banner />
      <Sales />
    </div>
  )
}

export default Homepage
