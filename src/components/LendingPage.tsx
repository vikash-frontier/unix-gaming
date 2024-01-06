import { Fragment } from "react";
import { heroImg } from "../assets";
import Header from "./Header";

const LendingPage = () => {
  return (
    <Fragment>
      <div className="h-[840px] pt-16 md:pt-12 md:w-full lending-page-bg  md:px-36  relative ">
        <Header />
        <div className=" text-center w-full md:w-[70%] ">
          <h2 className="heading1 md:text-left text-center  leading-normal  mb-3">
            Kickstart your web3 game
          </h2>
          <p className="paragraph mb-[59px] px-1 md:px-0 text-center md:text-left md:w-[80%]">
            unix gaming provides what all games need to succed: gamers,
            technology & funding
          </p>
          <img
            src={heroImg}
            alt="hero-img"
            className=" block md:hidden mb-10"
          />
          <div className="paragraph md:text-[30px] text-[18px] mx-7 md:w-[336px] md:py-4  md:mx-0 px-8 py-2 primaryBtnGradient rounded-[40px] hover:scale-110 transition-all duration-300 ease-in-out">
            Kickstart my game
          </div>
        </div>
        <div className="absolute right-1 md:right-0 bottom-0">
          <img
            className="hidden md:block md:w-[580px] md:h-[580px]"
            src={heroImg}
            alt="hero-img"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LendingPage;
