import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import TripType from './TripType'
import Route from './Route'
import { CityData, ITripDetails } from '@/types/hero'

function TripDetails(props: ITripDetails) {
  const { getPlaces, getWeather, onSearch } = props;

  const [valuesTrip, setValuesTrip] = useState({
    from: {},
    to: {},
    type: '1',
  });


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

      <TripType
        value={valuesTrip.type}
        onChange={(type) => setValuesTrip({ ...valuesTrip, type })}
      />
      <Route
        setValuesTrip={setValuesTrip}
        valuesTrip={valuesTrip}
        onSearch={onSearch}
        getPlaces={getPlaces}
        getWeather={getWeather}
      />
    </Flex>
  )
}

export default TripDetails