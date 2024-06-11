
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(product => (
        <li className="product-item" key={product.id}>
          <Link to={`/product/${product.id}`} className="product-link"> 
            <div className="product">
              <img src={product.image} className="product-image" alt={product.title}></img>
              <span className="product-title" title={product.title}>{product.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;