import { useState } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import fetchProductsBasedOnCategory from './fetchProductsBasedOnCategory';

const DisplayProductsBasedOnCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { products, loading, error } = fetchProductsBasedOnCategory(selectedCategory);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      {loading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default DisplayProductsBasedOnCategory;