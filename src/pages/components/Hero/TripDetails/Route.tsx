import React, { useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, Text, Stack } from '@chakra-ui/react'
import LocationSelect from '../LocationSelect'
import { filterLocations } from '@/utils';
import { CityData, IRoute } from '@/types/hero';


function Route(props: IRoute) {
  const { getPlaces, setValuesTrip, valuesTrip } = props;


  const loadOptions = async (inputValue: any, callback: (arg0: any) => void) => {
    try {
      const response = await getPlaces({ q: inputValue });
      callback(filterLocations(response));
    } catch (error) {
      console.error('Error al cargar opciones:', error);
    }
  };

  const handleFrom = (from: CityData) => setValuesTrip({ ...valuesTrip, from });
  const handleTo = (to: CityData) => setValuesTrip({ ...valuesTrip, to });

  return (
    <Stack flexDirection={{ base: 'row' }} spacing={4}>
      <InputGroup>
        <LocationSelect onSelect={handleFrom} promiseOptions={loadOptions} />
      </InputGroup>
      <InputGroup>
        <LocationSelect onSelect={handleTo} promiseOptions={loadOptions} />
      </InputGroup>
      <InputGroup>
        <Input placeholder="Select Date and Time" size="md" type="date" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="Select Date and Time" size="md" type="date" />
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

export default Route;
