import React from 'react'
import Hero from './Hero'
import Service from './Service'

import ChatButton from './ChatButton'
import Footer from './Footer'

import VideoProductionComponent from './VideoProduction'

const Home = () => {
  return (
   <>
   <Hero/>
   <Service/>
   <VideoProductionComponent />
   <ChatButton />
   <Footer/>
   </>
  )
}

export default Home
