import React, {useState} from "react";
import menuItems from "../menuDB";
import { useCart } from "../context/CartContext";

const Item = () => {
  return (
    <>
      {menuItems.map((menuItem, index) => (
        <ItemRow key={index} menuItem={menuItem} />
      ))}
    </>
  );
};

const ItemRow = ({ menuItem }) => {
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
  };

  return (
    <table className="w-full mb-2 border-b border-black">
      <tbody>
        <tr className="w-full">
          <td>
            <h2 className="text-[1.4rem]">{menuItem.id}</h2>
          </td>
          <td>
            <img
              src={menuItem.image}
              alt=""
              className="h-32 w-32 object-center ml-24"
            />
          </td>
          <td className="w-[400px] text-left">
            <h1 className="text-[1.4rem]">{menuItem.itemName}</h1>
          </td>
          <td className="w-[100px]">
            <h1 className="text-[1.4rem]">Rs {menuItem.price} </h1>
          </td>
          <td>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={decrementItemCount}
                className="border border-black w-6 h-6 flex justify-center items-center p-4 text-[2rem]"
              >
                -
              </button>
              <span className="text-[1.4rem]">{itemCount}</span>
              <button
                onClick={incrementItemCount}
                className="border border-black w-6 h-6 flex justify-center items-center p-4 text-[2rem]"
              >
                +
              </button>
            </div>
          </td>
          <td>
            <h1 className="text-[1.4rem]">Rs {itemAmt}</h1>
          </td>
          <td>
            <button
              onClick={handleAddToCart}
              className="border text-[1.4rem] border-black rounded-md py-2 px-4"
            >
              Add To Cart
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
