import React from 'react';
import { useCart } from '../context/CartContext';
import { RiDeleteBin6Fill } from '@remixicon/react';

const CartComponent = () => {
  const { cart, setCart } = useCart();
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleDeleteItem = (indexToDelete) => {
    const updatedCart = cart.filter(item => item.index !== indexToDelete);
    setCart(updatedCart);
  }
  
  return (
    <div className="cart-component min-h-[20rem] w-[30rem]">
      <h2 className='text-[1.4rem] leading-2 poppins-regular font-bold'>Your Orders</h2>
      <table className='w-full text-[1.4rem]'>
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.itemName}</td>
              <td>{order.quantity}</td>
              <td>Rs {order.totalPrice}</td>
              <td>
                <RiDeleteBin6Fill
                  size={24}
                  onClick={() => handleDeleteItem(order.index)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-between text-[1.4rem] mt-4'>
        <span>Total Amount</span>
        <span className='mr-14'>Rs {totalAmount}</span>
      </div>
    </div>
  );
}

export default CartComponent;
