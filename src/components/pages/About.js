import React from 'react';
import proShot from '../../assets/images/pro.jpg'
import '../../styles/About.css';

export default function About() {
  return (
    <div className='aboutPage'>
      <h1>About Me</h1>
      <img className='pro' src={proShot} alt='headshot'/>
        <div className='aboutText'>
          <p>Currently enrolled in the Georgia Tech Full Stack Web Development bootcamp, I am set to graduate in June! I am a full-stack software developer, proficient in both front end and server side development. I enjoy database managment and excel at MySQL, NoSQL and GraphQL development.</p>
          <p>Before taking the bootcamp, I worked (and still do) as a sales consultant in fine wine and spirits. In my free time, I like to get outside! I am a runner, climber, cyclist and SCUBA diver.</p>
        </div>
    </div>
  );
}
