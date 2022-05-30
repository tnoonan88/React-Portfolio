import React from 'react';
import '../styles/Footer.css';

import gmail from '../assets/images/gmail.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className='logoBox'>
        <a href='mailto:tnoonan88@gmail.com' rel='noreferrer' target='_blank'>
          <img className='logo' src={gmail} alt='Gmail'/>
        </a>

        <a href='https://github.com/tnoonan88' rel='noreferrer' target='_blank'>
          <img className='logo' src={github} alt='Github'/>
        </a>

        <a href='https://www.linkedin.com/in/tom-noonan-76aa5b190/' rel='noreferrer' target='_blank'>
          <img className='logo' src={linkedin} alt='LinkedIn'/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
