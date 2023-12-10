import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import images from '@/assets'

function Presentation() {
  return (
    <Flex paddingTop={{ base: '160px' }} maxW={{ base: '1296px' }} marginX={{ base: 'auto' }}>
      <Flex height={{ base: '480px' }} flex={1} alignItems={{ base: 'center' }}>
        <Flex
          flex={1}
          flexDirection={{ base: 'column' }}
        >
          <Text
            fontWeight='extrabold'
            fontSize={{ base: '50px' }}
            lineHeight={{ base: 'normal' }}
            marginBottom={{ base: '32px' }}
            bgGradient='linear(to-l, sushi, resolutionBlue)'
            bgClip='text'
          >
            Buscando grandes ofertas en boletos de autobús
          </Text>
          <Text
            fontSize={{ base: '28px' }}
            lineHeight={{ base: 'normal' }}
            fontWeight={{ base: '500' }}
          >
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
  )
}

export default Presentation