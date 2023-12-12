import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, Text, Stack, Flex } from '@chakra-ui/react'
import LocationSelect from '../LocationSelect'
import { filterLocations, getHourlyWeather } from '@/utils';
import { CityData, IGenericInput, IRoute } from '@/types/hero';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import WrapperWeather from './WrapperWeather';

dayjs.extend(timezone)
dayjs.tz.setDefault("America/Mexico_City");

function Route(props: IRoute) {
  const { getPlaces, setValuesTrip, valuesTrip, getWeather } = props;

  const [weathers, setWeathers] = React.useState({
    from: { hourlyWeather: [], weeklyWeather: [] },
    to: { hourlyWeather: [], weeklyWeather: [] },
  });

  const loadOptions = async (inputValue: any, callback: (arg0: any) => void) => {
    try {
      const response = await getPlaces({ q: inputValue });
      callback(filterLocations(response));
    } catch (error) {
      console.error('Error al cargar opciones:', error);
    }
  };

  const handleLocation = async (loc: CityData, key: string) => {
    setValuesTrip({ ...valuesTrip, [key]: loc });
    const response = await getWeather({ lat: loc.lat, lon: loc.long });
    const dataWeather = response?.payload?.data;
    if (dataWeather) {
      const [weeklyWeather] = dataWeather.daily;
      setWeathers({
        ...weathers,
        [key]: {
          hourlyWeather: getHourlyWeather(dataWeather.hourly),
          weeklyWeather: weeklyWeather
        },
      })
    }
  };

  const handleDate = (e: IGenericInput, key: string) => {
    setValuesTrip({ ...valuesTrip, [key]: e.target.value });
  };

  return (
    <Flex flexDirection={{ base: 'column' }}>
      <Stack flexDirection={{ base: 'column', lg: 'row' }} spacing={4}>
        <InputGroup>
          <LocationSelect
            onSelect={(from) => handleLocation(from, 'from')}
            promiseOptions={loadOptions}
          />
        </InputGroup>
        <InputGroup>
          <LocationSelect
            onSelect={(from) => handleLocation(from, 'to')}
            promiseOptions={loadOptions}
          />
        </InputGroup>
        <InputGroup>
          <Input
            value={valuesTrip.startDate}
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={(e) => handleDate(e, 'startDate')}
          />
        </InputGroup>
        <InputGroup>
          <Input
            value={valuesTrip.endDate}
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={(e) => handleDate(e, 'endDate')}
          />
        </InputGroup>
        <Button
          leftIcon={<SearchIcon />}
          colorScheme='green'
          variant='solid'
          width={{ base: '100%' }}
          maxW={{ base: '100%', lg: '180px' }}
        >
          <Text>Buscar</Text>
        </Button>
      </Stack>
      {/* <WrapperWeather weathers={weathers} valuesTrip={valuesTrip} /> */}
    </Flex>
  )
}

export default Route;
