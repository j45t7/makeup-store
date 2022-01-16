import React from 'react'
import { XIcon } from '@heroicons/react/outline'

import { Product } from '../../../app/api'
import {
  removeAllFromCart,
  addToCart,
  removeFromCart,
} from '../../../store/cartSlice'
import { useAppDispatch } from '../../../hooks/hooks'

interface ChildProps {
  product: Product
}

const CartItem: React.FC<ChildProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {}
  return (
    <tr className='border-b border-ash md:p-3'>
      <td>
        <button onClick={() => dispatch(removeAllFromCart(product))}>
          <XIcon className='w-4 md:w-6 cursor-pointer' />
        </button>
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
        ${Number(product.price).toFixed(2)}
      </td>
      <td className='text-sm md:text-base'>
        <div className='flex justify-center'>
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
        </div>
      </td>
      <td className='text-sm md:text-base'>
        ${product.total_price.toFixed(2)}
      </td>
    </tr>
  )
}

export default CartItem
