import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-indigo-900 text-white p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white focus:outline-none">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>Logged in as Admin</div>
    </header>
  );
};

export default Header;
