import React from 'react'
import Seccion from "@/components/seccion/Seccion"
import { Text, HStack, VStack, Flex,Box, StackDivider,Divider,Link, Image } from "@chakra-ui/react"

export const Contacto = () => {
  return (
    <div>

    <Seccion id="contacto">
        <Flex direction={{base:'column', md:'row'}} alignItems={'center'} gap='3' justifyContent={'center'} >
          <Text 
          fontSize={{base:'4xl',md:'5xl'}} 
          fontWeight={800} 
          lineHeight={{base:'38px', md:'46px'}} 
          textTransform={'uppercase'} 
          w={{base:'auto',md:'800px'}}>
          Contacto
          </Text>

          <HStack>
            <Link target='_blank' width={'fit-content'} margin={0} href="https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola+NSB%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0" mr={2}>
                <Image width={6} height={6} margin={0} src={'logos/whatsapp.svg'} alt='whatsapp' />
            </Link>
            <Text 
            fontSize={{base:'1xl',md:'2xl'}} 
            fontWeight={800} 
            lineHeight={{base:'38px', md:'46px'}} 
            textTransform={'uppercase'} 
            w={{base:'auto',md:'800px'}}>
            +54 11 3565 4619 
            </Text>
            
          </HStack>
        
        </Flex>
        
    </Seccion>

     
      </div>
  )
}
