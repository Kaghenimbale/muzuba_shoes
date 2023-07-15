import shoes from '/shoes.webp';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img src={shoes} alt="image" />
      </div>
      <div className="description">
        <h2>
          The Best collection <br />
          <span>2023</span>
        </h2>
        <p>
          Lorem ipsum, Ipsum is simply dummy text of the printing and
          typesetting industry. is a Lorem Ipsum has been the industry&#39;s
          standard dummy text ever since the 1500s,
        </p>
        <button className="btn">Shop now</button>
      </div>
    </div>
  );
};

export default Header;
