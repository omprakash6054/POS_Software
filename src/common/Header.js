import React, { useState } from 'react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/solid';
import userProfile from '../assets/images/user-profile.png';

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-indigo-950 p-4 flex justify-between items-center relative">
      <button onClick={toggleSidebar} className="focus:outline-none text-white">
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <img src={userProfile} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-white mr-2 hidden md:block">Username</span>
          <ChevronDownIcon className="w-5 h-5 text-white hidden md:block" />
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
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-indigo-950 z-50">
          <a
            href="#profile"
            className="block px-4 py-2 text-white hover:bg-indigo-900"
            onClick={() => {
              setIsMenuOpen(false);
              closeDropdown();
            }}
          >
            Profile
          </a>
          <a
            href="#change-password"
            className="block px-4 py-2 text-white hover:bg-indigo-900"
            onClick={() => {
              setIsMenuOpen(false);
              closeDropdown();
            }}
          >
            Change Password
          </a>
          <a
            href="#logout"
            className="block px-4 py-2 text-white hover:bg-indigo-900"
            onClick={() => {
              setIsMenuOpen(false);
              closeDropdown();
            }}
          >
            Logout
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
