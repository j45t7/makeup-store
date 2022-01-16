import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { useAppSelector } from '../../../hooks/hooks'

const ProductCart = () => {
  const products = useAppSelector((state) => state.cart.cartItems)
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)

  const navigate = useNavigate()

  const handleBackToProductList = () => {
    navigate('/products')
  }

  return (
    <div>
      <div className='my-10 px-2'>
        <table className='table-fixed border-collapse w-full text-center'>
          <thead className=''>
            <tr className='border-b border-ash'>
              <th className='w-0 p-3 uppercase tracking-widest md:w-2'></th>
              <th className='text-tiny md:text-base p-3 uppercase tracking-widest'>
                Product
              </th>
              <th className='text-tiny md:text-base p-3 uppercase tracking-widest'>
                Price
              </th>
              <th className='text-tiny md:text-base p-3 uppercase tracking-widest'>
                Quantity
              </th>
              <th className='text-tiny md:text-base p-3 uppercase tracking-widest'>
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className='grid md:grid-cols-2 p-10 md:p-20 '>
        <h3 className='col-span-1 text-center md:text-left uppercase text-peach-200 font-bold text-xl md:text-2xl'>
          Cart Total
        </h3>
        <h3 className='col-span-1 text-center text-xl md:text-2xl font-bold'>
          ${totalPrice.toFixed(2)}
        </h3>
      </div>
      <div className='text-center mb-5'>
        <button
          onClick={handleBackToProductList}
          className='text-sand-100 bg-peach-100 hover:bg-peach-200
        p-3
        px-4
        cursor-pointer
        shadow md: h-14 grid-span-1 uppercase '
        >
          Back to product list
        </button>
      </div>
    </div>
  )
}

export default ProductCart
