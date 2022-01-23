import tw from 'tailwind-styled-components'

export const Logo = tw.h1`
  pl-5 text-3xl font-bold text-peach-200 font-title leading-loose
`
export const ContainerWrapper = tw.div`
  container
  mx-auto
`
export const Background = tw.main`
  bg-coral h-screen rounded-br-large shadow
`
export const HeroWrapper = tw.header`
  h-screen grid lg:grid-cols-2 gap-4
`
export const HeroTitle = tw.div`
  pt-40 lg:m-auto lg:col-span-1 grid px-8
`
export const HeroText = tw.h1`
  text-4xl md:text-7xl font-semibold text-green lg:place-items-center
`
export const HeroTextUpper = tw.span`
  italic font-title
`
export const HeroTextBottom = tw.span`
  uppercase ml-10
`
export const ImageWrapper = tw.div`
  grid lg:col-span-1 h-fit md:h-auto
`
export const Image = tw.img`
  hidden md:grid p-10 lg:pt-20 h-72 lg:h-96 m-auto place-items-center
`
export const HeroSubtitle = tw.div`
  p-3 grid place-items-center
`
export const HeroParagraph = tw.p`
  text-base text-green text-left pt-5 pb-5
`
export const HeroButton = tw.button`
text-sand-100
bg-peach-100
hover:bg-peach-200
  p-3
  w-60
  md:w-40
  cursor-pointer
  shadow
  uppercase
`
