import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleProduct, Product } from '../../../app/api'
import { XIcon } from '@heroicons/react/outline'

const CartItem = () => {
  const { id } = useParams<ProductId>()
  const [product, setProduct] = useState<Product>()

  type ProductId = {
    id: any
  }

  useEffect(() => {
    getSingleProduct(1048).then((product) => {
      setProduct(product)
    })
  }, [id])
  console.log(product)
  console.log(id)

  const productPrice = product?.price === '0.0' ? '5.5' : product?.price
  const handleChange = () => {}
  return (
    <tr className='border-b border-ash md:p-3'>
      <td>
        <XIcon className='w-4 md:w-6 cursor-pointer' />
      </td>
      <td>
        <span className='hidden md:block'>
          <img
            src={product?.api_featured_image}
            alt='makeup product'
            className='w-40 p-3 m-auto'
          />
        </span>
        <p className='text-sm md:text-base md:hidden'>{product?.name}</p>
      </td>
      <td className='p-6 text-sm md:text-base'>
        $
        {`${
          productPrice?.length !== undefined && productPrice?.length <= 3
            ? productPrice?.padEnd(4, '0')
            : productPrice?.padEnd(5, '0')
        }`}
      </td>
      <td className='text-sm md:text-base'>
        <div className='flex justify-center'>
          <input
            className='w-10 h-14 md:w-14 md:h-14 focus:outline-none leading-6 p-0 m-0 border-solid border-2 text-center'
            type='number'
            min='1'
            max='9'
            step='1'
            value='1'
            onChange={handleChange}
          />
          <div className='grid gap-0'>
            <button className='text-base font-bold text-ash border-2 border-solid w-6'>
              +
            </button>
            <button className='text-base font-bold text-ash border-2 border-solid'>
              -
            </button>
          </div>
        </div>
      </td>
      <td className='text-sm md:text-base'>$961</td>
    </tr>
  )
}

export default CartItem
