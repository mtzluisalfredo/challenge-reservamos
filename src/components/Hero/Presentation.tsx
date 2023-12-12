import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'
import images from '@/assets'

function Presentation() {
  return (
    <Flex
      paddingX={{ base: '20px', md: '40px', xl: '0px' }}
      paddingTop={{ base: '120px' }}
      maxW={{ base: '100%', xl: '1296px' }}
      marginX={{ base: 'auto' }}
    >
      <Flex
        flex={1}
        height={{ base: 'auto' }}
        alignItems={{ base: 'center' }}
        flexDirection={{ base: 'column', xl: 'row' }}
        paddingBottom={{ base: '40px' }}
      >
        <Flex flex={1} flexDirection={{ base: 'column' }}>
          <Text
            fontWeight='extrabold'
            fontSize={{ base: '32px', md: '50px' }}
            lineHeight={{ base: 'normal' }}
            marginBottom={{ base: '32px' }}
            bgGradient='linear(to-l, sushi, resolutionBlue)'
            bgClip='text'
          >
            Buscando grandes ofertas en boletos de autobús
          </Text>
          <Text

            fontSize={{ base: '20px', md: '28px' }}
            lineHeight={{ base: 'normal' }}
            fontWeight={{ base: '500' }}
          >
            Elíjanos para reservar boletos de autobús en línea y disfrute de un
            viaje en autobús sin complicaciones, ya que tenemos el mayor inventario de autobuses...
          </Text>
        </Flex>
        <Flex flex={1} display={{ base: 'none', xl: 'flex' }}>
          <Text>
            <Image alt='tomate_logo' src={images.bus1} />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Presentation