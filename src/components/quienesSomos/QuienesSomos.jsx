import React from 'react'
import Seccion from '../seccion/Seccion'
import { Text,VStack, Flex, Image, Box, HStack} from '@chakra-ui/react'

export default function QuienesSomos() {
  return (
	<Seccion id='quienes-somos'>
		<VStack justifyContent={'start'} >
          <Text fontSize={'4xl'} fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'} textAlign={'center'} mb={10}>
          Quienes somos
          </Text>
          <Flex justifyContent={{base:'start', md:'center'}} alignItems={{base:'inherit', md:'center'}} direction={{base:'column', sm:'row'}} gap={10}>
            <Image src="integrantes/Nico.jpeg" alt='Nicolas Cichocki' w={300} borderRadius={20} border={'1px solid'} boxShadow={'dark-lg'} />
            <VStack alignItems={'start'}>
              <Text fontSize={'3xl'} fontWeight={400}>Nicolas Cichocki</Text>
              <Text>Tomás y Nicolás tienen más de 10 años de experiencia en campañas políticas, marketing y comunicación estratégica. </Text>
            </VStack>
          </Flex>
        </VStack>
		
	</Seccion>
  )
}
