import tw from 'tailwind-styled-components'

export const ContainerWrapper = tw.div`
  container
  mx-auto
`
export const TitleWrapper = tw.div`
  px-2
`
export const Title = tw.h1`
  text-2xl md:text-4xl font-bold text-center text-peach-200 p-6 pt-20 font-body uppercase
`
export const Subtitle = tw.p`
  text-green text-center pb-6
`
export const ProductsWrapper = tw.div`
  grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-5 py-12 justify-center md:px-6
`
export const PageTitleWrapper = tw.div`
  mt-20 h-max
`

export const OrangeButton = tw.button`
text-sand-100
bg-peach-100
hover:bg-peach-200
uppercase
  p-3
  px-4
  cursor-pointer
  shadow
`