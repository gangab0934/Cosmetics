import React, { createContext, useState, useContext } from "react";

// Create Context
const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  // Toggle Like Function
  const toggleLike = (product) => {
    setLikedItems((prevItems) => {
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems.filter((item) => item.id !== product.id); // Remove if already liked
      } else {
        return [...prevItems, product]; // Add if not liked
      }
    });
  };

  return (
    <LikedContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikedContext.Provider>
  );
};

// Custom Hook to use the Liked Context
export const useLiked = () => {
  return useContext(LikedContext);
};


