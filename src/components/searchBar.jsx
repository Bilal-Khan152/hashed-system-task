import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import venueIcon from "../assets/Group 1707479797.png";
import venderIcon from "../assets/Group 1707479796.png";
import searchIcon from "../assets/Search.png";
import { emptyString, TIMEFILTER, VENDORS, VENUE } from "../constant/constant";

function SearchBar({ compact }) {
  const [selected, setSelected] = useState(VENUE);

  return (
    <div className="flex flex-col relative">

      {!compact && (
        <div className="w-full flex justify-center">
          <div className="bg-white absolute top-20  sm:top-6  z-10 w-full sm:w-[264px] h-[55px] px-2 py-1 rounded-[10px] sm:shadow-2xl flex items-center justify-center gap-2">
            <div
              onClick={() => setSelected(VENUE)}
              className={`w-[120px] h-10 rounded-[10px] flex items-center justify-center gap-2 px-3 py-1 text-sm cursor-pointer transition-colors duration-300 ${
                selected === VENUE
                  ? "bg-[#FF5037] text-white"
                  : "bg-white text-black" }`} >
              <img src={venueIcon} className="w-5 h-5" alt="Venue Icon" />
              <span className="text-[14px] font-semibold leading-[100%]">
                Venue
              </span>
            </div>

            <div
              onClick={() => setSelected(VENDORS)}
              className={`w-[120px] h-10 rounded-[10px] flex items-center justify-center gap-2 px-3 py-1 text-sm cursor-pointer transition-colors duration-300 ${
                selected === VENDORS
                  ? "bg-[#FF5037] text-white"
                  : "bg-white text-black"
              }`}
            >
              <img src={venderIcon} className="w-5 h-5" alt="Vendors Icon" />
              <span className="text-[14px] font-semibold leading-[100%]">
                Vendors
              </span>
            </div>
          </div>
        </div>
      )}

      <div
        className={`pt-[70px] sm:pt-2 rounded-xl flex items-center gap-3 transition-all duration-500 delay-200 ${compact ? "w-[350px] lg:w-[430px] sm:ml-[140px] items-center h-11 px-3 shadow-md" : "w-[400px] sm:w-[600px] md:w-[740px] lg:w-[900px] xl:w-[1054px] relative text-base p-3 py-4 px-5 mt-16 bg-white backdrop-blur-sm"}`}>
       
        <div
          className={`flex-1 items-center ${compact ? "-mt-4 gap-5 lg:gap-20 grid grid-cols-1 sm:grid-cols-4" : "mt-5 sm:mt-2 gap-2 lg:gap-32 grid grid-cols-1 sm:grid-cols-4"}`}>
          {TIMEFILTER.map((filter) => (
            <div
              key={filter.id}
              className={`px-[5px]  ${
                compact
                  ? " w-[105px] lg:w-[118px] h-[21px] -mt-0.5"
                  : " w-full sm:w-[140px] md:w-[170px] xl:w-[244px] rounded-[20px] flex flex-col gap-[5px]  h-[60px]" }`}>
              {!compact && (
                <label className="text-xs text-start text-[#808080]">
                  {filter.value}
                </label>
              )}
              <div className="relative mt-1">
                <input
                  className={`font-medium outline-none bg-transparent leading-[100%] w-full text-sm pr-6 ${compact ? "text-[14px]" : "text-[16px] py-1"} ${compact && filter.value !== "Guests" ? "border-r border-[#DFDFDF]" : emptyString }`}
                   defaultValue={
                   filter.value === "Where"
                   ? "Dubai, UAE"
                   : filter.value === "When"
                   ? "Anytime"
                  : `10-20 ${compact ? "Guests" : emptyString}`
                  }
                />
                {!compact && (
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
          ))}
          <div className="flex mt-3 sm:mt-2">
            <button
              className={`flex items-center justify-center gap-2.5 bg-[#FF5037] text-white font-semibold shadow-md cursor-pointer rounded-[10px] ${compact ? "w-[34px] h-[34px] p-0": "w-full sm:w-[146.7px] h-[60px] px-5 py-2 text-[24px] leading-[120%]" }`}>
              <img
                src={searchIcon}
                className={`${compact ? "w-6 h-6" : "w-6 h-6"}`}
                alt="search icon"
              />
              {!compact && <span className="ml-2">Search</span>}
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
}

export default SearchBar;
