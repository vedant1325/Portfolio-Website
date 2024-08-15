import React from 'react'
import "./About.css"
import aboutme from "../../assets/aboutme.png"
import star1 from "../../assets/star1.mp4";

const About = () => {
  return (<>
    
     
   
    <div id='about' className='about'>
    <div className="heading"><h1>About Me</h1>
    <hr />
    </div>
        
      <video autoPlay loop muted playsInline className="bg1-video">
        <source src={star1} type={'video/mp4'} />
        Your browser does not support HTML5 video.
      </video>
      <div className="about-content">
        <div className="about_img">
          <img src={aboutme} alt="About Me" />
        </div>
        <div className="about_text">
            <h2>Vedant Dange</h2>
            <h4>A Bit About Me</h4>
          <p>I am a student at St. Vincent Pallotti College of Engineering, currently pursuing a B.Tech in Artificial Intelligence. My passion lies in web development, particularly in frontend development within the MERN stack. I've advanced from basic projects to completing two full-fledged MERN stack projects, with a strong focus on creating engaging and responsive user interfaces. My academic dedication is reflected in my CGPA of 9.1. I'm eager to continue exploring the synergy between AI and web development, honing my skills, and tackling new challenges in the frontend space.</p>
        </div>
         </div>
      </div>
    
    </>
  )
}

export default About
