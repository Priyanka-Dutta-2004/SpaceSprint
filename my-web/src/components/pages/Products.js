
import React from 'react';

const ProductCard = ({ imageSrc, altText, discountBadge, actions, title, prices }) => (
  <li>
    <div className="product-card">
      <figure className="card-banner">
        <a href="#">
          <img src={imageSrc} alt={altText} loading="lazy" width="800" height="1034" className="w-100" />
        </a>

        {discountBadge && <div className={`card-badge ${discountBadge.color}`}>{discountBadge.text}</div>}

        <div className="card-actions">
          {actions.map((action, index) => (
            <button key={index} className={`card-action-butn ${action.className}`} aria-label={action.label}>
              {action.icon}
              {action.text && <p>{action.text}</p>}
              <span className="label-text">{action.label}</span>
            </button>
          ))}
        </div>
      </figure>

      <div className="card-content">
        <h3 className="h4 card-title">
          <a href="#">{title}</a>
        </h3>

        <div className="card-price">
          {prices.map((price, index) => (
            <data key={index} value={price.value}>
              &#x20B9;{price.display}
            </data>
          ))}
        </div>
      </div>
    </div>
  </li>
);

const ProductSection = () => {
  const productData = [
    {
      imageSrc: './images/product-a.jpg',
      altText: 'Leather Jacket',
      discountBadge: { text: '-25%(Only for students)', color: 'red' },
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Varsi Store', className: 'cart-btn' },
        
      ],
      title: 'Leather Jacket',
      prices: [{ value: 750, display: '750' }, { value: 900, display: '900' }],
    },
    {
      imageSrc: './images/product-b.jpg',
      altText: 'Sunglass',
      discountBadge: { text: 'New', color: 'green' },
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Maxi Store', className: 'cart-btn' },
        
      ],
      title: 'Sunglass',
      prices: [{ value: 62.0, display: '62.00' }],
    },
    {
      imageSrc: './images/product-c.jpg',
      altText: 'Cowboy Boots',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Sally Shoe Mart', className: 'cart-btn' },
        
      ],
      title: 'Cowboy Boots',
      prices: [{ value: 560, display: '560' }],
    },
    {
      imageSrc: './images/product-d.jpg',
      altText: 'Baggy Pants',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Roy Stores', className: 'cart-btn' },
        
      ],
      title: 'Baggy Pants',
      prices: [{ value: 230.0, display: '230.00' }],
    },
    {
      imageSrc: './images/product-e.jpg',
      altText: 'Shimmering Eyeshadow Palette',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit MyGlam Store', className: 'cart-btn' },
        
      ],
      title: 'Shimmering Eyeshadow Palette',
      prices: [{ value: 120.0, display: '120.00' }],
    },
    {
      imageSrc: './images/product-f.jpg',
      altText: 'Choco Mocha Milkshake',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit CostaRica Cafe', className: 'cart-btn' },
        
      ],
      title: 'Choco Mocha Milkshake',
      prices: [{ value: 120.0, display: '120.00' }, { value: 100.0, display: '100.00' }],
    },
    {
      imageSrc: './images/product-g.jpg',
      altText: 'Tasty Creamy Soup',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Barista Cafe', className: 'cart-btn' },
        
      ],
      title: 'Tasty Creamy Soup',
      prices: [{ value: 200.0, display: '200.00' }, { value: 250.0, display: '250.00' }],
    },
    {
      imageSrc: './images/product-h.jpg',
      altText: 'White Airpods',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Zeno Electronics', className: 'cart-btn' },
        
      ],
      title: 'White Airpods',
      prices: [{ value: 1150.0, display: '1150.00' }, { value: 950.0, display: '950.00' }],
    },
    {
      imageSrc: './images/product-i.jpg',
      altText: 'Yellow Handbag',
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Shimer Store', className: 'cart-btn' },
        
      ],
      title: 'Yellow Handbag',
      prices: [{ value: 320.0, display: '320.00' }],
    },
    {
      imageSrc: './images/product-j.jpg',
      altText: 'Earring Ring Set',
      discountBadge: { text: 'New', color: 'green' },
      actions: [
        
        { icon: <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>, label: 'Visit Shine Store', className: 'cart-btn' },
        
      ],
      title: 'Earring Ring Set',
      prices: [{ value: 150.0, display: '150.00' }],
    },
    
  ];

  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">This WEEK'S BEST DEALS</h2>
        <ul className="product-list">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSection;
