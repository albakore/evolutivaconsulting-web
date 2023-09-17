import React from 'react'
import { Box, Container } from '@chakra-ui/react'

export default function Seccion({children, id}) {
  return (
	<Box as='section' paddingBlock={'80px'} id={id}>
		<Container maxW={'6xl'}>
			{children}
		</Container>
	</Box>
  )
}
