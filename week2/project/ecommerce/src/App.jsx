import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayProductsBasedOnCategory from './DisplayProductsBasedOnCategory';
import ProductDetail from './components/ProductDetail';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DisplayProductsBasedOnCategory />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </Router>
);

export default App;