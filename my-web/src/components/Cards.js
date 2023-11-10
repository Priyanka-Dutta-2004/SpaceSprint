import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useTheme } from "./ThemeContext";

function Cards() {
  const { mode } = useTheme();

  return (
    <div className={`cards ${mode === 'dark' ? 'dark' : 'light'}`}>
      <h1>Check out your own Interest!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='FunShop Fashion Bazaar at your nearest location'
              label='Events'
              path='/events'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='The inspirational story of .....'
              label='Stories'
              path='/stories'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Cafe? Restaurant? Hotel?'
              label='Businesses'
              path='/businesses'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='How to start a Business? Join the forum and .....'
              label='Community'
              path='/community'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Get 30% Discount on .....'
              label='Offers'
              path='/offers'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
