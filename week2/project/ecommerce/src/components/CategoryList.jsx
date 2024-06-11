import React, { useEffect, useState } from 'react';

const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (category) => {
    onSelectCategory(category);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="category-list">
      {categories.map(category => (
        <div
          key={category}
          className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;