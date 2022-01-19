import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { useAppSelector } from '../../../hooks/hooks'
import { OrangeButton } from '../../GlobalStyles/GlobalStyles'
import {
  ProductListWrapper,
  ProductListTable,
  ProductListTableHead,
  ProductListTableRow,
  FirstHeaderCell,
  HeaderCell,
  TableBody,
  CartTotal,
  CartTitle,
  CartTotalPrice,
  ButtonWrapper,
} from './ProductCartStyles'
const ProductCart = () => {
  const products = useAppSelector((state) => state.cart.cartItems)
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)

  const navigate = useNavigate()

  const handleBackToProductList = () => {
    navigate('/products')
  }

  return (
    <>
      <ProductListWrapper>
        <ProductListTable>
          <ProductListTableHead>
            <ProductListTableRow>
              <FirstHeaderCell></FirstHeaderCell>
              <HeaderCell>Product</HeaderCell>
              <HeaderCell>Price</HeaderCell>
              <HeaderCell>Quantity</HeaderCell>
              <HeaderCell>Subtotal</HeaderCell>
            </ProductListTableRow>
          </ProductListTableHead>
          <TableBody>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </TableBody>
        </ProductListTable>
      </ProductListWrapper>
      <CartTotal>
        <CartTitle>Cart Total</CartTitle>
        <CartTotalPrice>${totalPrice.toFixed(2)}</CartTotalPrice>
      </CartTotal>
      <ButtonWrapper>
        <OrangeButton onClick={handleBackToProductList}>
          Back to product list
        </OrangeButton>
      </ButtonWrapper>
    </>
  )
}

export default ProductCart
