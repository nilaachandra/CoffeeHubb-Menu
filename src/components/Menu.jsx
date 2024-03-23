import React from 'react';
import ItemCard from './ItemCard'; 
import menuItems from '../menuDB'; 

const Menu = () => {
  return (
    <div className='py-4 px-8 w-full pt-20'>
      <h1 className='poppins-regular text-[1.4rem]'>Pick Your Orders!</h1>
      {menuItems.map((menuItem, index) => (
        <ItemCard key={index} menuItem={menuItem} /> 
      ))}
    </div>
  );
};

export default Menu;
