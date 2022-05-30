import React from 'react';
import { validateEmail, checkPassword } from '../../utils/helpers';
import '../../styles/Contact.css'

export default function Contact() {
  function blurHandler() {
    console.log('blur occured')
  }
  return (
    <div className='form-container'>
      <h1>Contact Page</h1>
      <form className='form'>
        <div className='formField'>
          <p>Name:</p>
          <input onBlur={blurHandler} placeholder='Name'></input>
        </div>
        <div className='formField'>
          <p>Email:</p>
          <input onBlur={blurHandler} placeholder='Email'></input>
        </div>
        <div className='formField'>
          <p>Message:</p>
          <textarea placeholder='Your message here'></textarea>
        </div>
      </form>
    </div>
  );
}
