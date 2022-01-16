import React from 'react'
import { Product } from '../../app/api'

interface ProductProps {
  product: Product
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div
      key={product.id}
      className='bg-white rounded overflow-hidden shadow  hover:shadow-lg cursor-pointer w-64 sm:w-72 md:w-full'
    >
      <img
        src={product?.api_featured_image}
        alt='beauty'
        className='w-full h-72 object-cover'
      />
      <div className='text-center'>
        <p className='p-2 text-ellipsis overflow-hidden whitespace-nowrap'>
          {product.name}
        </p>
        <p className='py-2'>${Number(product?.price).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductItem
