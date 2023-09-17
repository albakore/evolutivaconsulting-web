import React from 'react'
import { Text,Box,Flex,HStack,Link,Button,Heading,Container,Spacer } from '@chakra-ui/react'

export default function Navbar() {
  return (
	<Box p={5} as='header'>
		<HStack as='nav'>
		<Heading>Evolutiva</Heading>
		<Spacer/>
		<Link>Inicio</Link>
		<Link>Quienes somos</Link>
		<Link>Porque nosotros</Link>
		<Link>Servicios</Link>
		<Link>Clientes</Link>
		<Link>Contacto</Link>
		</HStack>
	</Box>
  )
}
