import { Flex, Image, Box, keyframes, HStack, VStack } from '@chakra-ui/react'
import Seccion from '../seccion/Seccion';
import React from 'react'

export default function ImageScroll() {

	const animationKeyframes = keyframes`
	0% { transform: translateX(0%); }
	100% { transform: translateX(-100%); }
	`;

	const animation = `${animationKeyframes} 5s linear infinite`;
  
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
		<HStack overflow={'hidden'}  gap={0}>
			<HStack gap={0} flexShrink={0} animation={animation}>
				{lista}
			</HStack>
			<HStack gap={0} flexShrink={0} animation={animation}>
				{lista}
			</HStack>
			<HStack gap={0} flexShrink={0} animation={animation}>
				{lista}
			</HStack>
			
		</HStack>
  
	  </Seccion>
	);
  };
