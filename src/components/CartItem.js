import React from "react";
import { useContext } from "react";
import { Context } from "../Context";

const CartItem = ({ item }) => {
  const { removeImgFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeImgFromCart(item.id)}
      ></i>
      <img src={item.url} alt="cart item" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
