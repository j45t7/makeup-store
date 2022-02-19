import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  ContainerWrapper,
  Background,
  HeroWrapper,
  HeroTitle,
  HeroText,
  HeroTextUpper,
  HeroTextBottom,
  ImageWrapper,
  Image,
  HeroSubtitle,
  HeroParagraph,
  HeroButton,
} from './HeroStyles'

import image from '../../assets/makeup.png'
const Hero = () => {
  return (
    <Background>
      <ContainerWrapper>
        <HeroWrapper>
          <HeroTitle>
            <HeroText>
              <HeroTextUpper>Beautiful</HeroTextUpper>
              <br />
              <HeroTextBottom>Shopping</HeroTextBottom>
            </HeroText>
            <HeroSubtitle>
              <HeroParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                non, iusto et ipsa dolor repellendus ex!
              </HeroParagraph>
              <NavLink to='/products'>
                <HeroButton>Shop Now</HeroButton>
              </NavLink>
            </HeroSubtitle>
          </HeroTitle>
          <ImageWrapper>
            <Image src={image} alt='makeup' />
          </ImageWrapper>
        </HeroWrapper>
      </ContainerWrapper>
    </Background>
  )
}

export default Hero
