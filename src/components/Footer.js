import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <a href='mailto:tnoonan88@gmail.com' rel='noreferrer' target='_blank'>
        <img className='logo' src='../assets/images/gmail.png' alt='Gmail'/>
      </a>

      <a href='https://github.com/tnoonan88' rel='noreferrer' target='_blank'>
        <img className='logo' src='../assets/images/github.png' alt='Github'/>
      </a>

      <a href='https://www.linkedin.com/in/tom-noonan-76aa5b190/' rel='noreferrer' target='_blank'>
        <img className='logo' src='../assets/images/linkedin.png' alt='LinkedIn'/>
      </a>
    </footer>
  );
}

export default Footer;
