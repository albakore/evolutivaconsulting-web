'use client'

import { Text, HStack, VStack, Flex,Box, StackDivider,Divider } from "@chakra-ui/react"
import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Seccion from "@/components/seccion/Seccion"
import Footer from "@/components/footer/Footer"

export default function Home() {
  return (
    <main  >
      <Navbar />

      <Hero id='inicio'/>

      <Box overflowY={'scroll'} scrollBehavior={'smooth'}>

      <Seccion>
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

      <Divider borderColor='gray.200' />
      
      <Seccion id='servicios'>
        <Text fontSize={'6xl'}  align='center' fontWeight={800} lineHeight={'40px'} textTransform={'uppercase'} textShadow={'0 4px 10px #91919147'}>
            SERVICIOS
        </Text>
      </Seccion>

      <Seccion>
        <Flex direction={{base:'column',lg:'row'}} justifyContent={{base:'center',lg:'start'}} alignItems={{base:'start',md:'center',lg:'start'}} gap={5} divider={<StackDivider borderColor='gray.200' />}>


          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>01</Text>

          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}>Construcción de Marca.</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'center'} alignItems={'start'} w={{md:'auto', lg:'50%'}} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Investigación de mercado y posicionamiento.  </Text>
            <Text> Diferenciación y valor agregado </Text>
          </VStack>
          
        </Flex>
        
      </Seccion>
      
      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>02</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}>Marketing Digital</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Content manager  </Text>
            <Text> Planificación estratégica creativa, seguimiento y métricas. </Text>
            <Text> Meta Ads. </Text>
            <Text> Google Ads. </Text>
            <Text> Twitter Ads. </Text>
            <Text> Linkedin Ads. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>

      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>03</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}>Sitios Web</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Desarrollo web. </Text>
            <Text> Posicionamiento SEM. </Text>
            <Text> Posicionamiento SEO. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>


      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>04</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}> CRM</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Construcción de base de datos. </Text>
            <Text> Campaña de email marketing. </Text>
            <Text> Datos inteligentes. </Text>
            <Text> Proyección. </Text>
            <Text> Aumentar las ventas. </Text>
            <Text> Conseguir mas clientes. </Text>
            <Text> Retencion de clientes. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>

      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>05</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}> Coaching</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Análisis de discurso. </Text>
            <Text> Técnica discursiva. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>
      
      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>06</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}> Capacitaciones</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Redes sociales. </Text>
            <Text> Coaching. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>
      
      <Seccion>
        <HStack justifyContent={'start'} alignItems={'start'} gap={0} divider={<StackDivider borderColor='gray.200' />}>

          <HStack alignItems={'end'}  w={'50%'}>
          <Text fontSize={'8rem'} letterSpacing={-15} fontWeight={200} lineHeight={'107px'} color={'teal.400'} marginRight={5} textShadow={'0 4px 10px'}>07</Text>
          <Text  fontSize={'4xl'} fontWeight={600} lineHeight={'40px'} textTransform={'uppercase'}> Comunicación estratégica</Text>
          </HStack>

          <VStack gap={0} fontSize={'xl'} justifyContent={'start'} alignItems={'start'} w={'50%'} paddingInline={10} fontWeight={400} divider={<StackDivider borderColor='gray.200' />}>
            <Text> Diseño de mensajes políticos efectivos y elaboración de discursos y comunicados de prensa. </Text>
          </VStack>
          
        </HStack>
        
      </Seccion>
      </Box>

      <Footer />
      
    </main>
  )
}
