import React from 'react';

function SearchBar() {
  return (
    <div className="container mx-auto mt-4">
      <input 
        type="text" 
        className="w-full p-2 border border-gray-300 rounded-lg" 
        placeholder="ค้นหาเมนูหรือร้านอาหาร"
      />
    </div>
  );
}

export default SearchBar;
