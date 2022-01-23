import React, { useEffect } from 'react'
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart'
import ProductCart from '../components/Cart/ProductCart/ProductCart'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  OrangeButton,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = useAppSelector((state) => state.cart.cartItems)
  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Cart</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
          {products.length === 0 ? <EmptyCart /> : <ProductCart />}
        </TitleWrapper>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default Cart
