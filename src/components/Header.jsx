import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styling
import { FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa'; // Icons for Map and Help

function Header() {
  return (
    <header className="flex justify-between hover:bg-white items-center w-full px-10 py-4 shadow-md fixed top-0 z-50">

      <div className="text-2xl font-bold text-blue-700">
        <NavLink to="/">Tour India</NavLink>
      </div>

      <nav className="flex space-x-8 text-lg">
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Destination
        </NavLink>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Experiences
        </NavLink>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Accommodation
        </NavLink>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active-nav-link"
        >
          Planning
        </NavLink>
      </nav>

      <div className="flex space-x-6 text-xl text-gray-600">
        <FaMapMarkerAlt className="icon" />
        <FaQuestionCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
