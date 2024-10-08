import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top NAV */}
      <div className='flex items-center bg-amazon_blue flex-grow py-2'>
        <div className='cursor-pointer mt-2 flex items-center flex-grow sm:flex-grow-0 text-white font-extrabold px-2'>
          <h1><span className='text-yellow-400'>U</span>rban<span className='text-yellow-400'>S</span>avanna</h1>
        </div>
        {/* Custom Search bar */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 '>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text"/>
          <SearchIcon className="h-12 p-4"/>
        </div>

        {/* Right Section of the Top NAV  */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'> 

          <div className='link'>
            <p>Hello Damilare</p>
            <p className='font-bold md:text-sm'>Accounts & List</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-bold md:text-sm'>& Orders</p>
          </div>

          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-bold md:text-sm mt-2'>Basket</p>
          </div>

        </div>
      </div>
      {/* Bottom NAV */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1'/>
          All
        </p>

        <p className='link'>Prime Video</p>
        <p className='link'>Savanna Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Beauty Products</p>
        <p className='link hidden lg:inline-flex'>Baby Products</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header