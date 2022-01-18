import tw from 'tailwind-styled-components'

export const GridWrapper = tw.div`
  grid md:grid-cols-2 gap-4 p-5 pt-10
`
export const ImageWrapper = tw.div`
  grid grid-cols-1 gap-4 place-items-center
`
export const Image = tw.img`
  max-h-40 md:max-h-image object-cover mb-3
`
export const ProductWrapper = tw.div`
 grid grid-cols-1 gap-4 h-max
`
export const ProductName = tw.h2`
 text-2xl lg:text-3xl uppercase font-bold tracking-widest
`
export const ProductBrand = tw.h3`
 text-sm lg:text-base text-green
`
export const ProductPrice = tw.p`
 text-3xl lg:text-4xl text-ash
`
export const ProductDescription = tw.p`
 text-sm lg:text-base text-ash leading-6
`
export const AddToCartButton = tw.button`
 text-sand-100 bg-peach-100 hover:bg-peach-200
              p-3
              px-4
              cursor-pointer
              shadow md: h-14 grid-span-1 uppercase w-60
`
export const BackToProductsButton = tw.button`
text-sand-100 bg-green hover:bg-peach-200
              p-3
              px-4
              cursor-pointer
              shadow md: h-14 grid-span-1 uppercase w-60
`