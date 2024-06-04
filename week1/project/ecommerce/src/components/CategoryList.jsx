import React from 'react';

function CategoryList({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="category-list">
      {categories.map(category => (
        <button 
          key={category} 
          onClick={() => onCategorySelect(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;