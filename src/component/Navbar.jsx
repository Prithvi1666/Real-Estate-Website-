import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className=' max-auto justify-between flex items-center py-4 px-6 md:px-20 lg:px-78 bg-transparent'>
     <img src="https://estatedev.in/assets/logo-CfQex_Go.svg" alt="" />
      <ul className=' hidden md:flex gap-7 text-white '>
        <a className='cursor-pointer hover:text-gray-400'>Home</a>
        <a className='cursor-pointer hover:text-gray-400'>About</a>
        <a className='cursor-pointer hover:text-gray-400'>Projects</a>
        <a className='cursor-pointer hover:text-gray-400'>Testimonails</a>
      </ul>
       <button className='hidden md:block bg-white text-black px-8 py-2 rounded-full hover:bg-gray-400 '>Sign Up </button>
    </div>
    </div>
  )
}

export default Navbar