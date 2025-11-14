import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import logo from "../assets/logo.png";
import user from "../assets/Group 1707479536.png";
import { emptyString, LANGUAGES, LISTING_OPTIONS } from "../constant/constant";

function Navbar({ children, onScrollChange }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      onScrollChange(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollChange]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl h-[88px] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 h-[32.15px]" alt="logo" />
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 px-6">
          {children}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative inline-block text-left sm:inline-block">
            <select
              className="appearance-none text-[#FF5037] bg-white font-semibold leading-[140%] px-4 py-2 rounded-md border border-gray-200 text-sm pr-8 sm:pr-10 cursor-pointer"
              defaultValue={emptyString}
            >
              {LISTING_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4 text-[#00000040]" />
          </div>

          <div className="relative w-16 h-10 inline-block text-left">
            <select
              className="appearance-none w-full h-full text-[#FF5037] bg-white border border-gray-200 rounded-md px-2 py-1 text-sm cursor-pointer"
              defaultValue="EN"
            >
              {LANGUAGES.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4 text-[#00000040]" />
          </div>

          <button className="cursor-pointer w-11 h-10 rounded-[10px] bg-white border border-gray-200 flex items-center justify-center">
            <img src={user} alt="user" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
