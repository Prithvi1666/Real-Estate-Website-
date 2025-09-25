import React from 'react'
import * as motion from "motion/react-client"

const Contact = () => {
  return (
    <motion.div
     initial={{opacity: 0, x:-200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once: true}}
     className='text-center p-6 py-44 lg:px-32 md:px-20 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together
</p>
<form className='mx-auto max-w-3xl text-gray-600 pt-8 flex justify-center flex-col gap-6'>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' type="text" name='name' placeholder='Your Name' />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' type="email" name='email' placeholder='Your Email' />
            </div>
    </div>
    <div>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 '
         name="Message" placeholder='Message'></textarea>
    </div>
    <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 hover:cursor-pointer mx-auto '>Send Message</button>
    </form>
    </motion.div>
  )
}

export default Contact