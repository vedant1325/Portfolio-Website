import React, { useRef, useState } from 'react'
import "./Navbar.css"
import portfolio_logo from "../../assets/portfolio_logo.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from "../../assets/menu_icon.png"
import close_icon from "../../assets/close_icon.png"

const Navbar = () => {
  const[menu,Setmenu]=useState("Home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={portfolio_logo} className='logo' alt="" />
        <img src={menu_icon} onClick={()=>{openMenu()}} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={close_icon} onClick={()=>{closeMenu()}} className='nav-mob-close' alt="" />
            <li ><AnchorLink className='anchor-link' offset={50} href='#home' ><p onClick={()=>{Setmenu("Home")}}>Home</p></AnchorLink>{menu==="Home"?<><hr/></>:<></>}</li>
            <li ><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{Setmenu("About Me")}}>About</p></AnchorLink>  {menu==="About Me"?<><hr/></>:<></>}</li>
            <li ><AnchorLink className='anchor-link ' offset={50} href='#project'><p onClick={()=>{Setmenu("Projects")}}>Projects</p></AnchorLink>{menu==="Projects"?<><hr/></>:<></>}</li>
            <li ><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>{Setmenu("Skills")}}>Skills</p></AnchorLink>{menu==="Skills"?<><hr/></>:<></>}</li>
            <li ><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=>{Setmenu("Contact")}}>Contact</p></AnchorLink>{menu==="Contact"?<><hr/></>:<></>}</li>

        </ul>
        <a href="https://www.linkedin.com/in/vedant-dange-7954b327a/" target='blank'><div className="connect">Connect With me</div></a>
        

      
    </div>
  )
}

export default Navbar
