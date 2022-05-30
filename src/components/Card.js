import React from "react";

function ProjectCard({project}) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{project.title}</h2>
      </div>
      <img src={project.img} alt='project screenshot'></img>
      <a href={project.deployed} target='_blank'>Check it out!</a>
      <div className="card-body"><a href={project.github} target='_blank'>Link to Repo</a></div>
    </div>
  );
}

export default ProjectCard;
