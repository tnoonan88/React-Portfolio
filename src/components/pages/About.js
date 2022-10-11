import React from 'react';
import proShot from '../../assets/images/pro.jpg'
import '../../styles/About.css';

export default function About() {
  return (
    <div className='aboutPage'>
      <h1>About Me</h1>
      <div className='about-content'>
        <img className='pro' src={proShot} alt='headshot'/>
          <div className='aboutText'>
            <p>I am a full-stack software developer and graduate of the Georgia Tech Full-Stack Web Developer bootcamp. I am proficient in both front end and server side development. I enjoy database managment and excel at MySQL, NoSQL and GraphQL development.</p>
            <p>Presently, I work as a sales consultant in the fine wine and spirits industry. In my free time, I like to get outside! I am a runner, climber, cyclist and SCUBA diver.</p>
          </div>
      </div>
    </div>
  );
}
