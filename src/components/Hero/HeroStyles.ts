import tw from 'tailwind-styled-components'

export const ContainerWrapper = tw.div`
  container
  mx-auto
`
export const Background = tw.main`
  bg-coral h-screen rounded-br-large
`
export const HeroWrapper = tw.header`
 h-screen grid lg:grid-cols-4 gap-4
`
export const HeroTitle = tw.div`
 lg:col-span-2 m-auto grid p-8
`
export const HeroText = tw.h1`
 text-4xl md:text-7xl font-semibold text-green mt-14 lg:place-items-center
`
export const HeroTextUpper = tw.span`
 italic font-title
`
export const HeroTextBottom = tw.span`
 uppercase ml-10
`
export const ImageWrapper = tw.div`
 grid lg:col-span-2
`
export const Image = tw.img`
h-40 p-3 md:h-80 m-auto place-items-center
`
export const HeroSubtitle = tw.div`
p-3 grid place-items-center
`
export const HeroParagraph = tw.p`
text-base text-green text-left pt-5 pb-5
`
export const HeroButton = tw.button`
text-sand-100 bg-peach-100 hover:bg-peach-200 p-3 px-4 cursor-pointer
`
