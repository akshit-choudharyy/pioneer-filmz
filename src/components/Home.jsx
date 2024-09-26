import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Brands from './Brands'
import ChatButton from './ChatButton'
import Footer from './Footer'
import PhotoGrid from './PhotoGrid'


import Threede from '../assets/3de.png';
import Invite from '../assets/INVITATIONS.png';
import Label from '../assets/LABEL DESINGING (1).jpg';
import Logos from '../assets/LOGO THUMBNAILS 2 (2).png';
import VideoProductionComponent from './VideoProduction'

const Home = () => {
  const photos = [
    { url: 'https://www.dragonfly.co.uk/wp-content/uploads/2023/08/2d-animation-updated.png', link: 'https://drive.google.com/drive/folders/1AjNYg7E1MMd_nMfQLvs8JRKqHu8elMT4?usp=sharing' },
    { url: 'https://www.doleep.com/wp-content/webpc-passthru.php?src=https://www.doleep.com/wp-content/uploads/2023/06/explainer.jpg&nocache=1', link: 'https://drive.google.com/drive/folders/1JLf-_akevh9jgBpeQH4g1p-yFF8-F4XT?usp=sharing' },
    { url: 'https://www.griffinpictures.in/uploads/images/de8ffbcc-6fd6-4aa3-bb42-dfe2eb2718f1.jpg', link: 'https://drive.google.com/drive/folders/1wtGxBsQ7tuJERXQI7_MNIY88bc3xoy-g?usp=drive_link' },
    { url: Label, link: 'https://drive.google.com/drive/folders/1i-wAMAYcKovHgd7XLClbCIU26z0r9y-y?usp=sharing' },
    { url: Logos , link: 'https://drive.google.com/drive/folders/1yZwByti3HHd_CoTQqxAitjbOJBG2ERXM?usp=sharing'},
    { url: 'https://www.clippingpathcampus.com/wp-content/uploads/2022/05/Product-Photography-Props.jpg', link: 'https://drive.google.com/drive/folders/1pCSPQCut_nWb2Voazhlkkq_mYWAgyGsB?usp=sharing'},
    { url: Invite, link: 'https://drive.google.com/drive/folders/1F0ewzELuxw159UKEiA0Rz1-8JaxoH1Ot?usp=sharing'},
    { url: Threede, link: 'https://drive.google.com/drive/folders/18Y8Sklh3dRV9feug-CqoFBd4oIb10L8R?usp=sharing'},
  ];

  return (
   <>
   <Hero/>
   <Service/>
   <VideoProductionComponent />
   <PhotoGrid photos={photos} />
   <Brands />
   <ChatButton />
   <Footer/>
   </>
  )
}

export default Home
