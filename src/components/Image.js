import React from "react";
import { useState } from "react";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  // console.log(hovered);

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} alt="random pic" className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

export default Image;
