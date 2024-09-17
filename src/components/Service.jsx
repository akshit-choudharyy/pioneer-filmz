// Service.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Image,
  HStack,
  Text,
  Heading,
  VStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  FaDashcube,
  FaHome,
  FaInfoCircle,
  FaLocationArrow,
  FaLock,
  FaPhone,
  FaPhotoVideo,
  FaSearchLocation,
  FaSignOutAlt,
} from "react-icons/fa";

// Define the Service component
const Service = () => {
  // Styles for the service container
  const serviceStyle = {
    padding: '40px',
    backgroundColor: 'white',
   
    maxWidth: '1200px',
    margin: '20px auto',
    textAlign: 'center',
  };

  // Styles for the header
  const headerStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    color: '#333',
  };

  // Styles for the description text
  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    color: '#555',
  };
  return (
    <div style={serviceStyle}>
      <h2 style={headerStyle}>Welcome to Pioneer Filmz</h2>
      <p style={descriptionStyle}>
      There aremore than 100 film production companies in the capital region, but when itcomes to professionalism, Pioneer Filmz have set a benchmark hard to match. Itis the video production and film production company byfar. They have expertise in production of Documentary films, corporatefilms and Ad films, promotional videos and all other type ofcreative videos. They have a team of highly skilled professionals, who arealways on their toes to provide the best service. More details visit https://pioneerfilmz.com/
      </p>
      <br/>
      <p  style={descriptionStyle}>There are various Documentries and videos links over the shadow on the gallery</p>
        <br/>
      <Link to="/gallery">
                <HStack mx={400} >
                  <FaPhotoVideo /> <Text>Gallery</Text>
                </HStack>{" "}
      </Link>
    </div>
  );
};

// Export the Service component as default
export default Service;
