import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  const getPhotosFromAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAllPhotos(data);

    // fetch(url)
    // .then((res) => res.json())
    // .then((data) => setAllPhotos(data));
  };

  useEffect(() => {
    getPhotosFromAPI();
  }, []);

  console.log(allPhotos);

  //toggling favorite value in allPhotos array
  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      console.log(id);
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  };

  // adding an image to the cart
  const addImageToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  console.log(cartItems);

  return (
    <Context.Provider
      value={{ allPhotos, toggleFavorite, addImageToCart, cartItems }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
