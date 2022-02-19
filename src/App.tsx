import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './AppStyles.tsx'

import SingleProduct from './components/SingleProduct/SingleProduct'
import About from './pages/About'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<AllProducts />}></Route>
          <Route path='/products/:id' element={<SingleProduct />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
