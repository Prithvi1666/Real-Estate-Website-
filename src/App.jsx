import React from 'react' 
import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Projects from './component/Projects'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />

    </div>


  )
}

export default App