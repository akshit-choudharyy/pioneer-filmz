import React from 'react'
import Hero from './Hero'
import Service from './Service'
import Brands from './Brands'
import ChatButton from './ChatButton'
import Footer from './Footer'
import PhotoGrid from './PhotoGrid'

import VideoProductionComponent from './VideoProduction'

const Home = () => {
  const photos = [
    { url: 'https://www.dragonfly.co.uk/wp-content/uploads/2023/08/2d-animation-updated.png', link: 'https://drive.google.com/drive/folders/1AjNYg7E1MMd_nMfQLvs8JRKqHu8elMT4?usp=sharing' },
    { url: 'https://www.doleep.com/wp-content/webpc-passthru.php?src=https://www.doleep.com/wp-content/uploads/2023/06/explainer.jpg&nocache=1', link: 'https://drive.google.com/drive/folders/1JLf-_akevh9jgBpeQH4g1p-yFF8-F4XT?usp=sharing' },
    { url: 'https://www.griffinpictures.in/uploads/images/de8ffbcc-6fd6-4aa3-bb42-dfe2eb2718f1.jpg', link: 'https://drive.google.com/drive/folders/1wtGxBsQ7tuJERXQI7_MNIY88bc3xoy-g?usp=drive_link' },
    { url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/label-design-template-03d767a032bed59d04b7ac7339481eff_screen.jpg?ts=1647332442', link: 'https://drive.google.com/drive/folders/1i-wAMAYcKovHgd7XLClbCIU26z0r9y-y?usp=sharing' },
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
