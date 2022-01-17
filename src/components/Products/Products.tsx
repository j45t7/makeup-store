import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getProducts } from '../../app/api'
import ProductItem from '../ProductItem/ProductItem'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { OrangeButton } from '../GlobalStyles/GlobalStyles'
import { receivedProducts } from '../../store/productsSlice'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
} from '../GlobalStyles/GlobalStyles'

const Products = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleBackToProductList = () => {
    navigate('/products')
  }

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products))
    })
  }, [dispatch])

  let products = useAppSelector((state) => state.products.products)
  products = products.slice(0, 10)

  return (
    <ContainerWrapper>
      <TitleWrapper>
        <Title>Popular Products</Title>
        <Subtitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Subtitle>
      </TitleWrapper>
      <ProductsWrapper>
        {products.map((product) => (
          <NavLink key={product.id} to={`/products/${product.id}`}>
            <ProductItem product={product} />
          </NavLink>
        ))}
      </ProductsWrapper>
      <div className='text-center mb-28'>
        <OrangeButton onClick={handleBackToProductList}>
          See more products
        </OrangeButton>
      </div>
    </ContainerWrapper>
  )
}

export default Products
