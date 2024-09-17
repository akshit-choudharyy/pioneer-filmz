// Hero.jsx
import React from 'react';
import { FaArrowAltCircleDown, FaIcons } from 'react-icons/fa';
import { FaDownload, FaDownLong } from 'react-icons/fa6';


// Define the Hero component
const Hero = () => {
  // Styles for the hero section
  const heroStyle = {
   marginTop:'85px',
    position: 'relative',
    width: '100%',
    height: '600px', // Adjust height as needed
    backgroundImage: 'url("https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
    borderRadius:'6px',
  };

  // Styles for the text
  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  
  };

  return (
    <div style={heroStyle}>
      <div style={iconStyle}></div>
      <div style={textStyle}><br/>
      Pioneer Filmz have expertise in production of Documentary films,<br></br>
      corporate films andAd films, promotional videos and all other type of creative videos.<br></br>They have a team of highly skilled professionals, who are always on their toesto provide the best service.
      </div>
      <FaArrowAltCircleDown/>     
    </div>
  );
};

// Export the Hero component as default
export default Hero;
