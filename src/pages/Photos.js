import React, { useContext } from "react";
import { getClass } from "../utils/index";
import Image from "../components/Image";
import { Context } from "../Context";

const Photos = () => {
  const { allPhotos } = useContext(Context);
  // console.log(allPhotos);
  const imgElements = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));
  return (
    <div className="container">
      <main className="photos">{imgElements}</main>
    </div>
  );
};

export default Photos;
