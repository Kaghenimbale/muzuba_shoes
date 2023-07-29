import { AiOutlineMenu } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { PiSneakerMoveFill } from 'react-icons/pi';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <AiOutlineMenu className="icon" />
        <div className="logo">
          <h2>
            MUZ<span>UBA</span>
          </h2>
          <PiSneakerMoveFill className="icon" />
        </div>
      </div>
      <div className="right-side">
        <BsSearch className="icon" />
        <BiUser className="icon" />
        <FiShoppingCart className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
