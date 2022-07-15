import React from "react";
import { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { removeImgFromCart } = useContext(Context);
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  const trashIconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={trashIconClass}
        onClick={() => removeImgFromCart(item.id)}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        ref={ref}
      ></i>
      <img src={item.url} alt="cart item" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
