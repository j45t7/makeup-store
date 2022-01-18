import { useParams, useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { addToCart } from '../../store/cartSlice'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
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
            {/* <div className='flex gap-4'> */}
            {/* <div className='flex'>
                <input
                  className='w-14 h-14 focus:outline-none leading-6 p-0 m-0 pl-6 border-solid border-2'
                  type='number'
                  min='1'
                  max='9'
                  step='1'
                  value={product?.quantity}
                  onChange={handleChange}
                />
                <div className='grid gap-0'>
                  <button
                    onClick={() => dispatch(addToCart(product!))}
                    className='text-base font-bold text-ash border-2 border-solid w-6'
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(product!))}
                    className='text-base font-bold text-ash border-2 border-solid'
                  >
                    -
                  </button>
                </div>
              </div> */}
            <AddToCartButton onClick={() => dispatch(addToCart(product!))}>
              Add to Cart
            </AddToCartButton>
            {/* </div> */}
            {/* <div className='pt-5'> */}
            <BackToProductsButton>Back To Product List</BackToProductsButton>
            {/* </div> */}
          </ProductWrapper>
        </GridWrapper>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default SingleProduct
