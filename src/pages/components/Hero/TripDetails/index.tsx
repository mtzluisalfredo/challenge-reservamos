import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TripType from './TripType'
import Route from './Route'
import { ITripDetails } from '@/types/hero'

function TripDetails(props: ITripDetails) {
  const { getPlaces } = props;

  return (
    <Flex
      flexDirection={{ base: 'column' }}
      borderRadius={{ base: '10px' }}
      minH={{ base: '100px' }}
      padding={{ base: '30px' }}
      maxW={{ base: '1296px' }}
      marginX={{ base: 'auto' }}
      bg='white'
    >
      <Text fontSize={{ base: '24px' }}>
        Reservar boletos de autobús
      </Text>

      <TripType />
      <Route getPlaces={getPlaces}  />
    </Flex>
  )
}

export default TripDetails