import React from "react";
import SearchBar from "./searchBar";

function Banner({ showSearch }) {
  return (
    <section className="relative w-full">
      <div className="w-full h-screen flex items-center">
        <div className="relative z-10 flex flex-col w-full max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-poppins font-semibold text-[40px] sm:text-[70px] sm:leading-20 tracking-[-0.03em] text-center text-white">
            Celebrate in venues <br className="hidden md:block" /> big and small
          </h1>

          {showSearch && (
            <div className="sm:mt-8 flex justify-center">
              <SearchBar compact={false} />
            </div>
          )}

          <div className="mt-6 flex justify-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === 0 ? "bg-white/60" : "bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
