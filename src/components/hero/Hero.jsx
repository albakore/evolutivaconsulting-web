import { Box, Text, Container } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
	<Box paddingBlock={'80px'}  bg={'blue.100'}>
		<Container maxW={'6xl'}>
			<Text fontSize={'7xl'} fontWeight={800} lineHeight={'80px'} textTransform={'uppercase'} w='900px'>Desarrollamos marcas únicas.</Text>
			<Text fontSize={'2xl'}>Evoluciona al mundo digital.</Text>
		</Container>
	</Box>
  )
}
