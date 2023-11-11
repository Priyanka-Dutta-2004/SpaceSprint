import React from 'react';
import '../../Appshop.css';

export default function Offers() {
  return  ( //Hero.js script
    <section className="hero" id="home" style={{ backgroundImage: `url('./images/hero-banner2.jpg')` }}>
    <div className="hero-content">
      <h1>Fashion Everyday</h1>
      <p>Get exclusive 10% student discount</p>
      <div>
      <button 
        className="butn--primary"
        onClick={console.log('hey')}
      >
        Shop Now in Kisosk Wears
      </button>
      </div>
    </div>
</section>
  )
}
