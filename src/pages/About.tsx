import React, { useEffect } from 'react'
import {
  ContainerWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ProductsWrapper,
  PageTitleWrapper,
} from '../components/GlobalStyles/GlobalStyles'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ContainerWrapper>
      <PageTitleWrapper>
        <TitleWrapper>
          <Title>What we offer</Title>
          <Subtitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Subtitle>
        </TitleWrapper>

        <div className='p-2 mt-8 grid md:px-20 lg:grid-cols-3 gap-10'>
          <div className='bg-white overflow-hidden'>
            <img
              src='assets/beauty1.jpeg'
              alt='stew'
              className='w-full h-32 sm:h-48 object-cover'
            />
            <div className='mt-4'>
              <span className='font-bold uppercase text-base'>
                Skin care line
              </span>
              <span className='block text-gray-500 text-sm my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia eveniet obcaecati maiores. Fugit dignissimos
                nam, mollitia alias quod modi?
              </span>
              <span className='uppercase font-bold text-green text-base'>
                Learn more
              </span>
            </div>
          </div>
          <div className='bg-white overflow-hidden'>
            <img
              src='assets/beauty1.jpeg'
              alt='stew'
              className='w-full h-32 sm:h-48 object-cover'
            />
            <div className='mt-4'>
              <span className='font-bold uppercase text-base'>
                Skin care line
              </span>
              <span className='block text-gray-500 text-sm my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia eveniet obcaecati maiores. Fugit dignissimos
                nam, mollitia alias quod modi?
              </span>
              <span className='uppercase font-bold text-green text-base'>
                Learn more
              </span>
            </div>
          </div>
          <div className='bg-white overflow-hidden'>
            <img
              src='assets/beauty1.jpeg'
              alt='stew'
              className='w-full h-32 sm:h-48 object-cover'
            />
            <div className='mt-4'>
              <span className='font-bold uppercase text-base'>
                Skin care line
              </span>
              <span className='block text-gray-500 text-sm my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia eveniet obcaecati maiores. Fugit dignissimos
                nam, mollitia alias quod modi?
              </span>
              <span className='uppercase font-bold text-green text-base'>
                Learn more
              </span>
            </div>
          </div>
        </div>

        <div className='m-2 bg-peach-100 p-2 md:px-20 md:x-20 lg:p-8 my-20 rounded-tl-large rounded-br-large h-max'>
          <p className='p-6 lg:px-20 py-6 text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            perspiciatis obcaecati delectus nisi vel alias, ipsam distinctio
            asperiores assumenda illo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className='p-6 lg:px-20 py-6 text-white'>
            Amet, perferendis? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Provident quibusdam autem ex quia reiciendis natus
            veritatis, commodi consequuntur sint! Cumque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Delectus enim rem, maiores culpa
            laborum possimus ipsa fugiat quia provident minus?
          </p>
        </div>
      </PageTitleWrapper>
    </ContainerWrapper>
  )
}

export default About
