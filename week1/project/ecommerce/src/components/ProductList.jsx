import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
            <img src={product.image} className="product-image" alt={product.title} />
              <p className="product-title">{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;