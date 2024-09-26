import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, Box, Heading, Text, List, ListItem, Button } from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import styled from 'styled-components';

// Styled components for additional styling
const ServiceContainer = styled(Box)`
  background-color: #1a202c; /* gray.900 */
  color: #f7fafc; /* gray.100 */
  padding: 3rem 1.5rem;
  position: relative; /* To position pseudo-elements */
  overflow: hidden; /* Ensure dots don't overflow */
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  color: #ffd700; /* gold.400 */
  font-size: 3xl; /* Consistent heading size */
  margin-bottom: 1rem;
`;

const StyledText = styled(Text)`
  max-width: 600px;
  line-height: 1.8;
  color: #e2e8f0; /* gray.300 */
  margin-bottom: 2rem; /* Space below text */
`;

const StyledList = styled(List)`
  text-align: left;
`;

const GalleryButton = styled(Button)`
  color: #1a202c; /* gray.900 */
  border-color: #ffd700; /* gold.400 */
  &:hover {
    background-color: #ffd700; /* gold.400 */
    color: #1a202c; /* gray.900 */
  }
`;

// Dots and Shapes
const BackgroundShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevent interference with clicks */
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: white;
    opacity: 0.2;
  }
  &::before {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
  }
  &::after {
    width: 150px;
    height: 150px;
    bottom: 10%;
    right: 10%;
  }
`;

const Service = () => {
  return (
    <ServiceContainer>
      <BackgroundShape />
      <VStack maxW="1200px" mx="auto" spacing={12} position="relative" zIndex={1}>
        <StyledHeading as="h2" fontSize="4xl">
          Welcome to Pioneer Filmz
        </StyledHeading>
        <StyledText fontSize="lg">
          At Pioneer Filmz, we craft compelling stories that inspire, educate, and captivate audiences. As a leading video production company, we specialize in creating high-quality documentary films, corporate films, ad films, promotional videos, and other creative content that brings your vision to life.
        </StyledText>

        {/* Alternating Sections */}
        <VStack align="start" spacing={6} width="100%">
          <VStack align="start" spacing={2} width="100%">
            <StyledHeading as="h3">Our Mission</StyledHeading>
            <StyledText fontSize="lg">
              Our mission is to deliver exceptional visual storytelling that resonates with your target audience. We believe in the power of film to transform perspectives, build brands, and drive results.
            </StyledText>
          </VStack>

          <VStack align="end" spacing={2} width="100%">
            <StyledHeading as="h3">Our Expertise</StyledHeading>
            <StyledList spacing={3} fontSize="lg">
              <ListItem>Documentary Films: Sharing real stories, inspiring change</ListItem>
              <ListItem>Corporate Films: Showcasing your brand, values, and vision</ListItem>
              <ListItem>Ad Films: Grabbing attention, driving sales</ListItem>
              <ListItem>Promotional Videos: Elevating your product, service, or event</ListItem>
              <ListItem>Explainer Videos: Simplifying complex ideas, engaging audiences</ListItem>
              <ListItem>Social Media Content: Engaging, informative, and shareable</ListItem>
            </StyledList>
          </VStack>
        </VStack>

        <VStack align="start" spacing={6} width="100%">
          <VStack align="start" spacing={2} width="100%">
            <StyledHeading as="h3">Our Team</StyledHeading>
            <StyledList spacing={3} fontSize="lg">
              <ListItem>Experienced directors and producers</ListItem>
              <ListItem>Skilled cinematographers and editors</ListItem>
              <ListItem>Creative scriptwriters and storytellers</ListItem>
              <ListItem>Innovative visual effects artists</ListItem>
            </StyledList>
          </VStack>

          <VStack align="end" spacing={2} width="100%">
            <StyledHeading as="h3">Why Choose Pioneer Filmz?</StyledHeading>
            <StyledList spacing={3} fontSize="lg">
              <ListItem>Unparalleled creativity and attention to detail</ListItem>
              <ListItem>Personalized service, tailored to your needs</ListItem>
              <ListItem>State-of-the-art equipment and technology</ListItem>
              <ListItem>Cost-effective solutions without compromising quality</ListItem>
              <ListItem>Timely delivery, meeting deadlines   </ListItem>
            </StyledList>
          </VStack>
        </VStack>

        {/* Call to Action: Gallery Link */}
        <Link to="/gallery">
          <GalleryButton size="lg" leftIcon={<FaPhotoVideo />}>
            View Our Gallery
          </GalleryButton>
        </Link>
      </VStack>
    </ServiceContainer>
  );
};

export default Service;
