import { motion } from "framer-motion";

import { Fragment } from "react";
import { heroImg } from "../assets";
import Header from "./Header";
import { useAnimationInView } from "../hooks/useAnimationInView";

const LendingPage = () => {
  const { control, animationRef } = useAnimationInView();
  return (
    <Fragment>
      <div className="h-[840px] pt-16 md:pt-12 md:w-full lending-page-bg  md:px-36  relative ">
        <Header />
        <div className=" text-center w-full md:w-[70%] ">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.3,
            }}
            className="heading1 md:text-left text-center  leading-normal  mb-3"
          >
            Kickstart your web3 game
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.4,
            }}
            className="paragraph mb-[59px] px-1 md:px-0 text-center md:text-left md:w-[80%]"
          >
            unix gaming provides what all games need to succed: gamers,
            technology & funding
          </motion.p>
          <motion.img
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.3,
            }}
            src={heroImg}
            alt="hero-img"
            className=" block md:hidden mb-10"
          />
          <button className="md:block paragraph md:text-[30px] text-[18px] mx-6 md:w-[336px] md:py-4  md:mx-0 md:px-8 px-12 py-2 primaryBtnGradient rounded-[40px] hover:scale-110 transition-all duration-300 ease-in-out">
            Kickstart my game
          </button>
        </div>
        <div
          className="absolute right-1 md:right-0 bottom-0"
          ref={animationRef}
        >
          <motion.img
            initial={{ opacity: 0, x: 80 }}
            animate={control}
            transition={{
              type: "tween",
              duration: 0.7,
              delay: 0.3,
            }}
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
