import React from 'react';

const VideoProductionComponent = ({ 
  imageUrl = "https://images.pexels.com/photos/1932666/pexels-photo-1932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
  heading = "We produce videos that get companies, brands, and businesses noticed.", 
  descriptions = [
    "Learning all the ins and outs of your business, your brand, and your goals is what propels us. We believe in asking all the important questions, plus some fun ones that get the creative juices flowing.",
    "With every bit of knowledge accounted for, we get to work on what we do best—building creative video concepts that solve your problems and look darn good doing it. And of course, you’ll be there with us every step of the way."
  ] 
}) => {
  return (
    <div style={styles.container}>
      {/* Left Side: Image */}
      <div style={styles.left}>
        <img src={imageUrl} alt="Video Production" style={styles.image} />
      </div>

      {/* Right Side: Text */}
      <div style={styles.right}>
        <h2 style={styles.heading}>{heading}</h2>
        {descriptions.map((description, index) => (
          <p key={index} style={descriptionStyle}>
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Default to column for mobile
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px', // Reduced padding for mobile
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box', // Include padding in width calculations
  },
  left: {
    width: '100%', // Full width on mobile
    boxShadow: '10px 5px 8px black',
    borderRadius: '8px',
    marginBottom: '20px', // Space between image and text
  },
  right: {
    width: '100%', // Full width on mobile
    paddingLeft: '0', // Remove padding for mobile
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px', // Adjusted for mobile
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '10px', // Space below heading
  },
};

// Description style
const descriptionStyle = {
  fontSize: '16px', // Adjusted for mobile
  lineHeight: '1.6',
  textAlign: 'justify',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  color: '#555',
};

// Media Queries for larger screens
const mediaQueries = `
  @media (min-width: 768px) {
    .container {
      flex-direction: row; // Switch to row layout on larger screens
    }
    .left, .right {
      width: 50%; // Each takes half width on larger screens
      padding-left: 30px; // Add padding back
    }
    .heading {
      font-size: 30px; // Heading size for larger screens
    }
    ${descriptionStyle.fontSize} {
      font-size: 18px; // Description size for larger screens
    }
  }
`;

// Add the media query styles to the component
const styleElement = document.createElement('style');
styleElement.innerHTML = mediaQueries;
document.head.appendChild(styleElement);

export default VideoProductionComponent;
