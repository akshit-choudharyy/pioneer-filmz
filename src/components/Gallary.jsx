// Gallery.jsx
import React from 'react';
import { Box, Image, Link, Tooltip } from '@chakra-ui/react';

// List of YouTube video links
const videoLinks = [
  { url: 'https://youtu.be/CztfLp8Wfr0?si=ZclVbFzX51tM-oW2' },
  { url: 'https://youtu.be/Ur-UCw-Mc-c?si=pWVLymR3YskVep4v' },
  { url: 'https://youtu.be/tKdI3kvHZJY?si=wGI6kmN-3ttECiDD' },
  { url: 'https://youtu.be/fZtXYXBEIn4?si=EEQho5CqSyHGIofy' },
  { url: 'https://youtu.be/62qLt6X1AK0?si=dJwYaCqsD6LRnbuE' },
  { url: 'https://youtu.be/1tGEAeUqcMo?si=Pjz3R1aORdKSbxOl' },
  { url: 'https://youtu.be/xS395MclPis?si=b9mFIXNZnsuBgmyu' },
  { url: 'https://youtu.be/rOhCw08a8gs?si=5-XXR1fH_kbd-uPR' },
  { url: 'https://youtu.be/FkWSRGvgz4Y?si=jJ8tGL7A_vzeUort' },
];

// Extract video ID from shortened URL
const getVideoId = (url) => {
  const match = url.match(/youtu\.be\/([^?]+)/);
  return match ? match[1] : null;
};

// Generate thumbnail URL
const getThumbnailUrl = (videoId) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const Gallery = () => {
  return (
    <Box p={4} maxW="1400px" mx="auto" overflowY="scroll" height="80vh" marginTop="100px">
      <Box display="flex" flexDirection="column" gap={2}>
        {videoLinks.map((video, index) => {
          const videoId = getVideoId(video.url);
          if (!videoId) return null;

          return (
            <Box 
              key={index} 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              marginTop="85px" // Set marginTop for spacing
              boxShadow="none" // Remove outer box shadow
              borderRadius="md" // Rounded corners
              p={4}
              bg="white" // Background color for better contrast
            >
              <Link href={video.url} isExternal>
                <Tooltip label="Watch Video" aria-label="Watch Video">
                  <Box 
                    position="relative"
                    borderRadius="md"
                    boxShadow="lg" // Apply shadow directly to the video
                  >
                    <Image
                      src={getThumbnailUrl(videoId)}
                      alt={`Video Thumbnail ${index + 1}`}
                      borderRadius="md"
                      boxShadow="md"
                      width="100%" 
                      height="auto"
                      maxW="800px"
                      objectFit="cover"
                      _hover={{ transform: 'scale(1.05)' }}
                      transition="transform 0.3s"
                    />
                  </Box>
                </Tooltip>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Gallery;
