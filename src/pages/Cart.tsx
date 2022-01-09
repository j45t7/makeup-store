import React from 'react'
import EmptyCart from '../components/EmptyCart/EmptyCart'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  OrangeButton,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'

const Cart = () => {
  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Cart</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
          <EmptyCart />
        </TitleWrapper>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default Cart
