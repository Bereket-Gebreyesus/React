import React, { createContext, useState, useContext } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false); // Example loading state
  const [error, setError] = useState(null); // Example error state

  const toggleFavourite = (productId) => {
    if (favourites.includes(productId)) {
      setFavourites(favourites.filter(id => id !== productId));
    } else {
      setFavourites([...favourites, productId]);
    }
  };

  const isInFavourites = (productId) => {
    return favourites.includes(productId);
  };

  const contextValue = {
    favourites,
    loading,
    error,
    toggleFavourite,
    isInFavourites,
  };

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};