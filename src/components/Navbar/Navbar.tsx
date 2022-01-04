import React from 'react'
import {
  NavigationBar,
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
    <NavigationBar>
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
    </NavigationBar>
  )
}

export default Navbar
