import React from "react";
import "./Skills.css";
import html from "../../assets/html.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import mongo from "../../assets/mongo.png";
import star1 from "../../assets/star1.mp4";
import css from "../../assets/css.png";
import node from "../../assets/node.png";

const Skills = () => {
  return (
<div id="skills" className="main">
<video autoPlay loop muted playsInline className="bg2-video">
        <source src={star1} type={"video/mp4"} />
        Your browser does not support HTML5 video.
      </video>
      <h1>Skills</h1>
      <hr />
    <div className="skills">
      
      <div className="logo-slide">
        <img className="html" src={html} alt="" />
        <img className="css" src={css} alt="" />
        <img className="js" src={js} alt="" />
        <img className="react" src={react} alt="" />
        <img className="mongo" src={mongo} alt="" />
        <img className="node" src={node} alt="" />
      </div>
      <div className="logo-slide">
        <img className="html" src={html} alt="" />
        <img className="css" src={css} alt="" />
        <img className="js" src={js} alt="" />
        <img className="react" src={react} alt="" />
        <img className="mongo" src={mongo} alt="" />
        <img className="node" src={node} alt="" />
      </div>
    </div>
</div>
  );
};

export default Skills;
