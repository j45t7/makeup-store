import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Hero />
      <Products />
    </div>
  )
}

export default Home
