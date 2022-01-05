import React, { useState, useEffect } from 'react'
import { getProducts, Product } from '../../app/api'
import { ContainerWrapper } from './ProductsStyles'
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
      <h1 className='text-2xl md:text-4xl font-bold text-center text-peach-200 p-6 pt-20 font-body uppercase'>
        Popular Products
      </h1>
      <p className='text-green text-center pb-6'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-5 py-12'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded overflow-hidden shadow  hover:shadow-lg cursor-pointer'
          >
            <img
              src={product?.api_featured_image}
              alt='beauty'
              className='w-full h-72 object-cover'
            />
            <div className='text-center'>
              <p className='p-2'>{product.name}</p>
              <p className='p-2'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerWrapper>
  )
}

export default Products
