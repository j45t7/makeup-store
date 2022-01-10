import React from 'react'

interface ProductProps {
  product: {
    id: number
    name: string
    brand: string
    price: string
    description: string
    image_link: string
    api_featured_image: string
    category: string
    tag_list: string[]
    product_type: string
  }
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const productPrice = product?.price === '0.0' ? '5.5' : product?.price

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
        <p className='py-2'>
          $
          {`${
            productPrice.length !== undefined && productPrice.length <= 3
              ? productPrice.padEnd(4, '0')
              : productPrice.padEnd(5, '0')
          }`}
        </p>
      </div>
    </div>
  )
}

export default ProductItem
