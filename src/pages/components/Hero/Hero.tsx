import images from '@/assets'
import { colors } from '@/styles/colors'
import { Box, Flex, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import TripDetails from './TripDetails'
import Presentation from './Presentation'

function Hero() {
  return (
    <Box
      bgImage={`linear-gradient(to bottom, #c4eef1f2 0%, #ffffffdb 50%, #b5dab5 100%), url(${images.bg2})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '100vh' }}
    >
      <Presentation />
      <TripDetails />
    </Box>
  )
}

export default Hero