import React from 'react';
import { useState, useEffect } from 'react';

const InfoBlock: React.FC = () => {
  const [text, setText] = useState('Software Engineer');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => 
        prevText === 'Software Engineer' ? 'Web Developer' : 'Software Engineer');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="info-block">
      <img className='profileImage' src={"https://avatars.githubusercontent.com/u/169728013?s=400&u=6e4ae42308483d62000849266b50133b7f6c8ebf&v=44"}/>
      <h1>YURII LEVCHUK</h1>
      <div style={{ display: 'inline-block' }}>
        <p className="typewriter">{ text }</p>
      </div>
      <div className="socialsWrapper">
        <button className="socialsButton" title="GitHub">
          <img className='navIcon' src=".\src\resources\icons\github.svg" /></button>
        <button className="socialsButton" title="Linkedin">
          <img className='navIcon' src=".\src\resources\icons\linkedin.svg" /></button>
        <button className="socialsButton" title="Telegram">
          <img className='navIcon' src=".\src\resources\icons\telegram.svg" /></button>
        <button className="socialsButton" title="Download CV">
          <img className='navIcon' src=".\src\resources\icons\download.svg" /></button>
      </div>
    </div>
  )
}

export default InfoBlock;