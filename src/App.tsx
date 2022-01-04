import React from 'react'
import './AppStyles.tsx'
import { ContainerWrapper } from './AppStyles'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
function App() {
  return (
    // <ContainerWrapper>
    <>
      <Navbar />
      <Hero />
      <div className='bg-peach-100 h-10'></div>
      {/* </ContainerWrapper> */}
    </>
  )
}

export default App
