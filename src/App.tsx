import React from 'react'
import './App.css'
import { ShoppingBagIcon } from '@heroicons/react/outline'

function App() {
  return (
    <div className='container mx-auto'>
      <nav className='bg-100-sand p-6 w-full md:flex justify-between align-middle'>
        <div>
          <h1 className='text-3xl font-bold text-green leading-loose'>Shop</h1>
        </div>
        <div className='flex'>
          <ul className='flex flex-row mr-5'>
            <li className='p-3 leading-loose cursor-pointer'>Home</li>
            <li className='p-3 leading-loose cursor-pointer'>Products</li>
            <li className='p-3 leading-loose cursor-pointer'>About</li>
            <li className='p-3 leading-loose cursor-pointer'>Contact</li>
          </ul>
          <div className='relative cursor-pointer'>
            <ShoppingBagIcon className='text-green h-8 w-8 m-3' />
            <span className='absolute rounded-full bg-peach h-6 w-6 text-center top-1 right-0 text-white text-sm leading-6'>
              3
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
