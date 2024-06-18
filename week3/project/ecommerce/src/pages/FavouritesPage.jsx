import React, { useContext, useEffect, useState } from 'react';
import { FavouritesContext } from '../context/FavouritesContext';
import ProductList from '../components/ProductList';

const FavouritesPage = () => {
  const { favourites } = useContext(FavouritesContext);
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavouriteProducts = async () => {
      const fetchedProducts = await Promise.all(
        favourites.map(async (id) => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch product with id: ${id}`);
          }
          return response.json();
        })
      );
      setFavouriteProducts(fetchedProducts);
    };

    if (favourites.length > 0) {
      fetchFavouriteProducts();
    } else {
      setFavouriteProducts([]);
    }
  }, [favourites]);

  if (favourites.length === 0) {
    return <div>No favourites yet.</div>;
  }

  return (
    <div>
      <h2>Your Favourites</h2>
      <ProductList products={favouriteProducts} />
    </div>
  );
};

export default FavouritesPage;