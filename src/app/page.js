'use client'

import { Text, HStack, VStack, Flex,Box, StackDivider,Divider } from "@chakra-ui/react"
import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Seccion from "@/components/seccion/Seccion"
import Footer from "@/components/footer/Footer"
import ItemServicio from "@/components/seccion/Servicios"

export default function Home() {
  return (
    <Box as={'main'} mt={{base: '80px', lg:'115px'}} style={{overflow:'hidden'}}>
      <Navbar maxWidth={{base: '6xl', lg: '100%'}} />

      <Hero id='inicio'/>

      

      <Seccion  id="quienesSomos">
        <Flex direction={{base:'column', md:'row'}} alignItems={'center'} gap='3' justifyContent={'center'} >
          <Text 
          fontSize={{base:'4xl',md:'5xl'}} 
          fontWeight={800} 
          lineHeight={{base:'38px', md:'46px'}} 
          textTransform={'uppercase'} 
          w={{base:'auto',md:'800px'}}>
          Somos especialistas en marketing y comunicación política
          </Text>
          <Text fontSize={'1xl'} fontWeight={400}  w={{base:'auto',md:'800px',lg:'1000px'}}> 
          Ofrecemos servicios que incluyen asesoramiento en redes sociales, 
          publicidad estratégica y coaching político. Desde una mirada y un 
          know-how integral en el desarrollo de marcas y campañas publicitarias, 
          resolvemos cada problema de comunicación de nuestros clientes con un enfoque único, 
          ejecutando acciones creativas en diversos formatos y medios,trabajando en equipo.
          Nuestra experiencia en campañas electorales y estrategias personalizadas ayudan a 
          los clientes a alcanzar sus metas políticas y de comunicación. Si buscas potenciar 
          tu presencia en este ámbito, somos tu aliado estratégico.

          </Text>
        </Flex>
        
      </Seccion>
      <Divider borderColor='gray.300' />

      

      <Seccion id='porqueNosotros'>
        <VStack justifyContent={'start'} alignItems={'start'}>
          <Text fontSize={'4xl'} fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'}>
          ¿Porque Nosotros?
          </Text>
          <Text fontSize={'1xl'} fontWeight={400}> 
          Ofrecemos servicios que incluyen asesoramiento en redes sociales, 
          publicidad estratégica y coaching político. Desde una mirada y un 
          know-how integral en el desarrollo de marcas y campañas publicitarias, 
          resolvemos cada problema de comunicación de nuestros clientes con un enfoque único, 
          ejecutando acciones creativas en diversos formatos y medios,trabajando en equipo.
          Nuestra experiencia en campañas electorales y estrategias personalizadas ayudan a 
          los clientes a alcanzar sus metas políticas y de comunicación. Si buscas potenciar 
          tu presencia en este ámbito, somos tu aliado estratégico.

          </Text>
        </VStack>
        
      </Seccion>

      <Divider borderColor='gray.300' />
      
      <Seccion id='servicios'>
        <Text fontSize={{base:'3rem',md:'6xl', lg:'6xl'}}  align='center' fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'} textShadow={'0 4px 10px #91919147'}>
            SERVICIOS
        </Text>
      </Seccion>

      <ItemServicio 
        
        numero='01'
        titulo='Construcción de Marca.'
        >
          <Text> Investigación de mercado y posicionamiento.  </Text>
          <Text> Diferenciación y valor agregado </Text>
      </ItemServicio>
      
      <ItemServicio 
        color={'cyan.50'}
        numero='02'
        titulo='Marketing Digital.'
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
        titulo='Sitios Web.'
        >
          <Text> Desarrollo web. </Text>
          <Text> Posicionamiento SEM. </Text>
          <Text> Posicionamiento SEO. </Text>
      </ItemServicio>
      
      <ItemServicio 
        color={'cyan.50'}
        numero='04'
        titulo='CRM.'
        >
          <Text> Construcción de base de datos. </Text>
          <Text> Campaña de email marketing. </Text>
          <Text> Datos inteligentes. </Text>
          <Text> Proyección. </Text>
          <Text> Aumentar las ventas. </Text>
          <Text> Conseguir mas clientes. </Text>
          <Text> Retencion de clientes. </Text>
      </ItemServicio>
      
      <ItemServicio 
        numero='05'
        titulo='Coaching.'
        >
          <Text> Análisis de discurso. </Text>
          <Text> Técnica discursiva. </Text>
      </ItemServicio>
      
      <ItemServicio
        color={'cyan.50'}
        numero='06'
        titulo='Capacitaciones.'
        >
          <Text> Redes sociales. </Text>
          <Text> Coaching. </Text>
      </ItemServicio>
      
      <ItemServicio 
        numero='07'
        titulo='Comunicación estratégica.'
        >
          <Text> Diseño de mensajes políticos efectivos y elaboración de discursos y comunicados de prensa. </Text>
      </ItemServicio>

      <Footer />
      
    </Box>
  )
}
