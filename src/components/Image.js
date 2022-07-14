import React from "react";
import { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  // console.log(hovered);
  // destrukturyzacja obiektu context
  const { toggleFavorite, addImageToCart, removeImgFromCart, cartItems } =
    useContext(Context);

  //   function heartIcon() {
  //     if(img.isFavorite) {
  //         return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
  //     } else if(hovered) {
  //         return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
  //     }
  // }

  // const cartIcon = hovered && (
  //   <i
  //     className="ri-add-circle-line cart"
  //     onClick={() => addImageToCart(img)}
  //   ></i>
  // );

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeImgFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addImageToCart(img)}
        ></i>
      );
    }
  }

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );

  const filledHeartIcon = img.isFavorite && (
    <i className="ri-heart-fill favorite"></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="random pic" className="image-grid" />
      {filledHeartIcon}
      {heartIcon}
      {/* {heartIcon()} */}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    url: PropTypes.string.isRequired,
  }),
};

export default Image;
