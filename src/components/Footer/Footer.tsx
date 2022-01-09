import React from 'react'
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs'
import {
  ContainerWrapper,
  Background,
  Grid,
  SocialSection,
  BrandName,
  Paragraph,
  SocialLinks,
} from './FooterStyles'

const Footer = () => {
  return (
    <Background>
      <ContainerWrapper>
        <Grid>
          <SocialSection>
            <BrandName>Green Beauty</BrandName>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            </Paragraph>
            <SocialLinks>
              <BsFacebook className='text-3xl cursor-pointer text-peach-100' />
              <BsInstagram className='text-3xl cursor-pointer text-peach-100' />
              <BsPinterest className='text-3xl cursor-pointer text-peach-100' />
            </SocialLinks>
          </SocialSection>
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
        </Grid>
      </ContainerWrapper>
    </Background>
  )
}

export default Footer
