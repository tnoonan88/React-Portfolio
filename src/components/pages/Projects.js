import React from 'react';
import ProjectCard from '../Card.js';

export default function Projects() {
  const projectsArray = [
    {title: "JATE: PWA Text Editor", img: "../../public/images/pwa.png", deployed: "https://squirrels-in-my-backyard.herokuapp.com/", github: "https://github.com/tnoonan88/PWA-Text-Editor"},
    {title: "Tech Talk", img: "../../public/images/techtalk.png", deployed: "https://fierce-shelf-24578.herokuapp.com/", github: "https://github.com/tnoonan88/Tech-Talk"},
    {title: "Freelance Job Board", img: "../../public/images/job-board.jpg", deployed: "https://job-board-project.herokuapp.com/", github: "https://github.com/tnoonan88/Freelance-Job-Board"},
    {title: "Note Taker App", img: "../../public/images/notetaker.png", deployed: "https://salty-refuge-49344.herokuapp.com/", github: "https://github.com/tnoonan88/Note-Taker-App"},
    {title: "Cinematic: Film Finder", img: "../../public/images/cinematic.png", deployed: "https://tnoonan88.github.io/Cinematic-Film-Finder/", github: "https://github.com/tnoonan88/Cinematic-Film-Finder"},
    {title: "Calendar App", img: "../../public/images/calendar.png", deployed: "https://tnoonan88.github.io/Calendar-App/", github: "https://github.com/tnoonan88/Calendar-App"}
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
