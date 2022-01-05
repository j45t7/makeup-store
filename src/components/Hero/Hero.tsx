import React from 'react'
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
  Menu,
  Logo,
} from './HeroStyles'

const Hero = () => {
  return (
    <Background>
      <ContainerWrapper>
        <div className='flex justify-between'>
          <Logo>Green Beauty</Logo>
          <Menu />
        </div>
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
              <HeroButton>Shop Now</HeroButton>
            </HeroSubtitle>
          </HeroTitle>
          <ImageWrapper>
            <Image src='assets/makeup.png' alt='makeup' />
          </ImageWrapper>
        </HeroWrapper>
      </ContainerWrapper>
    </Background>
  )
}

export default Hero
