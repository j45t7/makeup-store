import React, { useState, useEffect } from 'react'
import { getProducts, Product } from './app/api'
import './AppStyles.tsx'
import { ContainerWrapper } from './AppStyles'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </>
  )
}

export default App
