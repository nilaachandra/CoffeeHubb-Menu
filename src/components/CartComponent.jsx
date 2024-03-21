// CartComponent.jsx
import React, { useState } from 'react';
import { RiDeleteBin6Fill } from '@remixicon/react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { useCart } from '../context/CartContext';

const CartComponent = () => {
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const { cart, removeFromCart } = useCart();
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleDeleteItem = (indexToDelete) => {
    removeFromCart(indexToDelete);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmation(true);
  };

  const handlePrintReceipt = () => {
    const doc = new jsPDF();
    doc.text('Receipt', 10, 10);

    const columns = ['Sl No.', 'Item Name', 'Quantity', 'Total Price (Rs)'];
    const data = cart.map((item, index) => [
      index + 1,
      item.itemName,
      item.quantity,
      item.totalPrice,
    ]);

    // Add table to PDF
    doc.autoTable({
      startY: 20, // Start y-coordinate for the table
      head: [columns],
      body: data,
      theme: 'plain', // Optional theme for the table
    });

    // Add total amount
    doc.text(`Total Amount: Rs ${totalAmount}`, 14, doc.lastAutoTable.finalY + 10);

    // Save the PDF
    doc.save('receipt.pdf');
  };

  return (
    <div className="cart-component min-h-[20rem] w-full md:w-[30rem] lg:max-w-[30rem] mx-auto">
      <h2 className="text-[1.4rem] leading-2 poppins-regular font-bold">Your Orders</h2>
      <table className="w-full text-[1.4rem]">
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
              <td className='text-right'>
                <RiDeleteBin6Fill
                  size={24}
                  onClick={() => handleDeleteItem(index)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-[1.4rem] mt-4">
        <span>Total Amount</span>
        <span className="mr-14">Rs {totalAmount}</span>
      </div>
      <div className="conOrder mt-4">
        <button onClick={handleConfirmOrder} className="w-full bg-[#4a1c06] py-2 rounded-md text-[1.4rem] font-bold text-white">
          {orderConfirmation ? 'Ordered' : 'Confirm Order'}
        </button>
        {orderConfirmation ? (
          <button onClick={handlePrintReceipt} className="w-full bg-[#4a1c06] py-2 rounded-md text-[1.4rem] font-bold text-white mt-2">
            Print Receipt
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CartComponent;
