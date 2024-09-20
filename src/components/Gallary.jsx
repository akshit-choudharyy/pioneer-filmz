import React from 'react';
import { Box, Image, Link, Text, Tooltip } from '@chakra-ui/react';

// List of YouTube video links with additional metadata
const videoLinks = [
  { 
    url: 'https://youtu.be/CztfLp8Wfr0?si=ZclVbFzX51tM-oW2',
    title: 'Delhi’s Unstoppable TajSATS Kitchen | India’s Mega Kitchens | National Geographic',
    views: '1.2M views',
    date: '2 days ago',
  },
  { 
    url: 'https://youtu.be/Ur-UCw-Mc-c?si=pWVLymR3YskVep4v',
    title: 'Ferdinand Porsche - An Automotive Icon Documentary',
    views: '500K views',
    date: '1 week ago',
  },
  { 
    url: 'https://youtu.be/tKdI3kvHZJY?si=wGI6kmN-3ttECiDD',
    title: 'The Economy of Tomorrow | Aging Future | Documentary Economy',
    views: '900K views',
    date: '5 days ago',
  },
  { 
    url: 'https://youtu.be/fZtXYXBEIn4?si=EEQho5CqSyHGIofy',
    title: 'Business of Disaster (full documentary) | FRONTLINE',
    views: '1M views',
    date: '3 weeks ago',
  },
  { 
    url: 'https://youtu.be/62qLt6X1AK0?si=dJwYaCqsD6LRnbuE',
    title: 'KAVI - Oscar-Nominated Short Film (FULL FILM) | 100+ Festivals & 50+ Awards | India/Hindi',
    views: '300K views',
    date: '1 month ago',
  },
  { 
    url: 'https://youtu.be/1tGEAeUqcMo?si=Pjz3R1aORdKSbxOl',
    title: '7 Life-Changing Documentaries in Hindi and English | Must Watch Documentaries | Shiromani Kant',
    views: '1.5M views',
    date: '4 days ago',
  },
  { 
    url: 'https://youtu.be/xS395MclPis?si=b9mFIXNZnsuBgmyu',
    title: 'Ford vs Ferrari real story in Hindi | Story of revenge',
    views: '2M views',
    date: '2 months ago',
  },
  { 
    url: 'https://youtu.be/rOhCw08a8gs?si=5-XXR1fH_kbd-uPR',
    title: 'मेरे Teacher बनने की कहानी - Kumar Gaurav Sir @UTKARSHCLASSES13 Josh Talks Hindi',
    views: '3M views',
    date: '6 months ago',
  },
  { 
    url: 'https://youtu.be/FkWSRGvgz4Y?si=jJ8tGL7A_vzeUort',
    title: 'Parle G  A Heart Touching Success Story | Case Study | History | Worlds No.1 Biscuit | Live Hindi',
    views: '4M views',
    date: '1 year ago',
  },
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
    <Box p={4} maxW="1400px" mx="auto" overflowY="scroll" height="85vh" marginTop="85px" boxShadow="xl">
      <Box display="flex" flexDirection="column" gap={4}>
        {videoLinks.map((video, index) => {
          const videoId = getVideoId(video.url);
          if (!videoId) return null;

          return (
            <Box 
              key={index} 
              display="flex" 
              flexDirection={{ base: "column", md: "row" }} // Responsive direction
              gap={4} 
              p={4} 
              alignItems="flex-start" 
              boxShadow="md" 
              borderRadius="md" 
              bg="white"
            >
              {/* Video Thumbnail */}
              <Link href={video.url} isExternal>
                <Tooltip label="Watch Video" aria-label="Watch Video">
                  <Box position="relative" borderRadius="md" boxShadow="lg">
                    <Image
                      src={getThumbnailUrl(videoId)}
                      alt={`Video Thumbnail ${index + 1}`}
                      borderRadius="md"
                      width={{ base: "100%", md: "360px" }} // Responsive width
                      height={{ base: "auto", md: "202px" }} // Responsive height
                      objectFit="cover"
                      _hover={{ transform: 'scale(1.05)' }}
                      transition="transform 0.3s"
                    />
                  </Box>
                </Tooltip>
              </Link>

              {/* Video Info: Title, Views, Date */}
              <Box display="flex" flexDirection="column" justifyContent="space-between" flex="1">
                {/* Video Title */}
                <Link href={video.url} isExternal>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" _hover={{ color: "blue.500" }}>
                    {video.title}
                  </Text>
                </Link>

                {/* Views and Date */}
                <Text fontSize="sm" color="gray.600">
                  {video.views} • {video.date}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Gallery;
