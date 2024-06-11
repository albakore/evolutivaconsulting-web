import React from 'react'
import { Box, Container } from '@chakra-ui/react'

export default function Seccion({children, id, color,hoverColor}) {
  return (
	<Box _hover={hoverColor}  bgColor={ color }  id={id} className='section'  as='section'  paddingBlock={'80px'} >
		<Container  maxW={'6xl'}>
			{children}
		</Container>
	</Box>
  )
}
