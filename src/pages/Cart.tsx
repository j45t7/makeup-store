import React from 'react'
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

const Cart = () => {
  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Cart</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
          {/* <EmptyCart /> */}
          <ProductCart />
        </TitleWrapper>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default Cart
