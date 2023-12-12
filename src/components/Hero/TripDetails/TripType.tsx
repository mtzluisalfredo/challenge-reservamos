import { Flex, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

function TripType(props: { value: string, onChange: (value: string) => void }) {
  const { value, onChange } = props;

  return (
    <Flex marginY={{ base: '24px' }}>
      <RadioGroup defaultValue='1' value={value} onChange={onChange}>
        <Stack spacing={5} direction='row'>
          <Radio
            colorScheme='green'
            borderColor='black'
            value='1'
          >
            <Text fontWeight={{ base: value === '1' ? 'bold' : 'normal' }}>
              Solo ida
            </Text>
          </Radio>
          <Radio colorScheme='blue' borderColor='black' value='2'>
            <Text fontWeight={{ base: value === '2' ? 'bold' : 'normal' }}>
              Ida y vuelta
            </Text>
          </Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  )
}

export default TripType
