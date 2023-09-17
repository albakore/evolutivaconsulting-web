import { Box, Text, Container } from '@chakra-ui/react'
import React from 'react'

export default function Hero({id}) {
  return (
	<Box paddingBlock={'80px'}  bg={'blue.100'} id={id}>
		<Container maxW={'6xl'}>
			<Text 
			fontSize={{base:'4xl',lg:'7xl'}} 
			w={{base:'350px',lg:'900px'}} 
			fontWeight={800} 
			lineHeight={'80px'} 
			textTransform={'uppercase'}
			>
				Desarrollamos marcas únicas.
			</Text>
			<Text fontSize={'2xl'}>Evoluciona al mundo digital.</Text>
		</Container>
	</Box>
  )
}
