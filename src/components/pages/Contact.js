import React from 'react';

export default function Contact() {
  function blurHandler() {
    console.log('blur occured')
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input onBlur={blurHandler}></input>
        <input onBlur={blurHandler}></input>
        <textarea></textarea>
      </form>
    </div>
  );
}
