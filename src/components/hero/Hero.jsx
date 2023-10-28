import { Box, Text, Container, Button, Link } from '@chakra-ui/react'
import React from 'react'

export default function Hero({id}) {
  return (
	<Box paddingBlock={'80px'}   id={id} >
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
			<Button as={Link} href='https://api.whatsapp.com/send/?phone=%2B5491165793662&text=Hola+Evolutiva+Consulting%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0' 
			target='_blank' colorScheme='blue' mt={5}>Contactanos</Button>
		</Container>
	</Box>
  )
}
