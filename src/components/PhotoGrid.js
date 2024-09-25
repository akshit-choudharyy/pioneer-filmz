import React from 'react';

const PhotoGrid = ({ photos }) => {
  return (
    <div style={styles.gridContainer}>
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
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns, keeping it fixed
    gap: '50px',
    padding: '50px',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    aspectRatio: '16/9', // Maintains a 16:9 ratio or use a different ratio as per the original aspect
    objectFit: 'cover',  // Ensures the image covers the area without stretching
    borderRadius: '8px',
    boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
  },
};

export default PhotoGrid;
