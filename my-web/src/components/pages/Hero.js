import React from 'react'

export default function Header() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url('./images/hero-banner2.jpg')` }}>
    <div className="hero-content">
      <h1 id='h1'>Fashion Everyday</h1>
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
