import React from "react";
import "./Navbar.css"; // If you are still using some custom styles, otherwise this can be removed.

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-20 pr-[7rem] pt-10 pb-4 text-lg bg-transparent text-white border-b-2 border-white/20 z-50">
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        {/* Replace with actual logo path */}
        <span className="text-2xl font-bold">TATA LOGO</span>
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
          href="#location"
          className=""
        >
          LOCATION
        </a>
        <a
          href="#plans"
          className=""
        >
          PLANS
        </a>
        <a
          href="#price"
          className=""
        >
          PRICE
        </a>
        <a
          href="#amenities"
          className=""
        >
          AMENITIES
        </a>
        <a
          href="#gallery"
          className=""
        >
          GALLERY
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
