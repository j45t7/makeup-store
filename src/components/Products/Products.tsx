import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getProducts, Product } from '../../app/api'
import ProductItem from '../ProductItem/ProductItem'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
} from '../GlobalStyles/GlobalStyles'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts().then((products) => {
      products.length = 10
      setProducts(products)
    })
  }, [])
  console.log(products)
  console.log(products.length)
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
    </ContainerWrapper>
  )
}

export default Products
