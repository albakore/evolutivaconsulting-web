import { Flex, Image, Box, keyframes, HStack, VStack } from '@chakra-ui/react'
import Seccion from '../seccion/Seccion';
import React from 'react'
export default function ImageScroll() {
	const [isHover, setHover] = React.useState(false)

	const animationKeyframes = keyframes`
	0% { transform: translateX(0%); }
	100% { transform: translateX(-100%); }
	`;

	const animation = `${animationKeyframes} 7s linear infinite`;
  
	const listaImagenes = [
	  "https://picsum.photos/100",
	  "https://picsum.photos/102",
	  "https://picsum.photos/103",
	  "https://picsum.photos/104",
	  "https://picsum.photos/105",
	  "https://picsum.photos/106",
	  "https://picsum.photos/107",
	  "https://picsum.photos/108"
	]
  
	const lista = listaImagenes.map((imagen,index)=>{
		return <Image key={index} src={imagen} alt='imagen' />
	})
  
	return (
	  	<Seccion id="contacto">
		
				<HStack gap={0} position={'relative'} overflow={'hidden'}  >
					<Box pointerEvents={'none'} borderRadius={'3px'} w='100%' h={'100%'} top={0} left={0} zIndex={200} position={'absolute'} background={'linear-gradient(to right, #ffff, transparent, transparent, #ffff)'} boxShadow='0px 0px 0px 0px white outset'></Box>
					
					<HStack onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} gap={0} flexShrink={0} animation={animation} sx={isHover && {animationPlayState:'paused'}}>
						{lista}
					</HStack>
					<HStack onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} gap={0} flexShrink={0} animation={animation} sx={isHover && {animationPlayState:'paused'}}>
						{lista}
					</HStack>
					<HStack onMouseLeave={()=>{setHover(false)}} onMouseEnter={()=>{setHover(true)}} gap={0} flexShrink={0} animation={animation} sx={isHover && {animationPlayState:'paused'}}>
						{lista}
					</HStack>
					
				</HStack>

  
	  	</Seccion>
	);
  };
