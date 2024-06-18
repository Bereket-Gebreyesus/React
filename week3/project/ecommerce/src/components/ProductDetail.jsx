import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

const ProductDetail = () => {
  const { id } = useParams();
  const { toggleFavourite, isInFavourites } = useFavourites();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="product-detail">
      <div className="title-container">
        <h2>{product.title}</h2>
      </div>
      <div className="product-detail-information">
        <div className="product-detail-image">
          <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.title} />
            <div
              className="product-image-favourite-container"
              onClick={() => toggleFavourite(product.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  toggleFavourite(product.id);
                }
              }}
            >
              <img
                src={isInFavourites(product.id) ? heartSolid : heartRegular}
                alt="Favourite"
                className="favourite-icon"
              />
            </div>
          </div>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;