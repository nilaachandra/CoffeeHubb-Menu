// ItemCard.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { RiDrinksFill } from "@remixicon/react";
import menuItems from '../menuDB'; 
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCard = ({ menuItem }) => {
  const { addToCart } = useCart();
  const [itemAmt, setItemAmt] = useState(menuItem.price);
  const [itemCount, setItemCount] = useState(1);

  const decrementItemCount = () => {
    if (itemCount > 1) {
      setItemCount((prevItemCount) => prevItemCount - 1);
      setItemAmt((prevItemAmt) => prevItemAmt - menuItem.price);
    }
  };

  const incrementItemCount = () => {
    setItemCount((prevItemCount) => prevItemCount + 1);
    setItemAmt((prevItemAmt) => prevItemAmt + menuItem.price);
  };

  const handleAddToCart = () => {
    const cartItem = {
      itemName: menuItem.itemName,
      totalPrice: itemAmt,
      quantity: itemCount,
      image: menuItem.image,
    };
    addToCart(cartItem);

    toast.success(`${menuItem.itemName} added to cart`, { position:'top-right', autoClose: 3000, transition: Bounce });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center">
      
      <div className="flex-shrink-0 mr-4">
        <img
          src={menuItem.image}
          alt=""
          className="h-24 w-24 lg:w-32 lg:h-32 object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-lg lg:text-3xl font-medium">{menuItem.itemName}</h1>
        <div className="flex items-center mt-1">
          <button
            onClick={decrementItemCount}
            className="border border-gray-300 rounded-md p-2 mr-2"
          >
            -
          </button>
          <span className="text-xl">{itemCount}</span>
          <button
            onClick={incrementItemCount}
            className="border border-gray-300 rounded-md p-2 ml-2"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 ml-4">
        <h2 className="text-lg font-medium">Rs {itemAmt}</h2>
        <button
          onClick={handleAddToCart}
          className="mt-2 bg-[#451e0a] hover:bg-[#503b31] text-white font-bold py-2 px-4 rounded-md"
        >
          <RiDrinksFill size={30} color="white"/>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
