import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <div
          key={category}
          className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.replace('FAKE: ', '')}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;