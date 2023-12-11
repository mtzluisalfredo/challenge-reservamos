import React, { useEffect } from 'react'
import images from '@/assets';
import * as placesActios from '@/store/actions/places';
import * as weatherActions from '@/store/actions/weather';
import { colors } from '@/styles/colors'
import { Box } from '@chakra-ui/react'
import TripDetails from './TripDetails'
import Presentation from './Presentation'
import { connect } from 'react-redux'
import { IHero } from '@/types/hero';


function Hero(props: IHero) {
  const { getPlaces, getWeather } = props;

  const onSearch = async (payload: any) => {
    console.log('onSearch', payload)
  };

  return (
    <Box
      bgImage={
        `linear-gradient(to bottom,
          ${colors.mintTulip} 0,
          ${colors.whiteg2} 50%,
          ${colors.pixieGreen} 100%),
          url(${images.bg2})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '100vh' }}
    >
      <Presentation />
      <TripDetails
        onSearch={onSearch}
        getPlaces={getPlaces}
        getWeather={getWeather}
      />
    </Box>
  )
}

const mapStateToProps = () => {
  return {};
};

const actions = {
  ...placesActios,
  ...weatherActions,
};

export default connect(mapStateToProps, actions)(Hero);