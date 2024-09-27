import React from 'react';
import Texture from '../assets/texture.png'; // Import the texture image

const PhotoGrid = ({ photos }) => {
  return (
    <div style={{ ...styles.gridContainer, backgroundImage: `url(${Texture})` }}>
      {photos.map((photo, index) => (
        <a href={photo.link} key={index} style={styles.link} target="_blank" rel="noopener noreferrer">
          <img src={photo.url} alt={`Photo ${index}`} style={styles.image} />
        </a>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '200px',  // Reduced gap for a better layout
    padding: '200px',  // Reduced padding for a better fit
    backgroundSize: 'cover',  // Ensures the texture covers the whole area
    backgroundPosition: 'center',  // Center the background texture
    backgroundRepeat: 'no-repeat',  // Avoid repeating the texture
  },
  link: {
    display: 'block',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    aspectRatio: '16/9', // Keeps the 16:9 ratio
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.9)',
    transition: 'transform 0.3s ease-in-out',
  },
};

export default PhotoGrid;
