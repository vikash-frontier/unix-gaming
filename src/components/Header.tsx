import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

import { downGray, logo } from "../assets";
import MobileSidebar from "./MobileSidebar";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScrollForEventListener = () => {
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
      <header className={`hidden md:flex justify-between items-center  mb-24`}>
        <img src={logo} alt="Logo" className=" z-[20]" />
        <nav className={` flex gap-[30px] items-center list-none z-[20] `}>
          <li className=" text-primary">
            <div>
              Home
              <img src="" />
            </div>
          </li>
          <li className=" text-primary header-menu-list flex items-center relative cursor-pointer group/menu">
            <div
              className={`header-menu  text-text-50 dark:text-text-50 flex items-center gap-x-2.5 px-2 py-1.5 rounded`}
            >
              Products
              <img
                src={downGray}
                alt="expand"
                className={` group-hover/menu:block w-4 h-4`}
              />
              {/* <div className="header-submenu min-w-[160px]  shadow-headerMenu rounded-large p-[10px] custom_menu_border absolute top-full left-[22px] flex gap-x-2">
                <ul>
                  <li className="header-submenu-list rounded-lg mb-1  group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>Product 1</span>
                    </div>
                  </li>
                  <li className="header-submenu-list rounded-lg mb-1 group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>Product 2</span>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </li>
          <li className=" header-menu-list flex items-center relative cursor-pointer group/menu">
            <div
              className={`header-menu text-primary  text-text-50 dark:text-text-50 flex items-center gap-x-2.5 px-2 py-1.5  rounded`}
            >
              Buy unix token
              <img src={downGray} alt="expand" className={`w-4 h-4`} />
              {/* <div className="header-submenu min-w-[160px]  shadow-headerMenu rounded-large p-[10px] custom_menu_border absolute top-full left-[22px] flex gap-x-2">
                <ul>
                  <li className="header-submenu-list rounded-lg mb-1  group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>Doge coin</span>
                    </div>
                  </li>
                  <li className="header-submenu-list rounded-lg mb-1 group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>BNB</span>
                    </div>
                  </li>
                  <li className="header-submenu-list rounded-lg mb-1  group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>Ehereum</span>
                    </div>
                  </li>
                  <li className="header-submenu-list rounded-lg mb-1  group/subMenu">
                    <div className="flex items-center gap-2">
                      <span>Matic</span>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </li>
          <li className=" relative ">
            <div
              className={`header-menu  text-primary  text-text-50 dark:text-text-50 flex items-center gap-x-2.5 px-2 py-1.5 rounded`}
            >
              Community
              <img src={downGray} alt="expand" className={`w-4 h-4`} />
            </div>
          </li>
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
