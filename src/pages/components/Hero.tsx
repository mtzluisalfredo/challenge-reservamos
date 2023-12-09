import images from '@/assets'
import { colors } from '@/styles/colors'
import { Box, Flex, Image, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Hero() {
  return (
    <Box
      bgImage={`linear-gradient(to bottom, #c4eef1f2 0%, #ffffffdb 50%, #b5dab5 100%), url(${images.bg2})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '100vh' }}
    >
      <Flex paddingTop={{ base: '160px' }} maxW={{ base: '1296px' }} marginX={{ base: 'auto' }}>
        <Flex height={{ base: '480px' }} flex={1} alignItems={{ base: 'center' }}>
          <Flex flex={1} flexDirection={{ base: 'column' }}>
            <Text fontWeight={{ base: 'bold' }} fontSize={{ base: '52px' }} lineHeight={{ base: 'normal' }} marginBottom={{ base: '32px' }}>
              Buscando grandes ofertas en billetes de autobús
            </Text>
            <Text fontSize={{ base: '28px' }} lineHeight={{ base: 'normal' }} fontWeight={{ base: '500' }}>
              Elíjanos para reservar boletos de autobús en línea y disfrute de un
              viaje en autobús sin complicaciones, ya que tenemos el mayor inventario de autobuses...
            </Text>
          </Flex>
          <Flex flex={1}>
            <Text>
              <Image alt='tomate_logo' src={images.bus1} />
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        flexDirection={{ base: 'column' }}
        borderRadius={{ base: '10px' }}
        minH={{ base: '100px' }}
        padding={{ base: '30px' }}
        bg='white' maxW={{ base: '1296px' }} marginX={{ base: 'auto' }}>
        <Text fontSize={{ base: '24px' }}>Book Bus Tickets</Text>
        <Flex marginY={{ base: '24px' }}>
          <RadioGroup defaultValue='2'>
            <Stack spacing={5} direction='row'>
              <Radio colorScheme='red' value='1'>
                Solo ida
              </Radio>
              <Radio colorScheme='green' value='2'>
                Ida y vuelta
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Hero