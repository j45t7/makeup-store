import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs'
import { ContainerWrapper } from './FooterStyles'

const Footer = () => {
  return (
    <div className='bg-green text-sand-100  rounded-tl-large pb-10'>
      <ContainerWrapper>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='p-7 pl-10 pt-10'>
            <h1 className='font-title text-5xl py-5 text-peach-100'>
              Green Beauty
            </h1>
            <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            </p>
            <div className='flex p-5 gap-4'>
              <BsFacebook className='text-3xl cursor-pointer text-peach-100' />
              <BsInstagram className='text-3xl cursor-pointer text-peach-100' />
              <BsPinterest className='text-3xl cursor-pointer text-peach-100' />
            </div>
          </div>
          <div className='p-7 pl-10 md:pl-14 mt-10'>
            <h3 className='font-body text-xl py-5 uppercase text-peach-100'>
              Contact
            </h3>
            <p className='py-2'>Tsutenkaku 1-2-3</p>
            <p className='py-2'>Osaka, Japan </p>
            <p className='py-2'>green@beauty.com</p>
            <p className='py-2'>Tel: (80) 123-456-789</p>
          </div>
          <div className='p-7 pl-10 mt-10'>
            <h3 className='font-body text-xl py-5 uppercase text-peach-100'>
              About Us
            </h3>
            <p className='py-2'>Our Service</p>
            <p className='py-2'>Our Team</p>
          </div>
          <div className='p-7 pl-10 mt-10'>
            <h3 className='font-body text-xl py-5 uppercase text-peach-100'>
              Help
            </h3>
            <p className='py-2'>Shipping</p>
            <p className='py-2'>Discounts</p>
            <p className='py-2'>Returns</p>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  )
}

export default Footer
