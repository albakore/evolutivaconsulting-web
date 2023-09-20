import React from 'react'
import Seccion from './Seccion'
import { Flex,Text,HStack,VStack,StackDivider } from '@chakra-ui/react'

export default function ItemServicio({numero,titulo, children, color}) {
  return (
	<Seccion color={color}>
        <Flex 
		direction={{base:'column',lg:'row'}} 
		justifyContent={{base:'center',lg:'start'}} 
		alignItems={{base:'start',md:'center',lg:'start'}} 
		gap={5}
		>

          <HStack alignItems={'end'} justifyContent={{base:'start',lg:'start'}}  w={{base:'100%',lg:'50%'}}>
            <Text fontSize={{base:'5rem',md:'5rem',lg:'8rem'}} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'blue.300'} textShadow={'0 4px 10px'} mr={5}>{numero}</Text>
            <Text fontSize={{base:'30px', md:'3xl',lg:'4xl'}} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}>{titulo}</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={{base:'center',lg:'start'}} alignItems={'start'} w={{base:'100%', lg:'50%'}} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='cyan.900' />}>
            {children}
          </VStack>

        </Flex>
        
	</Seccion>
  )
}
