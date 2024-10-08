import React, { useRef, useEffect } from 'react';
import Hero from './Hero';
import Service from './Service';
import Brands from './Brands';
import ChatButton from './ChatButton';
import Footer from './Footer';
import PhotoGrid from './PhotoGrid';
import VideoProductionComponent from './VideoProduction';

import Catalog from '../assets/catalogue.png';
import Digital from '../assets/digital advertising.png';
import Business from '../assets/BUSINESS .png';
import School from '../assets/SCHOOL CATALOG .png';
import Threede from '../assets/3de.png';
import Invite from '../assets/INVITATIONS.png';
import Label from '../assets/designing.jpeg';
import Logos from '../assets/LOGO THUMBNAILS 2 (2).png';
import Corp from '../assets/corporate.png';
import Explainer from '../assets/explainer.png';
import product from '../assets/product photo.png';

const Home = ({ setScrollToPhotoGrid }) => {
  const photoGridRef = useRef(null);

  const scrollToPhotoGrid = () => {
    if (photoGridRef.current) {
      photoGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set the scrollToPhotoGrid function to be used by the Header
  useEffect(() => {
    if (setScrollToPhotoGrid) {
      setScrollToPhotoGrid(scrollToPhotoGrid);
    }
  }, [setScrollToPhotoGrid]);

  const photos = [
    { url: Corp, link: 'https://drive.google.com/drive/folders/1wtGxBsQ7tuJERXQI7_MNIY88bc3xoy-g?usp=drive_link' },
    { url: Label, link: 'https://drive.google.com/drive/folders/1i-wAMAYcKovHgd7XLClbCIU26z0r9y-y?usp=sharing' },
    { url: product, link: 'https://drive.google.com/drive/folders/1pCSPQCut_nWb2Voazhlkkq_mYWAgyGsB?usp=sharing'},
    { url: Invite, link: 'https://drive.google.com/drive/folders/1F0ewzELuxw159UKEiA0Rz1-8JaxoH1Ot?usp=sharing'},
    { url: Logos , link: 'https://drive.google.com/drive/folders/1yZwByti3HHd_CoTQqxAitjbOJBG2ERXM?usp=sharing'},
    { url: Explainer , link: 'https://drive.google.com/drive/folders/1JLf-_akevh9jgBpeQH4g1p-yFF8-F4XT?usp=sharing' },
    { url: 'https://www.dragonfly.co.uk/wp-content/uploads/2023/08/2d-animation-updated.png', link: 'https://drive.google.com/drive/folders/1AjNYg7E1MMd_nMfQLvs8JRKqHu8elMT4?usp=sharing' },
    { url: Threede, link: 'https://drive.google.com/drive/folders/18Y8Sklh3dRV9feug-CqoFBd4oIb10L8R?usp=sharing'},
    { url: School , link: 'https://drive.google.com/drive/folders/10r25SAeIdsM1kAMNwOeobYjaMuRAm9qk?usp=sharing'},
    { url: Business , link: 'https://drive.google.com/drive/folders/1RNJ5fxTP7qOiEDo542jFMI2IoimAyTvh?usp=sharing'},
    { url: Catalog, link: 'https://drive.google.com/drive/folders/1mp-Y6Mva4WMsFLVsXicrJn09P1TIbE9s?usp=sharing'},
    {url: Digital, link: 'https://drive.google.com/drive/folders/19bOvUtvnSWFp78yvxjXuG_gC7DBfbLKO?usp=sharing'},
  ];

  return (
    <>
      <Hero />
      <Service />
      <VideoProductionComponent />
      <div ref={photoGridRef}>
        <PhotoGrid photos={photos} />
      </div>
      <Brands />
      <ChatButton />
      <Footer />
    </>
  );
};

export default Home;
