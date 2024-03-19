import React from 'react'
import Navbar from './Navbar'
import ItemRow from './ItemRow'
const Menu = () => {
  return (
    
    <div className='py-4 px-8 w-full'>
        <h1 className='poppins-regular text-[1vw]'>Pick Your Orders!</h1>
        <ItemRow/>
    </div>
  )
}

export default Menu