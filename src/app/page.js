'use client'
import { Text, HStack, VStack, Flex, Box, StackDivider, Divider } from "@chakra-ui/react"
import Navbar from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Seccion from "@/components/seccion/Seccion"
import Footer from "@/components/footer/Footer"
import { Servicios } from "@/components/servicios/Servicios"
import ImageScroll from "@/components/scroll/ImageScroll"
import DotBackground from "@/components/background/DotBackground"
import QuienesSomos from "@/components/quienesSomos/QuienesSomos"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { themeConfig } from '@/ThemeConfig'
export default function Home() {
    return (
        <ChakraProvider resetCSS theme={themeConfig}>


            <Box as={'main'} mt={{ base: '80px', lg: '115px' }} style={{ overflow: 'hidden' }}>
                <DotBackground />
                <Navbar maxWidth={{ base: '6xl', lg: '100%' }} />

                <Hero id='inicio' />

                <Seccion id="quienesSomos">
                    <Flex direction={{ base: 'column', md: 'row' }} alignItems={'center'} gap='3' justifyContent={'center'} >
                        <Text
                            fontSize={{ base: '4xl', md: '5xl' }}
                            fontWeight={800}
                            lineHeight={{ base: '38px', md: '46px' }}
                            textTransform={'uppercase'}
                            w={{ base: 'auto', md: '800px' }}>
                            Somos especialistas en marketing y comunicación política
                        </Text>
                        <Text fontSize={'1xl'} fontWeight={400} w={{ base: 'auto', md: '800px', lg: '1000px' }}>
                            Ofrecemos servicios de marketing y comunicación política de primera categoría.
                            Desde asesoramiento en redes sociales hasta publicidad estratégica y coaching político,
                            estamos aquí para resolver tus desafíos de comunicación de manera única y creativa.
                            Nuestra experiencia en campañas electorales y estrategias personalizadas te ayudará a
                            alcanzar tus metas políticas y de comunicación. Si buscas fortalecer tu presencia en este ámbito,
                            somos tu aliado estratégico.

                        </Text>
                    </Flex>

                </Seccion>
                <Divider borderColor='gray.300' />

                <QuienesSomos />

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

                <Servicios />

                <Divider borderColor='gray.300' />


                <Seccion id='clientes'>
                    <Text fontSize={'3xl'} textAlign={'center'}>Nuestros clientes</Text>

                    <ImageScroll></ImageScroll>
                </Seccion>
                <Footer />

            </Box>
        </ChakraProvider>
    )
}
