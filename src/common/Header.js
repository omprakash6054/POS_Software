import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Admin Dashboard</h1>
      <div>Logged in as Admin</div>
    </header>
  );
};

export default Header;
