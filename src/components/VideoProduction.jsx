import React from 'react';
import Texture from '../assets/texture.png'; // Import your texture image

const VideoProductionComponent = ({ 
  imageUrl = "https://images.pexels.com/photos/1932666/pexels-photo-1932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  heading = "We produce videos that get companies, brands, and businesses noticed.", 
  descriptions = [
    "Learning all the ins and outs of your business, your brand, and your goals is what propels us. We believe in asking all the important questions, plus some fun ones that get the creative juices flowing.",
    "With every bit of knowledge accounted for, we get to work on what we do best—building creative video concepts that solve your problems and look darn good doing it. And of course, you’ll be there with us every step of the way."
  ] 
}) => {
  const isMobile = window.innerWidth < 768; // Check if the screen width is less than 768px

  return (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row', // Change direction based on screen size
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '40px',
      marginBottom: '40px',
      backgroundImage: `url(${Texture})`, // Add texture as background
      backgroundSize: 'cover',  // Make sure the texture covers the whole area
      backgroundPosition: 'center',  // Center the texture background
      backgroundRepeat: 'no-repeat',  // Prevent texture from repeating
      boxSizing: 'border-box',
      borderRadius: '8px',  // Add a border-radius to match the image style
      boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.3)',  // Add box-shadow to give depth
    }}>
      {/* Left Side: Image */}
      <div style={{
        width: isMobile ? '100%' : '50%', // Adjust width based on screen size
        boxShadow: '10px 5px 8px black',
        borderRadius: '8px',
        marginBottom: isMobile ? '20px' : '0', // Margin only on mobile
      }}>
        <img src={imageUrl} alt="Video Production" style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
        }} />
      </div>

      {/* Right Side: Text */}
      <div style={{
        width: isMobile ? '100%' : '50%', // Adjust width based on screen size
        paddingLeft: isMobile ? '0' : '30px', // Add padding back on larger screens
      }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '30px', // Adjust font size based on screen size
          color: 'black',
          fontWeight: 'bold',
          letterSpacing: '1px',
          marginBottom: '10px',
        }}>{heading}</h2>
        {descriptions.map((description, index) => (
          <p key={index} style={{
            fontSize: isMobile ? '16px' : '18px', // Adjust font size based on screen size
            lineHeight: '1.6',
            textAlign: 'justify',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            color: '#555',
          }}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default VideoProductionComponent;
