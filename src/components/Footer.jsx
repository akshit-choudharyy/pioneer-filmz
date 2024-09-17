// Footer.jsx
import { HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <VStack mt={8}>
      <VStack p={4} w={'full'}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3247051403832!2d77.3753088752886!3d28.6200288756716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b8d63a3a27%3A0x18e545962ec82d44!2sPioneer%20Filmz%20-%20Best%20Video%20%26%20Corporate%20Film%20Makers%20Production%20House%20Companies%20in%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1726567117649!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{
            border: 'none',
            borderRadius: '12px', // Adding rounded corners
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding box shadow
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </VStack>
      
      <Stack 
        direction={['column', 'row']} 
        textColor={'white'} 
        w={'full'} 
        p={4} 
        alignItems={'center'} 
        justifyContent={'space-around'} 
        backgroundImage={'url("https://img.freepik.com/free-photo/painted-solid-concrete-wall-textured-background_53876-101652.jpg?t=st=1726567716~exp=1726571316~hmac=317a857617342040a5e83bed58a2cf699f68ef6bf605f2e5494746ab716fd4ce&w=996")'}
        backgroundSize="cover"
       // Adding rounded corners to the background
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)" // Adding box shadow
      >
        <VStack alignItems={'center'} justifyContent={'center'}>
          <Heading>Pioneer Filmz</Heading>
          <Text textAlign={'center'} w={['100%', '60%']}>
            📍 Noida Sector 63, A Block, 142
          </Text>
        </VStack>

        <VStack alignItems={'center'} justifyContent={'center'}>
          <Heading>Contacts</Heading>
          <Text textAlign={'center'}>
            <b>📨</b> info@pioneerfilmz.com
          </Text>
          <Text textAlign={'center'}>
            <b>📞</b> 7303393016
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Footer;
