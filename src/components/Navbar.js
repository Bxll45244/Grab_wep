import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">GrabFood</div>
        <div>
          <button className="text-sm font-medium text-gray-700">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
