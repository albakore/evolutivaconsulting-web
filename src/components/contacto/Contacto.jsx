import React from "react";
import Seccion from "@/components/seccion/Seccion";
import {Text,VStack,Flex,Link,Image, Button} from "@chakra-ui/react";

export const Contacto = () => {

//url, logo, texto, color, color de fuente
  const contactos = {
    "whatsapp" : 
    ['https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola+NSB%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0',
    'logos/whatsapp.svg', '+54 11 3565 4619','green.300','#000'],

    'linkedin' : [
      'https://www.linkedin.com/company/evolutiva-consulting/about/','logos/linkedin.svg','evolutiva consulting','blue.400','#000'
    ],

    'email' : [
      'mailto:consultingevolutiva@consultingevolutiva.com', 'logos/mail.svg', 'evolutivaconsulting@mail.com','yellow.400','#000'
    ]
  }

  return (
    <Seccion id="contacto">
      <Text height={"max-content"} fontSize={{ base: "2.5rem", md: "6xl", lg: "6xl" }} align="center" fontWeight={800} lineHeight={"40px"} textTransform={"uppercase"} textShadow={"0 4px 10px #91919147"}
      >
        CONTACTO
      </Text>

      <Seccion id="contacto">
        <Flex direction={{ base: "column", md: "row" }} alignItems={"center"} gap="3" justifyContent={"center"}
        >
          <VStack>
            
            {Object.keys(contactos).map((redSocial)=>(
              (  
                 <Button as={Link}  variant={'outline'}  colorScheme={'twitter'} padding={"15px"} borderRadius={"3px"} display="flex" alignItems={"center"} justifyContent={'center'} target="_blank" width={{base: "300px", md: '500px', lg:'700px'}} margin={0} href={contactos[redSocial][0]} mr={2}>
                    <Image width={7} height={7} margin={1} src={contactos[redSocial][1]} alt={contactos[redSocial]}
                    />
                    <Text  fontSize={{ base: '2xs', md: "2xl" }} fontWeight={800} lineHeight={{ base: "38px", md: "46px" }} textTransform={"uppercase"} w={{ base: "auto" }}
                    >
                      {contactos[redSocial][2]}
                    </Text>
                  </Button>
              )
            ))}
            
          </VStack>
        </Flex>
      </Seccion>

    </Seccion>
  );
};
