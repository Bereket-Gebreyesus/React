import { useState } from 'react';
import '../App.css';
import useFetch from '../hooks/useFetch';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

const DisplayProductsBasedOnCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: products, loading, error } = useFetch(
    selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products'
  );

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <CategoryList onSelectCategory={handleSelectCategory} />
      {loading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default DisplayProductsBasedOnCategory;