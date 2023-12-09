import React from 'react'
import { IconButton, Flex, Box, Text, InputGroup, InputLeftElement, Input, Image } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import images from '@/assets';

function Header() {
  return (
    <Box
      flex={1}
      width={{ base: '100%' }}
      position={{ base: 'fixed' }}
      height={{ base: '80px' }}
      display={{ base: 'flex' }}
      maxW={{ base: '1296px' }}
      margin={{ base: '24px' }}
      borderRadius={{ base: '8px' }}
    >
      <Flex>
        <Image w={{ base: '200px' }} alt='reservamos_logo' src={images.reservamos_logo} />
      </Flex>
    </Box>
  )
}

export default Header;
