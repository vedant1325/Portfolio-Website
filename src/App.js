import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import ProjectsItem from './Components/ProjectsItem/ProjectsItem'
import Contact from './Components/Contact/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <Hero/>
      <About/>
      <ProjectsItem/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
