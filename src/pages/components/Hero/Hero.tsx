import React from 'react'
import images from '@/assets'
import { colors } from '@/styles/colors'
import { Box } from '@chakra-ui/react'
import TripDetails from './TripDetails'
import Presentation from './Presentation'


function Hero() {


  return (
    <Box
      bgImage={`linear-gradient(to bottom, ${colors.mintTulip} 0 , ${colors.whiteg2} 50%,  ${colors.pixieGreen} 100%), url(${images.bg2})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '100vh' }}
    >
      <Presentation />
      <TripDetails />
    </Box>
  )
}
export default Hero;
