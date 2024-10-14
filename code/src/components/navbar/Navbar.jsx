import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isGray, setIsGray] = useState(false);

  useEffect(() => {
    const changeNavDiv = document.getElementById("changeNav");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGray(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (changeNavDiv) {
      observer.observe(changeNavDiv);
    }

    return () => {
      if (changeNavDiv) {
        observer.unobserve(changeNavDiv);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-20 pr-[7rem] pt-10 pb-4 text-lg ${
        isGray
          ? "bg-black bg-opacity-60 "
          : "bg-transparent border-b-2 border-white/20"
      } text-white  z-50 transition-all duration-300`}
    >
      {/* Left Section (Logo) */}
      <div className="flex items-center">
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
