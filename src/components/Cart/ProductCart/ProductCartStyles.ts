import tw from 'tailwind-styled-components'

export const ProductListWrapper = tw.div`
  my-10
`
export const ProductListTable = tw.table`
  table-fixed border-collapse w-full text-center
`
export const ProductListTableHead = tw.thead`
  border-b border-ash
`
export const ProductListTableRow = tw.tr`
  border-b border-ash
`
export const FirstHeaderCell = tw.th`
  w-0 p-3 uppercase tracking-widest md:w-2
`
export const HeaderCell = tw.th`
  text-tiny md:text-base p-3 uppercase tracking-widest
`
export const TableBody = tw.tbody`

`
export const CartTotal = tw.div`
  grid md:grid-cols-2 p-10 md:p-20 lg:px-36
`
export const CartTitle = tw.h3`
  col-span-1 text-center md:text-left uppercase text-peach-200 font-bold text-xl md:text-2xl
`
export const CartTotalPrice = tw.h3`
  col-span-1 text-center md:text-right text-xl md:text-2xl font-bold
`
export const ButtonWrapper = tw.div`
  text-center mb-28
`