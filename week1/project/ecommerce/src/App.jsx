// import React, { useEffect, useState } from 'react';
// import CategoryList from './components/CategoryList';
// import ProductList from './components/ProductList';
// import { fetchData } from './utils';

// const App = () => {
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     const fetchCategoriesAndProducts = async () => {
//       const fetchedCategories = await fetchData('/all-categories.json');
//       const fetchedProducts = await fetchData('/all-products.json');
//       setCategories(fetchedCategories);
//       setProducts(fetchedProducts);
//       setFilteredProducts(fetchedProducts);
//     };

//     fetchCategoriesAndProducts();
//   }, []);

//   const handleSelectCategory = (categoryId) => {
//     setSelectedCategory(categoryId);
//     const filtered = products.filter(product => product.categoryIds.includes(categoryId));
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="container">
//       <header>
//         <h1>Product List</h1>
//         <CategoryList
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onSelectCategory={handleSelectCategory}
//         />
//       </header>
//       <main>
//         <ProductList products={filteredProducts} />
//       </main>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import productsData from './fake-data/all-products.js';
import categoriesData from './fake-data/all-categories.js';
import CategoryList from './components/CategoryList.jsx';
import ProductList from './components/ProductList.jsx';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? productsData.filter(product => product.categoryIds.includes(selectedCategory))
    : productsData;

  return (
    <div className="App">
      <CategoryList categories={categoriesData} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;