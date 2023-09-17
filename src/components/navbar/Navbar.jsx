import React from 'react'
import {NextLink} from 'next/link'
import { Text,Box,Flex,HStack,Button,Heading,Container,Spacer,Image, Link as LinkChakra,Input, IconButton } from '@chakra-ui/react'
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
  import { Link, animateScroll as scroll } from "react-scroll";


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
			<LinkChakra  
    				to="inicio"
					smooth={true}
					duration={200}
					as={Link} 
					>
						Inicio
			</LinkChakra>

			<LinkChakra   
			        activeClass="active"
    				to="quienesSomos"
					smooth={true}
					offset={-70}
					duration={500}
					as={Link} 
					>Quienes somos</LinkChakra>

			<LinkChakra 
    				to="porqueNosotros"
					smooth={true}
					duration={500} 
					as={Link} 
					 >Porque nosotros</LinkChakra>

			<LinkChakra
    				to="servicios"
					smooth={true}
					duration={500}
					as={Link} 
					>Servicios</LinkChakra>
			<LinkChakra>Clientes</LinkChakra>
			<LinkChakra>Contacto</LinkChakra>
		</Flex>
	)
  }