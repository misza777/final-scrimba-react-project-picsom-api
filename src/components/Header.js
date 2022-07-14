import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

const Header = () => {
  const { cartItems } = useContext(Context);

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  // const cartIcon = () => {
  //   if (cartItems.length === 0) {
  //     return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
  //   } else {
  //     return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
  //   }
  // };

  // console.log(cartItems);

  return (
    <header>
      <div className="container flex">
        <Link to="/">
          <h1>Pic Some</h1>
        </Link>
        <Link to="/cart">
          {/* {cartIcon()} */}
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
