import React from 'react'
import { useNavigate } from 'react-router-dom'
import { OrangeButton } from '../../GlobalStyles/GlobalStyles'
import { CartWrapper, CartMessage } from './EmptyCartStyles'
const EmptyCart = () => {
  const navigate = useNavigate()

  const handleBackToProductList = () => {
    navigate('/products')
  }
  return (
    <CartWrapper>
      <CartMessage>Your Cart is currently empty.</CartMessage>
      <OrangeButton onClick={handleBackToProductList}>
        Return to shop
      </OrangeButton>
    </CartWrapper>
  )
}

export default EmptyCart
