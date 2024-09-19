import React from "react";
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
import { Link } from "react-router-dom";
import sls from "../images/sls.png";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Stack direction={['column','row']} p={'8'} spacing={4} >
        <Link to="/">
          <Heading fontSize={'lg'}>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕱𝖎𝖑𝖒𝖟
          </Heading>
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
          <HStack mx={4} className="navlink">
          <FaPhotoVideo /> <Text>Gallery</Text>
          </HStack>{" "}
        </Link>
        <Link to="/contact">
          <HStack mx={4} className="navlink">
            <FaPhone /> <Text>Contact Us</Text>
          </HStack>{" "}
        </Link>
      </Flex>
      {/* Hamburger menu for mobile */}
      <Box mr={4} display={["flex", "none"]}>
        <MdMenu size={36} onClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent fontSize={'24'} textColor={'white'} style={{backgroundColor:'rgba(0,0,0,0.6)'}} >
          <DrawerCloseButton fontSize={'24'} />
          <DrawerHeader>
           <Heading textColor={'white'} fontSize={'md'}>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕱𝖎𝖑𝖒𝖟
           </Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={12} onClick={onClose}>
              <Link to="/">
                <HStack mx={4}  className="navlink">
                  <FaHome /> <Text>Home</Text>
                </HStack>{" "}
              </Link>
              <Link to="/aboutus">
                <HStack mx={4} className="navlink">
                  <FaInfoCircle /> <Text>About Us</Text>
                </HStack>{" "}
              </Link>
              <Link to="/gallery">
                <HStack mx={4} className="navlink">
                  <FaPhotoVideo /> <Text>Gallery</Text>
                </HStack>{" "}
              </Link>
              https://images.pexels.com/photos/1595241/pexels-photo-1595241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
              <Link to="/contact">
                <HStack mx={4} className="navlink">
                  <FaPhone /> <Text>Contact Us</Text>
                </HStack>{" "}
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
