import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TodaysWeather from './TodaysWeather'
import Weather from './Weather'

function WrapperWeather({ weathers, valuesTrip }: any) {
  return (
    <>
      {(!!weathers.from?.hourlyWeather.length || !!weathers.to?.hourlyWeather.length) &&
        <Flex marginY={{ base: '24px' }}>
          <Text fontSize={{ base: '24px' }} fontWeight={{ base: 'bold' }}>
            Clima
          </Text>
        </Flex>}
      <Stack spacing={16} flexDirection={{ base: 'row' }}>
        <Flex flex={1}>
          {!!weathers.from?.hourlyWeather.length &&
            <Flex flexDirection={{ base: 'column' }} flex={1}>
              <TodaysWeather city={valuesTrip.from} weather={weathers.from.weeklyWeather} />
              <Weather location={valuesTrip.from?.display} hourlyWeather={weathers.from?.hourlyWeather} />
            </Flex>
          }
        </Flex>
        <Flex flex={1}>
          {!!weathers.to?.hourlyWeather.length &&
            <Flex flexDirection={{ base: 'column' }} flex={1}>
              <TodaysWeather city={valuesTrip.to} weather={weathers.to.weeklyWeather} />
              <Weather location={valuesTrip.to?.display} hourlyWeather={weathers.to?.hourlyWeather} />
            </Flex>
          }
        </Flex>
      </Stack>
    </>
  )
}

export default WrapperWeather