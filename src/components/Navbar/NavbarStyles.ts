import tw from 'tailwind-styled-components'
import { ShoppingBagIcon } from '@heroicons/react/outline'

export const NavigationBar = tw.nav`
  bg-100-sand
  p-6
  w-full
  md:flex
  justify-between
  align-middle
`

export const Logo = tw.h1`
  text-3xl font-bold text-green leading-loose
`
export const Menu = tw.div`
  flex
`
export const MenuList = tw.ul`
  flex flex-row mr-5
`
export const MenuItem = tw.li`
  p-3 leading-loose cursor-pointer text-green hover:font-bold
`
export const ShoppingIcon = tw.div`
  relative
  cursor-pointer
  transform
  hover:scale-125
  hover:bg-opacity-50
  transition
  ease-out
  duration-300
`
export const ShoppingIconBadge = tw.span`
  absolute rounded-full bg-peach h-6 w-6 text-center top-1 right-0 text-white text-sm leading-6
`
export const ShoppingBag = tw(ShoppingBagIcon)`
  text-green h-8 w-8 m-3
`
