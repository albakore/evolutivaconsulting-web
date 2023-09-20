import React from 'react'
import { Box, Container } from '@chakra-ui/react'

export default function Seccion({children, id, color}) {
  return (
	<Box bgColor={ color }  id={id}  as='section'  paddingBlock={'80px'} >
		<Container  maxW={'6xl'}>
			{children}
		</Container>
	</Box>
  )
}
