import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold bg-gray-900">Admin Dashboard</div>
      <nav className="mt-4">
        <NavLink
          to="/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/schools"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Schools
        </NavLink>
        <NavLink
          to="/teachers"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Teachers
        </NavLink>
        <NavLink
          to="/personal-development"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          Personal Development Areas
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
