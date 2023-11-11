import React from 'react';
import './Appshop.css';
import Header from './components/pages/Hero';
import Categories from './components/pages/Categories';
import ProductSection from './components/pages/Products';

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
