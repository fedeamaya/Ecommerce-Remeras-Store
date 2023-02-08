import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'


const NavBar = () => {
  return (
    <div className='navBar'>
      <h1>| Remeras Store |</h1>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Talles
  </MenuButton>
  <MenuList>
    <MenuItem>Talle S</MenuItem>
    <MenuItem>Talle M</MenuItem>
    <MenuItem>Talle L</MenuItem>
    <MenuItem>Talle XL</MenuItem>
  </MenuList>
</Menu>
      <CartWidget />
    </div>
  )
}

export default NavBar