import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSchool, faUser, faBook } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`bg-indigo-950 text-white fixed h-full ${isSidebarOpen ? 'w-64' : 'w-15'}`}>
      <div className="p-4 text-2xl font-bold ">
        {isSidebarOpen ? '1decision' : <FontAwesomeIcon icon={faTachometerAlt} />}
      </div>
      <nav className="mt-4">
        <NavLink
          to="/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-4" />
          {isSidebarOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink
          to="/schools"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FontAwesomeIcon icon={faSchool} className="mr-4" />
          {isSidebarOpen && <span>Schools</span>}
        </NavLink>
        <NavLink
          to="/teachers"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FontAwesomeIcon icon={faUser} className="mr-4" />
          {isSidebarOpen && <span>Teachers</span>}
        </NavLink>
        <NavLink
          to="/personal-development"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center"
          activeClassName="bg-gray-700"
        >
          <FontAwesomeIcon icon={faBook} className="mr-4" />
          {isSidebarOpen && <span>Personal Development</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
