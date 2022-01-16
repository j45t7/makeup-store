import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { addToCart, removeFromCart } from '../../store/cartSlice'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  PageTitleWrapper,
} from '../GlobalStyles/GlobalStyles'

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
        <div className='grid md:grid-cols-2 gap-4 p-5 pt-10'>
          <div className='grid grid-cols-1 gap-4 place-items-center'>
            <img
              src={product?.api_featured_image}
              alt='makeup item'
              className='max-h-40 md:max-h-image object-cover mb-3'
            />
          </div>
          <div className='grid grid-cols-1 gap-4 h-max'>
            <h2 className='text-2xl lg:text-3xl uppercase font-bold tracking-widest'>
              {product?.name}
            </h2>
            <h3 className='text-sm lg:text-base text-green'>
              Brand: {product?.brand}
            </h3>
            <p className='text-3xl lg:text-4xl text-ash'>
              $
              {`${
                productPrice?.length !== undefined && productPrice?.length <= 3
                  ? productPrice?.padEnd(4, '0')
                  : productPrice?.padEnd(5, '0')
              }`}
            </p>
            <p className='text-sm lg:text-base text-ash leading-6'>
              {product?.description}
            </p>
            <div className='flex gap-4'>
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
              <button
                onClick={() => dispatch(addToCart(product!))}
                className='text-sand-100 bg-peach-100 hover:bg-peach-200
              p-3
              px-4
              cursor-pointer
              shadow md: h-14 w-32 grid-span-1'
              >
                Add to Cart
              </button>
            </div>
            <div className='pt-5'>
              <button
                onClick={handleBackToProductList}
                className='text-sand-100 bg-green hover:bg-peach-200
              p-3
              px-4
              cursor-pointer
              shadow md: h-14 grid-span-1 uppercase'
              >
                Back To Product List
              </button>
            </div>
          </div>
        </div>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default SingleProduct
