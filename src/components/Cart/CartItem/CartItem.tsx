import React from 'react'
import { XIcon } from '@heroicons/react/outline'

import { useAppDispatch } from '../../../hooks/hooks'
import { Product } from '../../../app/api'
import {
  removeAllFromCart,
  addToCart,
  removeFromCart,
} from '../../../store/cartSlice'
import {
  Row,
  Cell,
  CloseIcon,
  ImageWrapper,
  Image,
  ProductName,
  ProductPrice,
  ProductQuantity,
  QuantityInput,
  QuantityButtonWrapper,
  QuantityButton,
  ProductTotalPrice,
} from './CartItemStyles'

interface ChildProps {
  product: Product
}

const CartItem: React.FC<ChildProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {}
  return (
    <Row>
      <Cell>
        <CloseIcon onClick={() => dispatch(removeAllFromCart(product))}>
          <XIcon />
        </CloseIcon>
      </Cell>
      <Cell>
        <ImageWrapper>
          <Image src={product?.api_featured_image} alt='makeup product' />
        </ImageWrapper>
        <ProductName>{product?.name}</ProductName>
      </Cell>
      <Cell>
        <ProductPrice>${Number(product.price).toFixed(2)}</ProductPrice>
      </Cell>
      <Cell>
        {/* seperate component */}
        <ProductQuantity>
          <QuantityInput
            type='number'
            min='1'
            max='9'
            step='1'
            value={product?.quantity}
            onChange={handleChange}
          />
          <QuantityButtonWrapper>
            <QuantityButton onClick={() => dispatch(addToCart(product!))}>
              +
            </QuantityButton>
            <QuantityButton onClick={() => dispatch(removeFromCart(product!))}>
              -
            </QuantityButton>
          </QuantityButtonWrapper>
        </ProductQuantity>
      </Cell>
      <Cell className=''>
        <ProductTotalPrice>${product.total_price.toFixed(2)}</ProductTotalPrice>
      </Cell>
    </Row>
  )
}

export default CartItem
