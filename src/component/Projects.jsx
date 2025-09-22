
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden container'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project <span className='underline underline-offset-4 decoration-1 font-light'> Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80  mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
    <div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_1-3elwKRsQ.jpg" alt="" /><p className='font-bold text-gray-800'>Skyline Haven</p> <span className='text-gray-500 font-semibold'>$2,50,000 | California</span></SwiperSlide>
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_2-DnQUAazb.jpg" alt="" /><p className='font-bold text-gray-800'>Vista Verde</p> <span className='text-gray-500 font-semibold'>$2,50,000 | San Francisco</span></SwiperSlide>
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_3-3sNYAKXT.jpg" alt="" /><p className='font-bold text-gray-800'>Serenity Suites</p> <span className='text-gray-500 font-semibold'>$2,50,000 | Chicago</span></SwiperSlide>
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_4-C5CE8mdZ.jpg" alt="" /><p className='font-bold text-gray-800'>Central Square</p> <span className='text-gray-500 font-semibold'>$2,50,000 | Los Angeles</span></SwiperSlide>
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_5-DXUdfqvc.jpg" alt="" /><p className='font-bold text-gray-800'>Vista Verde</p> <span className='text-gray-500 font-semibold'>$2,50,000 | San Francisco</span></SwiperSlide>
        <SwiperSlide> <img src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg" alt="" /><p className='font-bold text-gray-800'>Serenity Suites</p> <span className='text-gray-500 font-semibold'>$2,50,000 | Chicago</span></SwiperSlide>
      </Swiper>
    
    </div>
    </motion.div>

    
  )
}

export default Projects