import React from 'react';

const SearchBar = () => {
    return (
        <div
            className="mx-auto flex flex-col items-center justify-center px-2 gap-2 shadow-2xl  " >
            <input id="search-bar" placeholder="Search"
                className="px-2 sm:px-3 md:px-6 sm:py-1 md:py-2  w-full rounded-md flex-1 outline-none "/>
        </div>
    );
};

export default SearchBar;