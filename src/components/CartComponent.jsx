import React from 'react';
import { useCart } from '../context/CartContext';

const CartComponent = () => {
  const { cart } = useCart();

  return (
    <div className="cart-component">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.itemName}</li>
        ))}
      </ul>
    </div>
  );
}

export default CartComponent;
