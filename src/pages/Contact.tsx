import React, { useEffect } from 'react'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'

import image from '../assets/beauty1.jpeg'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }
  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>Contact</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adip</Subtitle>
        </TitleWrapper>
        <div className='p-3 md:p-20 grid md:grid-cols-2 gap-4'>
          <form>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='form-group mb-6'>
                <input
                  className=' focus:outline-none text-ash text-base border-ash border-2 p-3 w-full'
                  type='text'
                  placeholder='Your Name'
                />
              </div>
              <div className='form-group mb-6'>
                <input
                  className='focus:outline-none text-ash text-base border-ash border-2 p-3 w-full'
                  type='text'
                  placeholder='Your Email'
                />
              </div>
            </div>
            <div className='form-group mb-6'>
              <textarea
                rows={6}
                cols={50}
                className='focus:outline-none text-ash text-base border-ash border-2 p-3 w-full'
                placeholder='Your Message'
              />
            </div>
            <button
              onClick={handleSubmit}
              type='submit'
              className='text-sand-100 bg-peach-100 hover:bg-peach-200
                p-3
                px-4
                w-32
                cursor-pointer
                shadow'
            >
              Send
            </button>
          </form>
          <div className='grid grid-cols-1 gap-4'>
            <img
              src={image}
              alt='makeup'
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      </PageTitleWrapper>
      <div className='p-3 py-5lg:py-20 lg:px-48'>
        <h3 className='text-2xl md:text-4xl font-bold text-peach-200 p-6 font-body uppercase text-center'>
          Always with you
        </h3>
        <p className='p-2 pb-10 leading-8 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam
          voluptatibus laborum? Amet dicta molestiae voluptatibus dolor officia
          ad quae at suscipit aut cumque sunt maiores aliquam, itaque culpa
          ducimus, eligendi reprehenderit vero necessitatibus. Doloremque,
          adipisci at!
        </p>
      </div>
    </ContainerWrapper>
  )
}

export default Contact
