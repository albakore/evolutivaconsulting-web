import React from 'react'
import Seccion from '../seccion/Seccion'
import { Text,VStack, } from '@chakra-ui/react'

export default function QuienesSomos() {
  return (
	<Seccion id='quienes-somos'>
		<VStack justifyContent={'start'} alignItems={'start'}>
          <Text fontSize={'4xl'} fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'} textAlign={'center'}>
          Quienes somos
          </Text>
          <Text fontSize={'1xl'} fontWeight={400}> 
          No hay comentarios en este post...Soyez le premier

          </Text>
        </VStack>
		
	</Seccion>
  )
}
