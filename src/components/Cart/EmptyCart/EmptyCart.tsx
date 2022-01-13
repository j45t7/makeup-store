import React from 'react'
import { OrangeButton } from '../../GlobalStyles/GlobalStyles'
const EmptyCart = () => {
  return (
    <div className='text-center p-3 h-96 mt-20'>
      <p className='uppercase text-2xl text-ash border-2 p-10 mb-14 tracking-widest'>
        Your Cart is currently empty.
      </p>

      <OrangeButton>Return to shop</OrangeButton>
    </div>
  )
}

export default EmptyCart
