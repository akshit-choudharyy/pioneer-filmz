import {Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const Aboutus = () => {
  return (
   <VStack mt={['30vh','25vh']} >
    <VStack>
        <Image src={'https://cdnl.iconscout.com/lottie/premium/thumb/carpenter-6540742-5540746.gif'} height={['40vh','60vh']} w={'92vw'}/>
    </VStack>
    <VStack p={8} >
    <Image src={'https://gifdb.com/images/high/the-more-you-know-book-z9hnav8reuapmd81.gif'} h={28} w={28}/>

<Text fontSize={'xl'} textAlign={'center'}>
Shri Ram Timber and Paints, established in 2012, stands as a cornerstone of quality and reliability in the heart of Habibpur, Greater Noida. With nearly a decade of dedicated service, we have cultivated a reputation for excellence in providing premium timber and paint solutions to our valued clientele.

Nestled in the vibrant community of Habibpur, our establishment serves as a beacon of craftsmanship and trustworthiness. Since our inception, we have been committed to offering a diverse range of timber products, including plywood, blockboard, and shuttering plywood, meeting the demands of various construction and interior design projects.

In addition to our comprehensive timber selection, we take pride in our expansive array of premium paints, catering to both residential and commercial needs. Whether it's vibrant hues for interior spaces or durable coatings for exterior applications, we ensure top-notch quality and durability in every product we offer.

At Shri Ram Timber and Paints, our mission goes beyond mere transactions; we strive to build lasting relationships with our customers, based on integrity and mutual respect. Our knowledgeable team is dedicated to providing expert advice and personalized service, guiding customers through their projects from start to finish.

As we look towards the future, our commitment to excellence remains unwavering. We are grateful for the trust placed in us by the community of Habibpur and beyond, and we are excited to continue serving as your premier destination for timber and paint solutions for many years to come.




</Text>
    </VStack>
   </VStack>
  )
}

export default Aboutus
