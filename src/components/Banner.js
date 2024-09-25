import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className='relative w-[90%] h-70% mx-auto'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
      <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src='../../img/bn01.jpg' alt=''/>
        </div>
        <div>
          <img loading='lazy' src='../../img/bn02.jpg' alt=''/>
        </div>
        <div>
          <img loading='lazy' src='../../img/bn03.jpg' alt=''/>
        </div>
        <div>
          <img loading='lazy' src='../../img/bn04.jpg' alt=''/>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner