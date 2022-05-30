import React from 'react';
import ProjectCard from '../Card.js';
import '../../styles/Projects.css';

import pwa from "../../assets/images/pwa.png";
import techTalk from "../../assets/images/techtalk.png";
import jobBoard from "../../assets/images/job-board.jpg";
import noteTaker from "../../assets/images/notetaker.png";
import cinematic from "../../assets/images/cinematic.png";
import calendar from "../../assets/images/calendar.png";


export default function Projects() {
  const projectsArray = [
    {title: "JATE: PWA Text Editor", img:{pwa}, deployed: "https://squirrels-in-my-backyard.herokuapp.com/", github: "https://github.com/tnoonan88/PWA-Text-Editor"},
    {title: "Tech Talk", img: {techTalk}, deployed: "https://fierce-shelf-24578.herokuapp.com/", github: "https://github.com/tnoonan88/Tech-Talk"},
    {title: "Freelance Job Board", img: {jobBoard}, deployed: "https://job-board-project.herokuapp.com/", github: "https://github.com/tnoonan88/Freelance-Job-Board"},
    {title: "Note Taker App", img: {noteTaker}, deployed: "https://salty-refuge-49344.herokuapp.com/", github: "https://github.com/tnoonan88/Note-Taker-App"},
    {title: "Cinematic: Film Finder", img: {cinematic}, deployed: "https://tnoonan88.github.io/Cinematic-Film-Finder/", github: "https://github.com/tnoonan88/Cinematic-Film-Finder"},
    {title: "Calendar App", img: {calendar}, deployed: "https://tnoonan88.github.io/Calendar-App/", github: "https://github.com/tnoonan88/Calendar-App"}
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='fluid-grid'>
        {projectsArray.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
