import React from 'react';
import ProjectCard from '../Card.js';

export default function Projects() {
  const projectsArray = [
    {title: "projectName", img: "./src", deployed: "url", github: "url"},
    {title: "projectName", img: "./src", deployed: "url", github: "url"},
    {title: "projectName", img: "./src", deployed: "url", github: "url"},
    {title: "projectName", img: "./src", deployed: "url", github: "url"},
    {title: "projectName", img: "./src", deployed: "url", github: "url"},
    {title: "projectName", img: "./src", deployed: "url", github: "url"}
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        {projectsArray.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
