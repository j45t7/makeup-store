import tw from 'tailwind-styled-components'
import { ShoppingBagIcon } from '@heroicons/react/outline'

export const NavigationBarWrapper = tw.nav`
  fixed
  top-0
  left-0
  right-0
  bg-sand-100
  drop-shadow-md
`
export const NavigationBarInner = tw.nav`
  bg-100-sand
  p-6
  w-full
  md:flex
  justify-between
  align-middle
`

export const Logo = tw.h1`
  text-3xl font-bold text-green font-title leading-loose cursor-pointer
`
export const Menu = tw.div`
  md:flex hidden
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
  absolute rounded-full bg-peach-100 h-6 w-6 text-center top-1 right-0 text-white text-sm leading-6
`
export const ShoppingBag = tw(ShoppingBagIcon)`
  text-green h-8 w-8 m-3
`

export const ContainerWrapper = tw.div`
  container
  mx-auto
`
