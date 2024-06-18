import React from 'react';
import useFetch from '../hooks/useFetch';

const CategoryList = ({ onSelectCategory }) => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="category-list">
      {data.map((category) => (
        <div key={category} onClick={() => handleCategoryClick(category)} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;