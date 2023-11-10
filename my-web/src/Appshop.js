import React from 'react';
import './Appshop.css';
import Header from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <ProductSection/>
      
    </div>
  );
}

export default App;
