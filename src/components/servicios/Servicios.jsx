import React from 'react'
import Seccion from "@/components/seccion/Seccion"
import ItemServicio from "@/components/seccion/Servicios"
import { Text, HStack, VStack, Flex,Box, StackDivider,Divider } from "@chakra-ui/react"

export const Servicios = () => {
  return (
    <>
    <Seccion id='servicios'>
        <Text fontSize={{base:'3rem',md:'6xl', lg:'6xl'}}  align='center' fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'} textShadow={'0 4px 10px #91919147'}>
            SERVICIOS
        </Text>
      </Seccion>

      <ItemServicio 
        
        numero='01'
        titulo='Construcción de Marca'
        >
          <Text> Investigación de mercado y posicionamiento.  </Text>
          <Text> Diferenciación y valor agregado </Text>
      </ItemServicio>
      
      <ItemServicio 
        color={'cyan.50'}
        numero='02'
        titulo='Marketing Digital'
        >
          <Text> Content manager  </Text>
          <Text> Planificación estratégica creativa, seguimiento y métricas. </Text>
          <Text> Meta Ads. </Text>
          <Text> Google Ads. </Text>
          <Text> Twitter Ads. </Text>
          <Text> Linkedin Ads. </Text>
      </ItemServicio>
      
      <ItemServicio 
        numero='03'
        titulo='Sitios Web'
        >
          <Text> Desarrollo web. </Text>
          <Text> Posicionamiento SEM. </Text>
          <Text> Posicionamiento SEO. </Text>
      </ItemServicio>
      
      <ItemServicio 
        color={'cyan.50'}
        numero='04'
        titulo='CRM'
        >
          <Text> Construcción de base de datos. </Text>
          <Text> Campaña de email marketing. </Text>
          <Text> Aumentar las ventas. </Text>
          <Text> Retencion de clientes. </Text>
      </ItemServicio>
      
      <ItemServicio 
        numero='05'
        titulo='Coaching'
        >
          <Text> Análisis de discurso. </Text>
          <Text> Técnica discursiva. </Text>
      </ItemServicio>
      
      <ItemServicio
        color={'cyan.50'}
        numero='06'
        titulo='Capacitaciones'
        >
          <Text> Redes sociales. </Text>
          <Text> Coaching. </Text>
      </ItemServicio>
      
      <ItemServicio 
        numero='07'
        titulo='Comunicación estratégica'
        >
          <Text> Diseño de mensajes políticos efectivos y elaboración de discursos y comunicados de prensa. </Text>
      </ItemServicio>
    </>
  )
}
