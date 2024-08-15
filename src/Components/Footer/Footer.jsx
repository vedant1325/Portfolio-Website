import React from 'react'
import "./Footer.css"

import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import git from "../../assets/git.png";
import linkdin from "../../assets/linkdin.jpg"



const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
      <div className="footer-content">
        <div className="footer-content-left">
        <h2>Vedant Dange</h2>
    <p>Passionate about crafting responsive and engaging frontend experiences with the MERN stack. Let's connect and create something amazing together!</p>
    <div className="footer-socialIcon">
       <a target='blank' href="https://www.linkedin.com/in/vedant-dange-7954b327a/"><img src={linkdin} alt="" /></a> 
        <a  target='blank' href="https://github.com/vedant1325"><img src={git} alt="" /></a>
        
    </div>
        </div>
    
       
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <div className="phone">

                <img src={call} alt="" />
                
                <p>7378850037</p>
                
                </div>
                <div className="mail">

                <img src={mail} alt="" />
                
                <p>vedantdange149@gmail.com</p>
                </div>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2024 @ Vedant Dange -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
