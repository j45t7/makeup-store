import React from 'react'
import { NavLink } from 'react-router-dom'

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
  return (
    <NavigationBarWrapper>
      <ContainerWrapper>
        <NavigationBarInner>
          <Logo>Green Beauty</Logo>
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
                <ShoppingIconBadge>3</ShoppingIconBadge>
              </NavLink>
            </ShoppingIcon>
          </Menu>
        </NavigationBarInner>
      </ContainerWrapper>
    </NavigationBarWrapper>
  )
}

export default Navbar
