import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSchool, faUser, faBook, faQrcode } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen }) => {
  const getNavLinkClass = ({ isActive }) => 
    `block py-2.5 px-4 rounded transition duration-200 flex items-center ${
      isActive ? 'bg-cyan-700' : 'hover:bg-gray-700'
    }`;

  return (
    <div className={`bg-cyan-950 text-white fixed h-full ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4 text-2xl font-bold">
        {isSidebarOpen ? '1decision' : <FontAwesomeIcon icon={faTachometerAlt} />}
      </div>
      <nav className="mt-4">
        <NavLink
          to="/dashboard"
          className={getNavLinkClass}
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-4" />
          {isSidebarOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink to="/qrcode" className={getNavLinkClass}>
          <FontAwesomeIcon icon={faQrcode} className="mr-4" />
          {isSidebarOpen && <span>QRCode</span>}
        </NavLink>
       
      </nav>
    </div>
  );
};

export default Sidebar;