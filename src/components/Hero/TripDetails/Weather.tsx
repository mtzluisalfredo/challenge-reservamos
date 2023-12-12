import React from 'react';
import { Box, Text, Image, Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import dayjs from 'dayjs';

function Weather({ hourlyWeather, location }: any) {
  return (
    <Box w="100%">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Hora</Th>
            <Th>Clima</Th>
            <Th>Temperatura (&deg;C)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hourlyWeather.length > 0 &&
            hourlyWeather.map((weather: any, index: number) => {
              const hour = dayjs.unix(weather.dt).format('HH:mm A');
              const backgroundColor = index % 2 === 0 ? '#f2f2f2' : 'white';

              return (
                <Tr key={weather.dt} bg={backgroundColor}>
                  <Td>
                    <Text>{index === 0 ? 'AHORA' : hour}</Text>
                  </Td>
                  <Td>
                    <Image
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      width="25px"
                      height="25px"
                    />
                  </Td>
                  <Td>
                    <Text>{weather.temp.toFixed(0)}&deg;C</Text>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Weather;
