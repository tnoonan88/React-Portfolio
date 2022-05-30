import React from 'react';
import '../../styles/Resume.css';

import resume from "../../assets/docs/myResume.pdf";

export default function Resume() {
  return (
    <div className='resume-container'>
      <h1>Resume</h1>

      <h2 className='skillList'>Front End:</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Progressive Web Applications</li>
        </ul>
      <h2 className='skillList'>Back End:</h2>
        <ul>
          <li>Node.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>MERN Stack</li>
          <li>React</li>
        </ul>
        
        <h2><a className='resume' href={resume} download="Tom-Noonan-Resume">Download my resume here!</a></h2>

    </div>
  );
}
