import React, { useState } from 'react'
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
  MenuOpen,
  MenuClosed,
  MenuSmList,
} from './NavbarStyles'

const Navbar = () => {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const menuIcon = toggleMenu ? <MenuOpen /> : <MenuClosed />
  return (
    <NavigationBarWrapper>
      <ContainerWrapper>
        <NavigationBarInner>
          {!toggleMenu && (
            <NavLink to='/makeup-store'>
              <Logo>Green Beauty</Logo>
            </NavLink>
          )}
          <button className='fixed right-3' onClick={handleToggleMenu}>
            {menuIcon}
          </button>
          {toggleMenu && (
            <div className='h-screen bg-white w-full grid place-items-center'>
              <ul className='text-3xl text-center h-3/6'>
                <MenuItem>
                  <NavLink to='/' onClick={handleToggleMenu}>
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to='/products' onClick={handleToggleMenu}>
                    Products
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to='/about' onClick={handleToggleMenu}>
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to='/contact' onClick={handleToggleMenu}>
                    Contact
                  </NavLink>
                </MenuItem>
                {/* <MenuItem>
                  <NavLink to='/cart' onClick={handleToggleMenu}>
                    Cart
                  </NavLink>
                </MenuItem> */}
              </ul>
              <ShoppingIcon>
                <NavLink to='/cart' onClick={handleToggleMenu}>
                  <ShoppingBag />
                  <ShoppingIconBadge>{totalQuantity}</ShoppingIconBadge>
                </NavLink>
              </ShoppingIcon>
            </div>
          )}
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
