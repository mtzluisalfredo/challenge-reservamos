import React from 'react'
import images from '@/assets'
import { colors } from '@/styles/colors'
import { Box } from '@chakra-ui/react'
import { connect } from 'react-redux';
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

const mapStateToProps = (state: any) => {
  console.log("🚀 ~ file: Hero.tsx:24 ~ mapStateToProps ~ state:", state)

  return {};
};

const actions = {};

export default connect(mapStateToProps, actions)(Hero);