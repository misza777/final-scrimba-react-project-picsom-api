import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);

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

  // console.log(allPhotos);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
