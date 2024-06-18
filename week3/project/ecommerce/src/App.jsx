import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';
import FavouritesPage from './pages/FavouritesPage';
import DisplayProductsBasedOnCategory from './components/DisplayProductsBasedOnCategory';
import { FavouritesProvider } from './context/FavouritesContext';

const App = () => {
  return (
    <FavouritesProvider>
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<DisplayProductsBasedOnCategory />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
      </Router>
    </FavouritesProvider>
  );
};

export default App;