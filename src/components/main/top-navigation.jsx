import React from 'react';
import SearchBar from '../topnavbar/search-bar';
import DropDownAccout from '../topnavbar/drop-down';

const TopNavigation = ({ onclick_function }) => {
  return (
    <div name="top_nav" className=" h-[6%] flex">
      <div className="flex flex-1  justify-center items-center p-2">
        <div name="logo" className="flex justify-center items-center  w-[20%] music-library-barcode-size text-l sm:text-3xl  text-white">
          MusicLibrary
        </div>

        <div name="search" className="grow flex justify-center ">
          <SearchBar type="text" />
        </div>

        <div name="search" className=" w-[20%] flex justify-center items-center">
          <DropDownAccout onclick_function={onclick_function}/>
        </div>

      </div>
    </div>
  );
};

export default TopNavigation;
