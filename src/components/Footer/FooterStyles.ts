import tw from 'tailwind-styled-components'

export const ContainerWrapper = tw.div`
  container
  mx-auto
`
export const Background = tw.div`
  bg-green text-sand-100  rounded-tl-large pb-10
`
export const Grid = tw.div`
  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
`
export const SocialSection = tw.div`
  p-7 pl-10 pt-10 lg:col-span-2
`
export const BrandName = tw.h1`
  font-title text-5xl py-5 text-peach-100
`
export const Paragraph = tw.p`
  py-2
`
export const SocialLinks = tw.p`
  flex p-5 gap-4
`