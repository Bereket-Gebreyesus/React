import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../context/FavouritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

const ProductList = ({ products }) => {
  const { toggleFavourite, isInFavourites } = useContext(FavouritesContext);

  const handleToggleFavourite = (event, productId) => {
    event.preventDefault(); 
    toggleFavourite(productId);
  };

  return (
    <ul className="product-list">
      {products.map(product => (
        <li className="product-item" key={product.id}>
          <Link to={`/product/${product.id}`} className="product-link">
            <div className="product">
              <div className="product-image-container">
                <img src={product.image} className="product-image" alt={product.title} />
                <div
                  onClick={(event) => handleToggleFavourite(event, product.id)}
                  className="product-image-favourite-container"
                  role="button"
                  tabIndex={0}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handleToggleFavourite(event, product.id);
                    }
                  }}
                >
                  <img
                    className="favourite-icon"
                    src={isInFavourites(product.id) ? heartSolid : heartRegular}
                    alt="Favourite"
                  />
                </div>
              </div>
              <span className="product-title">{product.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;