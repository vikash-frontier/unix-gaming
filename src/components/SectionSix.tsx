import { sectionSixElippse, sectionSixImg } from "../assets";
import { motion } from "framer-motion";
import { useAnimationInView } from "../hooks/useAnimationInView";

const SectionSix = () => {
  const { animationRef, control } = useAnimationInView();

  return (
    <div
      className="container mx-auto md:mt-[122px] relative"
      ref={animationRef}
    >
      <div className=" absolute -bottom-[150px] -right-[450px] hidden md:block">
        <img src={sectionSixElippse} alt="ellipse-six" />
      </div>

      <motion.div
        className={`email-card-container hidden md:flex justify-between px-[62px] py-[113px] w-full`}
        initial={{ opacity: 0, x: 0, y: 30 }}
        animate={control}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.4,
        }}
      >
        <div>
          <h2 className="heading2 mb-2.5">
            Get unix gaming <br /> updates.
          </h2>

          <p className="paragraph">
            when it comes to partnering new blockchain games, we <br /> only
            want to partner with project of class,continue to <br /> drive the
            future evolution of blockchaining games.
          </p>

          <div className="mt-[52px] relative">
            <input
              type="text"
              placeholder="Your email here"
              className="paragraph email-inp py-[17px] px-[54px]  text-[33px] w-[660px]  placeholder-white"
            />

            <button className="email-inp paragraph md:py-[17px]  px-[54px] text-[33px]  inline-block absolute right-0 active:border-none ">
              Submit
            </button>
          </div>
        </div>
        <div>
          <img src={sectionSixImg} alt="email-img" />
        </div>
      </motion.div>

      <div className={` md:hidden block`}>
        <div ref={animationRef}>
          <motion.h2
            initial={{ opacity: 0, y: 180 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
            className="heading2 mb-2.5 text-center"
          >
            Get unix gaming updates.{" "}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 30 }}
            animate={control}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 1.7,
            }}
            className="paragraph text-center"
          >
            when it comes to partnering new blockchain games, we only want to
            partner with project of class,continue to drive the future evolution
            of blockchaining games.
          </motion.p>
          <div className="flex justify-center items-center">
            <motion.img
              src={sectionSixImg}
              alt="email-img"
              initial={{ opacity: 0, x: 0, y: 30 }}
              animate={control}
              transition={{
                type: "tween",
                duration: 0.5,
                delay: 0.4,
              }}
            />
          </div>
          <div className="mt-[52px] relative">
            <input
              type="text"
              placeholder="Your email here"
              className="paragraph email-inp  py-[15px] px-[35px]   text-[14px] w-full placeholder-white"
            />

            <button className="email-inp paragraph  py-[15px] px-[35px]  text-[14px] inline-block absolute right-0 active:border-none ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
