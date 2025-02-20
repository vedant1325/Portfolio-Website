import React from 'react';
import "./Hero.css";
import Hi_hand from "../../assets/Hi_hand.png";
import star1 from "../../assets/star1.mp4";
import  resume from "../../../src/resume2.pdf"




const Hero = () => {
  return (
    <div id='home' className="hero">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={star1} type={'video/mp4'} />
        Your browser does not support HTML5 video.
      </video>
      <div className="hero-content">
        <div className="hero-info">
          <h2>Hi There,</h2>
          <h2>I'm <span>Vedant Dange</span></h2>
          <p>I am a Full Stack Web Developer...</p>
          <div className="hero-action">
           <a  href={resume2} download="Vedant Dange_Resume"  ><div className="resume" >Resume</div></a> 
          </div>
        </div>
        <div className="Hi_logo">
          <img src={Hi_hand} alt="Hi hand logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
