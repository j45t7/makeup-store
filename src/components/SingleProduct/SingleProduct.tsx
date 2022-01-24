import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { addToCart } from '../../store/cartSlice'
import {
  ContainerWrapper,
  Title,
  Subtitle,
  PageTitleWrapper,
} from '../GlobalStyles/GlobalStyles'

import {
  GridWrapper,
  ImageWrapper,
  Image,
  ProductWrapper,
  ProductName,
  ProductBrand,
  ProductPrice,
  ProductDescription,
  AddToCartButton,
  BackToProductsButton,
} from './SingleProductStyles'

type ProductId = {
  id: any
}

const SingleProduct = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams<ProductId>()

  let product = useAppSelector((state) =>
    state.products.products.find((item) => item.id === Number(id))
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackToProductList = () => {
    navigate('/products')
  }

  const productPrice = product?.price === '0.0' ? '5.5' : product?.price

  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <Title>Product details</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adip</Subtitle>
        <GridWrapper>
          <ImageWrapper>
            <Image src={product?.api_featured_image} alt='makeup item' />
          </ImageWrapper>
          <ProductWrapper>
            <ProductName>{product?.name}</ProductName>
            <ProductBrand>Brand: {product?.brand}</ProductBrand>
            <ProductPrice>
              $
              {`${
                productPrice?.length !== undefined && productPrice?.length <= 3
                  ? productPrice?.padEnd(4, '0')
                  : productPrice?.padEnd(5, '0')
              }`}
            </ProductPrice>
            <ProductDescription>{product?.description}</ProductDescription>
            <AddToCartButton onClick={() => dispatch(addToCart(product!))}>
              Add to Cart
            </AddToCartButton>
            <BackToProductsButton onClick={handleBackToProductList}>
              Back To Product List
            </BackToProductsButton>
          </ProductWrapper>
        </GridWrapper>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default SingleProduct
