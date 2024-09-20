// import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';  // Importing the custom CSS file

const Navbar = () => {
    return (
      <>
        <div className="animated-bg p-4 relative">
          <div>
            <h3 className="text-skyblue-shine font-bold text-2xl">Radha Enterprises </h3>
          </div>
          <div>
            <div className="flex space-x-6">
              <NavLink
                to="/"
                className="text-[#F5E3C3] cursor-pointer text-2xl hover:bg-[#D4AF37] hover:text-[#3E3E3E] px-3 py-1 rounded"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-[#F5E3C3] cursor-pointer text-2xl hover:bg-[#D4AF37] hover:text-[#3E3E3E] px-3 py-1 rounded"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="text-[#F5E3C3] cursor-pointer text-2xl hover:bg-[#D4AF37] hover:text-[#3E3E3E] px-3 py-1 rounded"
              >
                Services
              </NavLink>
              <NavLink
                to="/projects"
                className="text-[#F5E3C3] cursor-pointer text-2xl hover:bg-[#D4AF37] hover:text-[#3E3E3E] px-3 py-1 rounded"
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="text-[#F5E3C3] cursor-pointer text-2xl hover:bg-[#D4AF37] hover:text-[#3E3E3E] px-3 py-1 rounded"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navbar;
