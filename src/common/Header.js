import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import userProfile from '../assets/images/user-profile.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-indigo-950 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">Admin Dashboard</div>
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <img src={userProfile} alt="User Avatar" className="w-10 h-10 rounded-full mr-2"/>
          <span className="text-white mr-2">Username</span>
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
            <a
              href="#profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Profile
            </a>
            <a
              href="#change-password"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Change Password
            </a>
            <a
              href="#logout"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={closeDropdown}
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
