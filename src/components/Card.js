import React from "react";

function ProjectCard({project}) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{project.title}</h2>
      </div>
      <img src={project.img}></img>
      <a href={project.deployed}>deployed</a>
      <div className="card-body"><a href={project.github}>github</a></div>
    </div>
  );
}

export default ProjectCard;
