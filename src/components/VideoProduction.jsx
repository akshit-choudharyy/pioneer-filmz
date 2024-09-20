import React from 'react';

const VideoProductionComponent = () => {
  // Image URL is hardcoded here
  const imageUrl = "https://images.pexels.com/photos/1932666/pexels-photo-1932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div style={styles.container}>
      {/* Left Side: Image */}
      <div style={styles.left}>
        <img src={imageUrl} alt="Video Production" style={styles.image} />
      </div>

      {/* Right Side: Text */}
      <div style={styles.right}>
        <h2 style={styles.heading}>
          We produce videos that get companies, brands, and businesses noticed.
        </h2>
        <br/> <br/>
        <p style={descriptionStyle}>
          Learning all the ins and outs of your business, your brand, and your goals is what propels us. We believe in asking all the important questions, plus some fun ones that get the creative juices flowing.
        </p>
        
        <p style={descriptionStyle}>
          With every bit of knowledge accounted for, we get to work on what we do best—building creative video concepts that solve your problems and look darn good doing it. And of course, you’ll be there with us every step of the way.
        </p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  left: {
    flex: 1,
    boxShadow: '10px 5px 8px black',
    borderRadius: '8px',
  },
  right: {
    flex: 1,
    paddingLeft: '30px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '30px',      // Font size of 20px
    color: 'black',        // Text color black
    fontWeight: 'bold',    // Bold text
    letterSpacing: '1px',  // 1px letter spacing
  },
};
const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.8', // Increased line height for better readability
    textAlign: 'justify', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',// Justify text for symmetrical alignment
    color: '#555',
  };

export default VideoProductionComponent;
