import React from 'react'
import { useNavigate } from 'react-router-dom'
import { OrangeButton } from '../../GlobalStyles/GlobalStyles'
const EmptyCart = () => {
  const navigate = useNavigate()

  const handleBackToProductList = () => {
    navigate('/products')
  }
  return (
    <div className='text-center p-3 h-96 mt-20'>
      <p className='uppercase text-2xl text-ash border-2 p-10 mb-14 tracking-widest'>
        Your Cart is currently empty.
      </p>

      <OrangeButton onClick={handleBackToProductList}>
        Return to shop
      </OrangeButton>
    </div>
  )
}

export default EmptyCart
