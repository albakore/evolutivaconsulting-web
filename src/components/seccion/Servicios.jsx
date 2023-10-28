import React from 'react'
import Seccion from './Seccion'
import { Flex,Text,HStack,VStack,StackDivider } from '@chakra-ui/react'

export default function ItemServicio({numero,titulo, children, color}) {
  return (
	<Seccion hoverColor={{bg:'cyan.100',transition:'background 0.3s ease'}} color={color}>
        <Flex 
        
		direction={{base:'column',lg:'row'}} 
		justifyContent={{base:'center',lg:'start'}} 
		alignItems={{base:'start',md:'center',lg:'start'}} 
		gap={5}
		>

          <HStack alignItems={'end'} justifyContent={{base:'start',lg:'start'}}  w={{base:'100%',lg:'50%'}}>
            <Text fontSize={{base:'3rem',md:'5rem',lg:'8rem'}} letterSpacing={{base:0, md:-15}} fontWeight={200} lineHeight={{base:'55px',md:'107px'}} color={'blue.300'} textShadow={'0 4px 10px'} mr={{base:2, md: 5}}>{numero}</Text>
            <Text fontSize={{base:'28px', md:'3xl',lg:'4xl'}} fontWeight={600} lineHeight={'40px'} pr='10px' textTransform={'uppercase'}>{titulo}</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={{base:'center',lg:'start'}} alignItems={'start'} w={{base:'100%', lg:'50%'}} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='cyan.900' />}>
            {children}
          </VStack>

        </Flex>
        
	</Seccion>
  )
}
