import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container flex">
        <Link to="/">
          <h1>Pic Some</h1>
        </Link>
        <Link to="/cart">
          <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
