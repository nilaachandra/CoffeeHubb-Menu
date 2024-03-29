// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };
    const removeFromCart = (indexToRemove) => {
        const updatedCart = cart.filter((item, index) => index !== indexToRemove);
        setCart(updatedCart);
    };
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
