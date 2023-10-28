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
          <Text textAlign={'center'}>Tomás y Nicolás tienen más de 10 años de experiencia en campañas políticas, marketing y comunicación estratégica. </Text>

          <Flex direction={{base:'column', md:'row'}}>

          <Flex justifyContent={{base:'start', md:'center'}} alignItems={{base:'inherit', md:'center'}} direction={{base:'column', md:'column'}} gap={10} p={10}>
            <Image src="integrantes/Nico.jpeg" alt='Nicolas Cichocki' w={300} borderRadius={300} border={'1px solid white'} boxShadow={'dark-lg'} />
            <VStack alignItems={'center'}>
              <Text fontSize={'3xl'} fontWeight={400}>Nicolas Cichocki</Text>
              
            </VStack>
          </Flex>

          <Flex justifyContent={{base:'start', md:'center'}} alignItems={{base:'inherit', md:'center'}} direction={{base:'column', md:'column'}} gap={10}  p={10}>
            <Image src="integrantes/Tomas.jpg" alt='Tomás Suarez' w={300} borderRadius={300} border={'1px solid white'} boxShadow={'dark-lg'} />
            <VStack alignItems={'center'}>
              <Text fontSize={'3xl'} fontWeight={400}>Tomás Suarez</Text>
              
            </VStack>
          </Flex>

          </Flex>

        </VStack>
		
	</Seccion>
  )
}
