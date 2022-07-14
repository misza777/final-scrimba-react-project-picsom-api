import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  //mozna tez zrobic zwykle zmiennne
  // const totalCost = 5.99 * cartItems.length
  // const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
  const calculatePrice = () => {
    const sum = cartItems.length * 5.99;
    return sum.toLocaleString("pl-PL", { style: "currency", currency: "PLN" });
  };
  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {calculatePrice()} </p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
};

export default Cart;
