import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useTheme } from "./ThemeContext";

function HeroSection() {
  const { mode } = useTheme();

  return (
    <div className={`hero-container ${mode}`}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>LEARN & ELEVATE</h1>
      <p>Discover top Business Stories, learn Entrepreneurship and avail huge offers with our brand new website and user-friendly forums!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PREVIEW <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
