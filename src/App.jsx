import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Banner from "./components/banner";
import { SIZE } from "./constant/constant";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < SIZE);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < SIZE);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover">
      <Navbar onScrollChange={setIsSticky}>
        {!isMobile && isSticky && <SearchBar compact={true} />}
      </Navbar>
      <div className="pt-[88px]">
        <Banner showSearch={isMobile || !isSticky} />
      </div>
    </div>
  );
}

export default App;
