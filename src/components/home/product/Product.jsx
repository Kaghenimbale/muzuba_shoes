import './product.css';
import shoes1 from '/shoes1.jpg';
import shoes2 from '/shoes2.webp';
import shoes3 from '/shoes3.webp';
import { CiStar } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';

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

        <div className="cards-container">
          <div className="cards">
            <div className="card">
              <div className="card-image">
                <div className="states">
                  <span>Sale</span>
                  <span>New!</span>
                </div>
                <img src={shoes1} alt="image" />
              </div>

              <div className="shoes-description">
                <p>Sport Running Sneakers</p>
                <div className="sizes">
                  <span>42</span>
                  <span>43</span>
                  <span>46</span>
                </div>
                <div className="colors">
                  <span className="color"></span>
                  <span className="color"></span>
                  <span className="color"></span>
                </div>

                <div className="prices">
                  <span className="price">$594.00</span>
                  <span className="price">$681.00</span>
                </div>

                <div className="stars">
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                </div>

                <div className="shopping">
                  <BsBagCheck className="shopping-icon" />
                  <AiOutlineHeart className="shopping-icon" />
                  <AiOutlineEye className="shopping-icon" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <div className="states">
                  <span>Sale</span>
                  <span>New!</span>
                </div>
                <img src={shoes2} alt="image" />
              </div>

              <div className="shoes-description">
                <p>Sport Running Sneakers</p>
                <div className="sizes">
                  <span>42</span>
                  <span>43</span>
                  <span>46</span>
                </div>
                <div className="colors">
                  <span className="color"></span>
                  <span className="color"></span>
                  <span className="color"></span>
                </div>

                <div className="prices">
                  <span className="price">$594.00</span>
                  <span className="price">$681.00</span>
                </div>

                <div className="stars">
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                </div>

                <div className="shopping">
                  <BsBagCheck className="shopping-icon" />
                  <AiOutlineHeart className="shopping-icon" />
                  <AiOutlineEye className="shopping-icon" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <div className="states">
                  <span>Sale</span>
                  <span>New!</span>
                </div>
                <img src={shoes3} alt="image" />
              </div>

              <div className="shoes-description">
                <p>Sport Running Sneakers</p>
                <div className="sizes">
                  <span>42</span>
                  <span>43</span>
                  <span>46</span>
                </div>
                <div className="colors">
                  <span className="color"></span>
                  <span className="color"></span>
                  <span className="color"></span>
                </div>

                <div className="prices">
                  <span className="price">$594.00</span>
                  <span className="price">$681.00</span>
                </div>

                <div className="stars">
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                  <CiStar className="star" />
                </div>

                <div className="shopping">
                  <BsBagCheck className="shopping-icon" />
                  <AiOutlineHeart className="shopping-icon" />
                  <AiOutlineEye className="shopping-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
