import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const { mode, toggleMode } = useTheme();

  useEffect(() => {
    document.querySelector(".navbar").style.backgroundColor = mode === "light" ? "#ADBCE6" : "#18151B";
  }, [mode]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' style={{ backgroundColor: mode === "light" ? "#ADBCE6" : "#110016" }}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PPS 
            <img src='./images/pps-logo.png' alt='Logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/stories'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stories
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/events' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/businesses' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Businesses
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/community' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Communtiy
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/offers' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Products & Offers
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <div className='icon-container'>  
            <div className='dark_mode'>
              <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={toggleMode}
              />
              <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
              </label>
            </div>
            <div>
              <Link to='/'>
                <img src='./images/settings.png' alt='Logo' />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;