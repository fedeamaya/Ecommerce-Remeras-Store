import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'


const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="blue.100" color="#262626">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="https://wildroadweb.com/wp-content/uploads/2020/11/0L4A7754-scaled.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
              <Link to={"/"}>| Remeras Store |</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  colorScheme="blue"
                  m="5"
                >
                  Tienda
                </MenuButton>
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Talles
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Talle S"}`}>
                  <MenuItem>Talle S</MenuItem>
                </Link>
                <Link to={`/category/${"Talle M"}`}>
                  <MenuItem>Talle M</MenuItem>
                </Link>
                <Link to={`/category/${"Talle L"}`}>
                  <MenuItem>Talle L</MenuItem>
                </Link>
                <Link to={`/category/${"Talle XL"}`}>
                  <MenuItem>Talle XL</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar