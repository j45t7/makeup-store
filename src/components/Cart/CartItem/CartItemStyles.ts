import tw from 'tailwind-styled-components'

export const Row = tw.tr`
border-b border-ash md: p-3
`
export const Cell = tw.td`
`
export const CloseIcon = tw.button`
w-4 md:w-6 cursor-pointer
`
export const ImageWrapper = tw.span`
hidden md:block
`
export const Image = tw.img`
w-40 p-3 m-auto
`
export const ProductName = tw.p`
pl-6 text-xs text-left md:text-base md:hidden
`
export const ProductPrice = tw.p`
p-6 text-xs md:text-base
`
export const ProductQuantity = tw.div`
flex justify-center text-xs md:text-base
`
export const QuantityInput = tw.input`
w-12 h-12 focus:outline-none leading-6 p-0 m-0 pl-6 border-solid border-2
`
export const QuantityButtonWrapper = tw.div`
grid gap-0
`
export const QuantityButton = tw.button`
text-base font-bold text-ash border-2 border-solid w-6 h-6 text-center leading-3
`
export const ProductTotalPrice = tw.p`
text-xs md:text-base
`