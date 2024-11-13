import React from 'react';

const SearchBar = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-2 gap-2 shadow-2xl  font-sans " >
            <input id="search-bar" placeholder="Search"
                className="bg-black border border-neutral-200 text-white max-h-8 px-2 sm:px-3 md:px-6 sm:py-1 md:py-2  w-full rounded-md flex-1 outline-none "/>
        </div>
    );
};

export default SearchBar;