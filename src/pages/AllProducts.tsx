import React, { useState, useEffect } from 'react'
import { getProducts, Product } from '../app/api'
import ProductItem from '../components/ProductItem/ProductItem'
import { NavLink } from 'react-router-dom'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])
  console.log(products)
  console.log(products.length)
  return (
    <ContainerWrapper>
      {/* TODO: pages */}
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Our Products</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
        </TitleWrapper>
      </PageTitleWrapper>
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

export default AllProducts
