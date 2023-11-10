
import React from 'react';

const CategoryItem = ({ imageSrc, altText, categoryText }) => (
  <li className="category-item">
    <figure className="category-banner">
      <img src={imageSrc} alt={altText} loading="lazy" width="510" height="600" className="w-100" />
    </figure>
    <a href="#" className="btn btn-secondary">
      {categoryText}
    </a>
  </li>
);

const Categories = () => {
  const categoryData = [
    { imageSrc: './images/category-a.jpg', altText: 'Cafes', categoryText: 'Cafes' },
    { imageSrc: './images/category-b.jpg', altText: 'Fashion And Lifestyle', categoryText: 'Fashion And Lifestyle' },
    { imageSrc: './images/category-c.jpg', altText: 'Restaurants', categoryText: 'Restaurants' },
    { imageSrc: './images/category-d.jpg', altText: 'Accessories', categoryText: 'Accessories' },
    { imageSrc: './images/category-e.jpg', altText: 'Makeup', categoryText: 'Makeup' },
    { imageSrc: './images/category-f.jpg', altText: 'Electronics', categoryText: 'Electronics' },
    
  ];

  return (
    <>
      <h2 className="section-title">Categories</h2>

      <section className="section category">
        <div className="container">
          <ul className="category-list">
            {categoryData.map((category, index) => (
              <CategoryItem key={index} {...category} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
