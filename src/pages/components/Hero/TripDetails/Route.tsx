import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import PinIcon from '../../Icons'

function Route() {
  return (
    <Stack flexDirection={{ base: 'row' }} spacing={4}>
      <InputGroup>
        <Input type='tel' placeholder='Phone number' />
        <InputRightElement pointerEvents='none'>
          <PinIcon color='gray.300' />
        </InputRightElement>
      </InputGroup>
      <InputGroup>
        <Input placeholder='Enter amount' />
        <InputRightElement pointerEvents='none'>
          <PinIcon color='gray.300' />
        </InputRightElement>
      </InputGroup>

      <InputGroup>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
        />
      </InputGroup>
      <InputGroup>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
        />
      </InputGroup>
      <Button
        leftIcon={<SearchIcon />}
        colorScheme='green'
        variant='solid'
        width={{ base: '100%' }}
        maxW={{ base: '180px' }}
      >
        <Text>Buscar</Text>
      </Button>
    </Stack>
  )
}

export default Route