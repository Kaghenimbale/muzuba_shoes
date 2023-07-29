import './advertisement.css';
import { FaTruck } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';
import { AiFillStar, AiFillDollarCircle } from 'react-icons/ai';

const Advertisement = () => {
  return (
    <div className="container">
      <div className="card-advertisement">
        <FaTruck className="icon-advertisement" />
        <div className="description-advertisement">
          <h3>Free Delivery</h3>
          <p>Complementary on All Order.</p>
        </div>
      </div>

      <div className="card-advertisement">
        <BsShieldFillCheck className="icon-advertisement" />
        <div className="description-advertisement">
          <h3>Secure Ckeckout</h3>
          <p>For All major Credit/Debits Cards.</p>
        </div>
      </div>

      <div className="card-advertisement">
        <AiFillStar className="icon-advertisement" />
        <div className="description-advertisement">
          <h3>5.0 Trustpilot Rating</h3>
          <p>Over One hundred Product in stock.</p>
        </div>
      </div>

      <div className="card-advertisement">
        <AiFillDollarCircle className="icon-advertisement" />
        <div className="description-advertisement">
          <h3>Free Return</h3>
          <p>Free return for Up to 10 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
