import React from "react";
import {Text,Flex,Link,Image, Button, HStack} from "@chakra-ui/react";

export const Contacto = () => {

//url, logo, texto, color, color de fuente
  const contactos = {
    "whatsapp" : 
    ['https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola+NSB%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0',
    'logos/whatsapp.svg', 'Whatsapp'],

    'linkedin' : [
      'https://www.linkedin.com/company/evolutiva-consulting/about/','logos/linkedin.svg','Linkedin'
    ],

    'pink' : [
      'https://www.linkedin.com/company/evolutiva-consulting/about/','logos/instagram.svg','Instagram'
    ],

    'facebook' : [
      'https://www.linkedin.com/company/evolutiva-consulting/about/','logos/facebook.svg','Facebook'
    ],

    'orange' : [
      'mailto:consultingevolutiva@consultingevolutiva.com', 'logos/mail.svg', 'Mail'
    ]
  }

  return (

    
        
          <HStack flexDir={{base:'column', md:'row'}} gap={0}>
            
            {Object.keys(contactos).map((redSocial, index)=>(
              (  
                 <Button display={'flex'} flexDir={{base:'row', md:'column', lg:'row'}} h={'100px'} as={Link}  key={index} colorScheme={redSocial} borderRadius={"0px"} alignItems={"center"} justifyContent={'center'} target="_blank" width={{base: "100vw", md: '500px', lg:'700px'}}  href={contactos[redSocial][0]} >
                    <Image w={{base: 10, md: 10}} sx={{filter:'invert(1)'}} height={{base: 10, md: 12}} margin={1} src={contactos[redSocial][1]} alt={contactos[redSocial]}
                    />
                    <Text fontSize={{ base: '2xl', md: "2xl" }} fontWeight={800} lineHeight={{ base: "38px", md: "46px" }} w={{ base: "auto" }}
                    >
                      {contactos[redSocial][2]}
                    </Text>
                  </Button>
              )
            ))}
            
          </HStack>
      
  
  );
};
