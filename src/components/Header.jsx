import React, { useState, useEffect, useRef } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import {
  FaPhotoVideo,
  FaPhone,
  FaVolumeUp,
  FaVolumeMute,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import pflogo from "../images/pflogo.png";
import { MdMenu } from "react-icons/md";
import bgMusic from '../assets/bgmusix.mp3'; // Import the audio file

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Audio playback state and control
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(bgMusic)); // Use useRef to manage audio instance

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch(err => console.error("Error playing audio:", err));
      audio.loop = true;
    } else {
      audio.pause();
    }

    return () => {
      audio.pause(); // Clean up audio when unmounted
    };
  }, [isPlaying]);

  // Toggle audio function
  const toggleAudio = () => {
    setIsPlaying(prev => !prev);
  };

  const headerStyle = {
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)", // Adjust the pixel value as needed
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      borderColor="gray.200"
      position="fixed"
      top="0"
      w="full"
      zIndex="1"
      style={headerStyle}
    >
      <Stack direction={['column', 'row']} p={'8'}>
        <Link to="/">
          <Image src={pflogo} alt="Pioneer Filmz Logo" width="100px" height="35px" objectFit="cover" />
        </Link>
      </Stack>

      {/* Navigation links */}
      <Flex       
        display={{ base: "none", md: "flex" }}
        mr={8}
        fontSize={"xl"}
        align="center"
      >
        <Link to="/gallery">
          <HStack mx = {4} className="navlink">
            <FaPhotoVideo /> <Text>Gallery</Text>
          </HStack>
        </Link>
        <Link to="/contact">
          <HStack mx={4} className="navlink">
            <FaPhone /> <Text>Contact Us</Text>
          </HStack>
        </Link>
      </Flex>

      {/* Audio control button */}
      <IconButton
        aria-label="Toggle audio"
        icon={isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        onClick={toggleAudio}
        mr={8}
      />
      
      {/* Hamburger menu for mobile */}
      <Box mr={4} display={["flex", "none"]}>
        <MdMenu size={36} onClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent fontSize={'24'} textColor={'white'} style={{backgroundColor:'rgba(0,0,0,0.6)'}} >
          <DrawerCloseButton fontSize={'24'} />
          <DrawerHeader>
            <Heading textColor={'white'} fontSize={'md'}>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕱𝖎𝖑𝖒𝖟</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={12} onClick={onClose}>
              <Link to="/">
                <HStack mx={4} className="navlink">
                  <FaHome /> <Text>Home</Text>
                </HStack>
              </Link>
              <Link to="/gallery">
                <HStack mx={4} className="navlink">
                  <FaPhotoVideo /> <Text>Gallery</Text>
                </HStack>
              </Link>
              <Link to="/contact">
                <HStack mx={4} className="navlink">
                  <FaPhone /> <Text>Contact Us</Text>
                </HStack>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
