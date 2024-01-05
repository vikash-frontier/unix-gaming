import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

import { logo } from "../assets";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScrollForEventListener = (event: Event) => {
    const scrollValue = window.pageYOffset;
    setScroll(scrollValue);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollForEventListener);

    return () => {
      window.removeEventListener("scroll", handleScrollForEventListener);
    };
  }, []);

  return (
    <>
      <header
        className={` container mx-auto mt-[67px] hidden md:flex justify-between items-center `}
      >
        <img src={logo} alt="Logo" className=" z-[999]" />
        <nav className={` flex gap-[30px] items-center list-none z-[999]`}>
          <li className=" text-primary">Home</li>
          <li className=" text-primary">Products</li>
          <li className=" text-primary">Buy unix token</li>
          <li className=" text-primary">Community</li>
        </nav>
        <button className="secondaryBtnGradient p-[1px] paragraph_medium inline-block rounded-[36px] cursor-pointer hover:!hoverSecondaryBtnGradient  text-primary ">
          Login
        </button>
      </header>

      <header
        className={`header sticky top-0 md:hidden flex items-center justify-between py-2 px-5 w-full z-[99] left-0 `}
      >
        <div
          className={`w-full h-full absolute top-0 left-0 backdrop-blur-[30px] ${
            scroll ? "opacity-1" : "opacity-0"
          } `}
        ></div>
        <img src={logo} alt="Logo" width={110} height={110} className=" z-10" />
        <Hamburger
          color="#9AA0AB"
          size={24}
          toggled={hamburger}
          duration={0.3}
          toggle={() => setHamburger(!hamburger)}
          label="Show menu"
          hideOutline={false}
        />

        <MobileSidebar active={hamburger} setHamburger={setHamburger} />
      </header>
    </>
  );
};

export default Header;
