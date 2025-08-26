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
        <button className="socialsButton" title="GitHub"
        onClick={() => window.open('https://github.com/YuriiLevchuk')}>
          <img className='navIcon' src="icons\github.svg" /></button>

        <button className="socialsButton" title="Linkedin"
        onClick={() => window.open('https://www.linkedin.com/in/yurii-levchuk/')}>
          <img className='navIcon' src="icons\linkedin.svg" /></button>

        <button className="socialsButton" title="Telegram"
        onClick={() => window.open('https://t.me/yuriilevchuk')}>
          <img className='navIcon' src="icons\telegram.svg" /></button>

        <button className="socialsButton" title="Download CV"
        onClick={() => window.open('https://drive.google.com/file/d/1n6JftErTc_Lza8sj91LdRbZnJWjHy2_B/view?usp=sharing')}>
          <img className='navIcon' src="icons\download.svg" /></button>
      </div>
    </div>
  )
}

export default InfoBlock;