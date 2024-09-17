import { Flex, HStack, Heading, Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'


const Brands = () => {
  return (
   <VStack spacing={4} padding={8}  width="100%">
    <Heading w={'full'} textAlign={'center'} padding={4} bgColor={'#fdba74'} rounded={'lg'} letterSpacing={'widest'}>Brands We Sell</Heading>
    <HStack w={['100%','90%']} spacing={[4,8]} overflowX={'scroll'} overflowY={'hidden'}   flexWrap={'nowrap'} >
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/centurylaminates.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal'  rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/centuryply.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/greenlam.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal'  rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/sainik710.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/timedecor.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/timedecor.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/fevicol.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://uniquetimberplywood.com/wp-content/themes/UniqueTimber/assets/images/brands/jivanjor.png'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://mpghardware.com/img/clients/l1.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    <Image src={'https://mpghardware.com/img/clients/l2.jpg'} height={[16,32]} width={[16,32]} objectFit={'contain'} shadow={'xl'} className='homegal' rounded={'lg'}/>
    </HStack>
   </VStack>
  )
}

export default Brands
