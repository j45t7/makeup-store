import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleProduct, Product } from '../../../app/api'
import { XIcon } from '@heroicons/react/outline'
import CartItem from '../CartItem/CartItem'
import Cart from '../../../pages/Cart'

const ProductCart = () => {
  const navigate = useNavigate()
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
  const handleBack = () => {
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
            <CartItem />
            <CartItem />
          </tbody>
        </table>
      </div>
      <div className='grid md:grid-cols-2 p-10 md:p-20 '>
        <h3 className='col-span-1 text-center md:text-left uppercase text-peach-200 font-bold text-xl md:text-2xl'>
          Cart Total
        </h3>
        <h3 className='col-span-1 text-center text-xl md:text-2xl font-bold'>
          $1000
        </h3>
      </div>
      <div className='text-center mb-5'>
        <button
          // onClick={handleBack}
          className='text-sand-100 bg-peach-100 hover:bg-peach-200
        p-3
        px-4
        cursor-pointer
        shadow md: h-14 grid-span-1 uppercase '
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}

export default ProductCart
