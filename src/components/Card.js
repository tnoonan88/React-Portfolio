import React from "react";
import '../styles/Card.css';

function ProjectCard({project}) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{project.title}</h2>
      </div>
      <img className="projectImg" src={project.img} alt='project screenshot'></img>
        <div className="card-body">
          <button><a className="buttonText" href={project.deployed} target='_blank'>See it work here!</a></button>
          <button><div><a className="buttonText" href={project.github} target='_blank'>Link to Repo</a></div></button>
        </div>
    </div>
  );
}

export default ProjectCard;
