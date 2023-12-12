import { Flex, Text, Image, Box } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'

function TodaysWeather({ city, weather }: any) {
  return (
    <Flex>
      <Flex marginBottom={{ base: '24px' }} flexDirection={{ base: 'column' }}>
        <Box>
          <Text fontWeight={{ base: 'bold' }}>
            {city.display} ({city.country})
          </Text>
        </Box>
        <Flex alignItems={{ base: 'center' }}>
          <Text fontSize={{ base: '24px' }}>{weather.temp.max.toFixed(0)}&deg;C</Text>
          <Box width={{ base: '8px' }} />
          <Text fontSize={{ base: '16px' }}>{weather.temp.min.toFixed(0)}&deg;C</Text>
        </Flex>
        <Flex alignItems={{ base: 'center' }}>
          <Box>
            <Text fontSize={{ base: '16px' }} fontWeight={{ base: 'bold' }}>Amanecer</Text>
            <Text fontSize={{ base: '16px' }}>{dayjs.unix(weather.sunrise).format('HH:mm A')}</Text>
          </Box>
          <Box width={{ base: '8px' }} />
          <Box>
            <Text fontSize={{ base: '16px' }} fontWeight={{ base: 'bold' }}>Atardecer</Text>
            <Text fontSize={{ base: '16px' }}>{dayjs.unix(weather.sunset).format('HH:mm A')}</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        alignItems={{ base: 'flex-end' }}
        flex={1} flexDirection={{ base: 'column' }} justifyContent={{ base: 'flex-end' }}>

        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          height={{ base: '100px' }}
        />
        <Text fontSize={{ base: '16px' }}>{weather.weather[0].description}</Text>
      </Flex>
    </Flex>
  )
}

export default TodaysWeather