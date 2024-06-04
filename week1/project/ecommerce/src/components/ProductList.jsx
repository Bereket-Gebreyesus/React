import React from 'react';

function ProductList({ products, selectedCategory }) {
  // Filter products based on the selected category if it exists
  const filteredProducts = selectedCategory ? products.filter(product => product.categoryIds.includes(selectedCategory)) : products;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;