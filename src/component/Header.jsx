import React from 'react'
import * as motion from "motion/react-client"


const Header = () => {
  return (
    <div 
    
    className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{ backgroundImage: 'url(https://estatedev.in/header_img.png)' }}>
  
  <motion.div 
    initial={{opacity: 0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once: true}}
  className='container text-center text-white mx-auto py-4 px-6  '>
    <h2 className='text-5xl max-w-3xl sm:text-6xl md:text-7xl inline-block font-bold pt-20'>Explore homes that fit your dreams</h2>
    <div className='space-x-8 mt-16 '>
      <a href="" className='border border-white px-8 py-3 rounded'>Projects</a>
      <a href="" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
    </div>
  </motion.div>
    </div>
  )
}

export default Header