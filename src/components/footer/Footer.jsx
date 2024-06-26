import React from 'react'
import { Text,Box,Flex,HStack,Link,Button,Heading,Container,Spacer,Image, Icon } from '@chakra-ui/react'
import { Contacto } from '../contacto/Contacto'

export default function Footer() {
  return (
	<Box bg={'blue.200'} as="footer">
    <Contacto/>
		<Container maxW={{base: '6xl', lg: '6xl'}} paddingBlock={5}>
			<HStack justifyContent={'space-between'} alignContent={'center'}>
				<Box>
				  <Text fontSize={{ base: "sm", md: "sm", lg:'sm' }}>© 2023 Evolutiva Consulting, Inc. Todos los derechos reservados.</Text>
				</Box>
				<HStack >
          <Link target='_blank' width={'fit-content'} margin={0} href='https://api.whatsapp.com/send/?phone=%2B5491165793662&text=Hola+Evolutiva+Consulting%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0' mr={2}>
            <Image width={8} height={8} margin={0} src={'logos/whatsapp.svg'} alt='whatsapp' />
          </Link>
          <Link target='_blank' href="https://www.linkedin.com/company/evolutiva-consulting/about/" mr={2}>
            <Image width={8} height={8} margin={0} src={'logos/linkedin.svg'} alt='linkedin' />
          </Link>
          <Link target='_blank' href="mailto:consultingevolutiva@consultingevolutiva.com">
            <Image width={8} height={8} margin={0} src={'logos/mail.svg'} alt='mail' />
          </Link>
				</HStack>

			</HStack>
		</Container>
	</Box>
  )
}
