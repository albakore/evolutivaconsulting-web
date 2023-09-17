import React from 'react'
import {NextLink} from 'next/link'
import { Text,Box,Flex,HStack,Link,Button,Heading,Container,Spacer,Image } from '@chakra-ui/react'

export default function Navbar() {
  return (
	<Container as='header' maxW={'6xl'} paddingBlock={5}>
		<HStack as='nav' >
		<Image src={'logos/LogoColor_EC.svg'} w={200} alt='evolutiva consulting' />
		<Spacer/>
		<HStack gap={4} fontSize={'lg'} fontWeight={700} textTransform={'uppercase'} m={0}>
			<Link href='#inicio' as={NextLink}>Inicio</Link>
			<Link>Quienes somos</Link>
			<Link href='#porqueNosotros' as={NextLink}>Porque nosotros</Link>
			<Link href='#servicios' as={NextLink}>Servicios</Link>
			<Link>Clientes</Link>
			<Link>Contacto</Link>
		</HStack>
		</HStack>
	</Container>
  )
}
