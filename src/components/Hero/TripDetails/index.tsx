import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TripType from './TripType'
import Route from './Route'
import { ITripDetails, IvaluesTrip } from '@/types/hero';

const tripDetailsSchema = Yup.object().shape({
  from: Yup.object().required('Seleccione un origen'),
  to: Yup.object().required('Seleccione un destino'),
  type: Yup.string().required('Seleccione un tipo de viaje'),
  startDate: Yup.string().required('Seleccione una fecha de salida'),
  endDate: Yup.string().required('Seleccione una fecha de regreso'),
});

function TripDetails(props: ITripDetails) {
  const { getPlaces, getWeather, onSearch } = props;

  const formik = useFormik({
    initialValues: {
      from: { display: '' },
      to: { display: '' },
      type: '1',
      startDate: '',
      endDate: '',
    },
    validationSchema: tripDetailsSchema,
    onSubmit: () => { },
  });

  const handleValuesTrip = (values: IvaluesTrip) => {
    formik.setValues({ ...formik.values, ...values });
  };

  return (
    <Flex
      bg='white'
      flexDirection={{ base: 'column' }}
      borderRadius={{ base: '10px' }}
      minH={{ base: '100px' }}
      padding={{ base: '30px' }}
      maxW={{ base: '100%', xl: '1296px' }}
      marginX={{ base: '20px', md: '40px', xl: 'auto' }}
      paddingX={{ base: '20px', md: '40px', xl: '40px' }}
    >
      <Text fontSize={{ base: '20px', md: '24px' }} lineHeight={{base: 'normal'}} fontWeight={{base: 'bold'}}>
        Reservar boletos de autobús
      </Text>

      <TripType
        value={formik.values.type}
        onChange={(type) => formik.setFieldValue('type', type)}
      />
      <Route
        setValuesTrip={handleValuesTrip}
        valuesTrip={formik.values}
        onSearch={onSearch}
        getPlaces={getPlaces}
        getWeather={getWeather}
      />
    </Flex>
  )
}

export default TripDetails