import React from 'react'
import {NextLink} from 'next/link'
import { Text,Box,Flex,HStack,Link,Button,Heading,Container,Spacer,Image, Input, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure
  } from '@chakra-ui/react'


export default function Navbar() {
  return (
	<Container as='header' maxW={{base: '6xl', lg: '6xl'}} paddingBlock={5}>
		<HStack as='nav'   >
		<Image src={'logos/LogoColor_EC.svg'} w={{base: '100px',lg: '200px'}} alt='evolutiva consulting' />
		<Spacer/>
		<LinkDirecciones 
		m={0} 
		gap={{base:3, md:3, lg:2, xl:4}} 
		display={{base:'none', md:'none', lg:'flex'}}
		fontSize={{base: '100px', md: '12px', lg: 'lg', xl: 'xl'}} 
		fontWeight={700} 
		textTransform={'uppercase'} 
		/>
		<DrawerButton display={{base:'initial', lg:'none'}}/>
		</HStack>
	</Container>
  )
}

function DrawerButton({display}) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	// const btnRef = React.useRef()
  
	return (
	  <Box display={display}>
		<IconButton  onClick={onOpen} variant={'ghost'} fontSize='40px' icon={<HamburgerIcon />}/>
		<Drawer
		  isOpen={isOpen}
		  placement='right'
		  onClose={onClose}
		  trapFocus={false}
		  position={'fixed'}
		  size={'full'}
		>
		  <DrawerOverlay />
		  <DrawerContent bg={'rgba(255,255,255,0.8)'}>
			<DrawerCloseButton />
			<DrawerHeader>Menu</DrawerHeader>
  
			<DrawerBody>
			  <LinkDirecciones onClick={onClose} direction={'column'} fontSize={{base:'2xl'}} fontWeight={700} textTransform={'uppercase'}/>
			</DrawerBody>
  
			
		  </DrawerContent>
		</Drawer>
	  </Box>
	)
  }

  function LinkDirecciones(props){
	return(
		<Flex {...props}>
			<Link href='#inicio' as={NextLink}>Inicio</Link>
			<Link>Quienes somos</Link>
			<Link href='#porqueNosotros' as={NextLink}>Porque nosotros</Link>
			<Link href='#servicios' as={NextLink}>Servicios</Link>
			<Link>Clientes</Link>
			<Link>Contacto</Link>
		</Flex>
	)
  }