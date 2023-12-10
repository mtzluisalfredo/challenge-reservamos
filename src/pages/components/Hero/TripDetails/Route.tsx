import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import * as placesActios from '@/store/actions/places';
import LocationSelect from '../LocationSelect'
import { connect } from 'react-redux'
import _ from 'lodash';


function Route(props: any) {
  const { getPlaces } = props;
  const loadOptions = async (inputValue: any, callback: (arg0: any) => void) => {
    try {
      const labels: any = {
        city: 'Ciudad',
        airport: 'Aeropuerto',
        terminal: 'Terminal',
      }
      
      const response = await getPlaces({ q: inputValue });
      const options = response.payload.data.map((item: { display: any; }) => ({ ...item, value: item, label: item.display }));

      const groupedData = _.groupBy(options, 'result_type');

      const result = _.map(groupedData, (options, label) => ({
        label: labels[label],
        options: options.slice(0, 3),
      }));

      callback(result);
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


const mapStateToProps = (state: any) => {
  return {};
};

const actions = {
  ...placesActios,
};

export default connect(mapStateToProps, actions)(Route);