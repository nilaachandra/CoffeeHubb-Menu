import React, { useState } from 'react';
import { RiDrinks2Fill } from '@remixicon/react';
import CartComponent from './CartComponent';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='py-4 px-8 w-full flex justify-between items-center'>
      <h1 className='poppins-bold text-[2vw]'>Menu</h1>
      
      <div className="icons relative" onClick={toggleCart}>
        <RiDrinks2Fill size={50}/>
        <div className="notif absolute poppins-regular font-bold bg-red-600 text-white w-8 h-8 rounded-full flex justify-center items-center left-6 top-0">
          {cart.length}
        </div>
      </div>

      <div className={`cart-overlay ${showCart ? 'show' : ''}`} onClick={toggleCart}></div>
      
      <div className={`cart-component-wrapper ${showCart ? 'show' : ''}`}>
        <CartComponent />
      </div>
    </div>
  );
}

export default Navbar;
