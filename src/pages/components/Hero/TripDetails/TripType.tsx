import { Flex, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

function TripType() {
  return (
    <Flex marginY={{ base: '24px' }}>
      <RadioGroup defaultValue='2'>
        <Stack spacing={5} direction='row'>
          <Radio
            colorScheme='green'
            borderColor='black'
            value='1'
          >
            <Text fontWeight={{ base: 'bold' }}>
              Solo ida
            </Text>
          </Radio>
          <Radio colorScheme='blue' borderColor='black' value='2'>
            <Text fontWeight={{ base: 'bold' }}>Ida y vuelta</Text>
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  )
}

export default TripType
