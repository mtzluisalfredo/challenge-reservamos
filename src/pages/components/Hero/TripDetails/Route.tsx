import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, Text, Stack } from '@chakra-ui/react'
import LocationSelect from '../LocationSelect'
import { filterLocations } from '@/utils';


function Route(props: any) {
  const { getPlaces } = props;

  const loadOptions = async (inputValue: any, callback: (arg0: any) => void) => {
    try {
      const response = await getPlaces({ q: inputValue });
      callback(filterLocations(response));
    } catch (error) {
      console.error('Error al cargar opciones:', error);
    }
  };

  return (
    <Stack flexDirection={{ base: 'row' }} spacing={4}>
      <InputGroup>
        <LocationSelect promiseOptions={loadOptions} />
      </InputGroup>
      <InputGroup>
        <LocationSelect promiseOptions={loadOptions} />
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
