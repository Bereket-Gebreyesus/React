import React, { useState } from 'react';
import './App.css';
import productsData from './fake-data/all-products.js';
import categoriesData from './fake-data/all-categories.js';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? productsData.filter(product => product.category === selectedCategory.replace('FAKE: ', '').toLowerCase())
    : productsData;

  return (
    <div className="App">
      <h1 className="my-4">Products</h1>
      <CategoryList
        categories={categoriesData}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;