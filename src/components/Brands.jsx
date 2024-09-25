import { Center, Grid, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';

const Brands = () => {
  return (
    <VStack spacing={5} padding={8} width="100%"    >
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
          src={
            'https://fmnewsindia.com/wp-content/uploads/2017/11/WhatsApp_Image_2024-01-21_at_10.50.29__1_-removebg-preview.png'
          }
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          padding={4}
          border="2px solid yellow"
        />
        <Image
          src={
            'https://media.licdn.com/dms/image/v2/C560BAQFupvVJz8cwAA/company-logo_200_200/company-logo_200_200/0/1630648085790/ab_star_news_logo?e=2147483647&v=beta&t=ygNGImAW652l1DP75pE3VCl-6gYOnn6gfke3HE-KRxc'
          }
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          padding={4}
          border="2px solid yellow"
        />
        <Image
          src={'https://spizeofchina.vercel.app/assets/logom-CBP5vSPw.png'}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={'https://pioneerventure.in/static/media/pioneer%20ventures.ebc4ecdb0f5a0a217404.png'}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          border="2px solid yellow"
        />
        <Image
          src={'https://i.ytimg.com/vi/h7W9z8hcdcA/sddefault.jpg'}
          height={[32, 40]}
          width={[32, 40]}
          objectFit={'contain'}
          shadow={'xl'}
          rounded={'lg'}
          padding={2}
          border="2px solid yellow"
        />
        <Image
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDAK_heEVt3NhEVljg-KbmNOeOdBUiq5Khw&s'}
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
