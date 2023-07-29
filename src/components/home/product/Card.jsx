import shoes1 from '/shoes1.jpg';
import shoes2 from '/shoes2.webp';
import shoes3 from '/shoes3.webp';
import { CiStar } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';

const Card = () => {
  return (
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
              <span className="price">$14.00</span>
              <span className="price">$31.00</span>
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
              <span className="price">$21.00</span>
              <span className="price">$24.00</span>
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
              <span className="price">$25.00</span>
              <span className="price">$35.00</span>
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
  );
};

export default Card;
