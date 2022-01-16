import React from 'react'
import { NavLink } from 'react-router-dom'

import { useAppSelector } from '../../hooks/hooks'
import {
  ContainerWrapper,
  NavigationBarInner,
  NavigationBarWrapper,
  Logo,
  Menu,
  MenuList,
  MenuItem,
  ShoppingIcon,
  ShoppingIconBadge,
  ShoppingBag,
} from './NavbarStyles'

const Navbar = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity)
  return (
    <NavigationBarWrapper>
      <ContainerWrapper>
        <NavigationBarInner>
          <NavLink to='/'>
            <Logo>Green Beauty</Logo>
          </NavLink>
          <Menu>
            <MenuList>
              <MenuItem>
                <NavLink to='/'>Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to='/products'>Products</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to='/about'>About</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to='/contact'>Contact</NavLink>
              </MenuItem>
            </MenuList>
            <ShoppingIcon>
              <NavLink to='/cart'>
                <ShoppingBag />
                <ShoppingIconBadge>{totalQuantity}</ShoppingIconBadge>
              </NavLink>
            </ShoppingIcon>
          </Menu>
        </NavigationBarInner>
      </ContainerWrapper>
    </NavigationBarWrapper>
  )
}

export default Navbar
