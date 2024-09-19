import React from 'react';
import { FaArrowDown} from 'react-icons/fa';

// Define the Hero component
const Hero = () => {
  // Styles for the hero section
  const heroStyle = {
    marginTop: '95px',
    position: 'relative',
    width: '100%',
    height: '90vh', // Adjust height as needed
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden', // Ensure the content stays within bounds
  };

  // Styles for the video
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure video covers the background
    zIndex: -1, // Place video behind content
    opacity: 0.8, // Adjust opacity to blend video with text
  };

  // Styles for the icon
  const iconStyle = {
    width: '100px',
    height: '100px',
    backgroundImage: 'url("https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/17471952/1561096817487.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '20px',
    boxShadow: '3px 3px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '6px',
  };

  // Styles for the text
  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  };

  return (
    <div style={heroStyle}>
      {/* Background Video */}
      <video autoPlay muted loop style={videoStyle}>
        <source src="https://videos.pexels.com/video-files/2890196/2890196-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Icon */}
      <div style={iconStyle}></div>

      {/* Text */}
      <div style={textStyle}>
        Pioneer Filmz have expertise in production of Documentary films,
        <br />
        corporate films and Ad films, promotional videos and all other types of creative videos.
        <br />
        They have a team of highly skilled professionals, who are always on their toes to provide the best service.
      </div>

      {/* Arrow Icon */}
      <FaArrowDown size={50} style={{ marginTop: '20px' }} />
    </div>
  );
};

// Export the Hero component as default
export default Hero;
