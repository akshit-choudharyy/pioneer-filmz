import React from 'react';
import { Link } from 'react-router-dom';
import {
  HStack,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";

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
    lineHeight: '1.8', // Increased line height for better readability
    textAlign: 'justify', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',// Justify text for symmetrical alignment
    color: '#555',
  };

  return (
    <div style={serviceStyle}>
      <h2 style={headerStyle}>Welcome to Pioneer Filmz</h2>
      
      {/* Description Paragraph */}
      <p style={descriptionStyle}>
        There are more than 100 film production companies in the capital region, 
        but when it comes to professionalism, Pioneer Filmz has set a benchmark 
        that is hard to match. It is the leading video and film production company 
        by far. They have expertise in the production of documentary films, corporate 
        films, ad films, promotional videos, and all other types of creative videos.
      </p>

      <p style={descriptionStyle}>
        The team comprises highly skilled professionals who are always on their toes, 
        ready to provide the best service. For more details, visit{" "}
        <a href="https://pioneerfilmz.com/" target="_blank" rel="noopener noreferrer">
          https://pioneerfilmz.com/
        </a>.
      </p>
      
      <br />

      <p style={descriptionStyle}>
        Explore various documentaries and videos in our gallery section.
      </p>

      <br />

      {/* Link to Gallery */}
      <Link to="/gallery">
        <HStack justify="center" spacing={2}>
          <FaPhotoVideo /> <Text>Gallery</Text>
        </HStack>
      </Link>
    </div>
  );
};

export default Service;
