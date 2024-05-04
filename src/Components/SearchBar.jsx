import React  from 'react';

import { assets } from '../assets/assets';

const SearchBar = () => {
 

  return (
    <div className="main-bottom relative bottom-10 w-full max-w-4xl px-1 py-1  m-auto mt-10 items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full ">
      <div className="searchbox flex items-center justify-between gap-10 bg-gray-100 px-3 py-3 rounded-full ">
        <input type="text" className="searchbox__input flex-1 bg-transparent outline-none p-2 text-xl" placeholder="Enter Your Prompt here" />
        <div className='flex gap-2 items-center'>
          <img className='w-5 h-5 cursor-pointer' src={assets.image} alt="upload image" />
          <img className='w-5 h-5 cursor-pointer' src={assets.mic} alt="mic" />
          <img className='w-5 h-5 cursor-pointer' src={assets.search} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
