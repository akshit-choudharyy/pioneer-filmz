import { Center, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';

// Import your local assets
import abstar from '../assets/abstar.png';
import bbriyani from '../assets/Badshah Biryani_5.4.png';
import devdigital from '../assets/DEV DIGITAL LOGO.png';
import fm from '../assets/FM_News_Logo.png';
import aun from '../assets/AUN Logo_1.jpg';
import karim from '../assets/KARIM_LOGO_3.png';
import spice from '../assets/spize2.jpg';
import spiceofchina from '../assets/spize barbeque.png';
import  arogya from '../assets/11_Png.png';
import  green from '../assets/Green_Energy_1_PNG_final.png';
import  whw from '../assets/WHW_LOGO_6.6.png';
import  captain from '../assets/Captain Wong 1 png.png';
import  lafit from '../assets/LA FITNESSE LOGO.jpg';
import  pnews from '../assets/P-NEWS-2.png';
import  tome from '../assets/TO-ME TASTE OF MIDDLE EAST.png';
import  pioneerventure from '../assets/Pioneer Ventures LOGO.png';


const Brands = () => {
  return (
    <VStack spacing={5} padding={8} width="100%">
      <Heading
        w={'full'}
        textAlign={'center'}
        padding={4}
        rounded={'lg'}
        letterSpacing={'widest'}
      >
        Brands We Worked With!
      </Heading>
      <Grid
        w={['100%', '80%']}
        templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
        justifyItems="center" // Center horizontally
        alignItems="center"
      >
        <Image
          src={abstar}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          padding={4}
          border="2px solid yellow"
        />
        <Image
          src={bbriyani}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          
          background={'black'}
          border="2px solid yellow"
        />
        <Image
          src={devdigital}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={fm}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={aun}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          padding={2}
          border="2px solid yellow"
        />
        <Image
          src={pnews}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={arogya}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={spice}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={karim}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={lafit}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={spiceofchina}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={green}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={whw}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={captain}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={tome}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={pioneerventure}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        

      </Grid>
    </VStack>
  );
};

export default Brands;
