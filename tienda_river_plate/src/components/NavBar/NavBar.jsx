import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Heading } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Button
} from '@chakra-ui/react'
import { MdArrowDropDown } from "react-icons/md";


const NavBar = () => {
    return (
        <Flex h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#D40B0B'}>
            <Heading>Logo</Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<MdArrowDropDown />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Camisetas</MenuItem>
                    <MenuItem>Remeras entrenamiento</MenuItem>
                    <MenuItem>Buzos y camperas</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                    <MenuItem>Shorts</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    )
}

export default NavBar
