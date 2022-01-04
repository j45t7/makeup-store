import React from 'react'
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
          <Logo>Shop</Logo>
          <Menu>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Products</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
            <ShoppingIcon>
              <ShoppingBag />
              <ShoppingIconBadge>3</ShoppingIconBadge>
            </ShoppingIcon>
          </Menu>
        </NavigationBarInner>
      </ContainerWrapper>
    </NavigationBarWrapper>
  )
}

export default Navbar
