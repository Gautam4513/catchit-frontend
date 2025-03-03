import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const Swiper1 = () => {
  return (
    <div className='mt-5'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
      <div>
        <div className='flex justify-center items-center '>
          <h1 className='text-xl font-[roboto] text-white gap-10'>Swipe to see</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Swiper1
