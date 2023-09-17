import { Box, Text, Container } from '@chakra-ui/react'
import React from 'react'

export default function Hero({id}) {
  return (
	<Box paddingBlock={'80px'}  bg={'blue.100'} id={id}>
		<Container maxW={'6xl'}>
			<Text 
			wordBreak={'break-word'}
			fontSize={{base:'4xl',sm:'5xl',md:'6xl',lg:'7xl'}} 
			w={{base:'450px',sm:'480px', md:'560px',lg:'700px'}} 
			fontWeight={800} 
			lineHeight={{base:'40px',sm:'52px', md:'50px', lg:'80px'}} 
			textTransform={'uppercase'}
			>
				Desarrollamos marcas únicas.
			</Text>
			<Text fontSize={'2xl'}>Evoluciona al mundo digital.</Text>
		</Container>
	</Box>
  )
}
