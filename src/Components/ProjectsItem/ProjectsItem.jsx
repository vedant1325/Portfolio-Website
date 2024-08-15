import React from "react";
import "./ProjectsItem.css";
import { proInfo } from "../../assets/ProjectAssets";
import star1 from "../../assets/star1.mp4";

const ProjectsItem = () => {
  return (
    <div className="Items" id="project">
      <video autoPlay loop muted playsInline className="bg4-video">
        <source src={star1} type={"video/mp4"} />
        Your browser does not support HTML5 video.
      </video>
      <h1>Projects</h1>
      <hr />

      <div className="pro-container">
        {proInfo.map((item, index) => {
          return (
            <div key={index} className="pro-format">
              <img src={item.pro_image} alt="" />
              <h4>{item.title}</h4>

              <p>{item.desc.slice(0, 120)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsItem;
