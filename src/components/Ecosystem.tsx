import { motion } from "framer-motion";
import { heroTwo, heroTwoBgImg1, heroTwoBgImg2 } from "../assets";
import { useAnimationInView } from "../hooks/useAnimationInView";
import { GAMER_DATA } from "../utils/mockData";
import GamersItemAccordian from "./GamersItemAccordian";

const Ecosystem = () => {
  const { animationRef, control } = useAnimationInView();

  return (
    <div className="container mx-auto md:mt-20 mt-14 relative">
      <div ref={animationRef}>
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.1 }}
          className="heading2 text-center"
        >
          The unix ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
          className="paragraph text-center md:block hidden"
        >
          wanted is a web3 social app created for discovery. you tell us what
          you’re
          <br />
          interested in, and we help you find others to share your interests.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
          className="paragraph text-center md:hidden"
        >
          wanted is a web3 social app created for discovery. you tell us what
          you’re interested in, and we help you find others to share your
          interests.
        </motion.p>
      </div>
      <div className=" md:flex md:justify-between md:items-center">
        <div className=" relative">
          <div className=" absolute top-[250px] left-0 -z-10">
            <img src={heroTwoBgImg1} alt="hero-bg-img" />
          </div>
          <div className=" absolute top-[250px] left-40 -z-10">
            <img src={heroTwoBgImg2} alt="hero-bg-img" />
          </div>

          <motion.img
            src={heroTwo}
            alt="hero-two"
            initial={{ opacity: 0, x: -80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          className="gamers-item-contaier md:w-[574px]"
        >
          {GAMER_DATA.map(({ id, name, content }) => (
            <GamersItemAccordian
              key={id}
              name={name}
              content={content}
              id={id}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Ecosystem;
