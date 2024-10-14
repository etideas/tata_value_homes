import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-20 pr-[7rem] pt-10 pb-4 text-lg bg-black bg-opacity-60 text-white  z-50 transition-all duration-300`}
    >
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">TATA VALUE HOMES</span>
      </div>

      {/* Center Section (Navigation Links) */}
      <div className="flex gap-16 font-bold">
        <a
          href="#overview"
          className=""
        >
          OVERVIEW
        </a>

        <a
          href="#gallery"
          className=""
        >
          GALLERY
        </a>

        <a
          href="#contactUs"
          className=""
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
