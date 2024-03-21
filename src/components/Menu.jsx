import React from 'react';
import ItemCard from './ItemCard'; // Import ItemCard component
import menuItems from '../menuDB'; // Import menuItems data

const Menu = () => {
  return (
    <div className='py-4 px-8 w-full'>
      <h1 className='poppins-regular text-[1.4rem]'>Pick Your Orders!</h1>
      {menuItems.map((menuItem, index) => (
        <ItemCard key={index} menuItem={menuItem} /> // Pass menuItem prop
      ))}
    </div>
  );
};

export default Menu;
