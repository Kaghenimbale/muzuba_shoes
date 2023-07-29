import Card from './Card';
import './product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="advertisement">
        <div className="description">
          <p>THE BEST COLLECTIONS</p>
          <h3>Leather shoes collection</h3>
          <p>Come and visit our store</p>
        </div>
      </div>

      <div className="container">
        <h3>Best Rated Product</h3>
        <Card />
      </div>
    </div>
  );
};

export default Product;
