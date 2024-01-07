import { sectionSixImg } from "../assets";
import { motion } from "framer-motion";
import { useAnimationInView } from "../hooks/useAnimationInView";
import { useState, ChangeEvent } from "react";

const GamingCard = () => {
  const { animationRef, control } = useAnimationInView();
  const [input, setInput] = useState("");

  const onHandleSubmit = () => {
    if (input) {
      alert(`Hi There, your email id ${input} is submitted successfully.`);
    } else {
      alert("Please enter your Email");
    }
    setInput("");
  };

  return (
    <div
      className="container mx-auto md:mt-[162px] relative z-10"
      ref={animationRef}
    >
      <div
        className={`email-card-container hidden md:flex justify-between px-[62px] py-[113px] w-full relative`}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.1 }}
            className="heading2 mb-2.5"
          >
            Get unix gaming <br /> updates.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
            className="paragraph"
          >
            when it comes to partnering new blockchain games, we <br /> only
            want to partner with project of class,continue to <br /> drive the
            future evolution of blockchaining games.
          </motion.p>

          <div className="mt-[52px] relative">
            <input
              type="text"
              value={input}
              placeholder="Your email here"
              className="paragraph outline-none email-inp py-[17px] px-[54px]  text-[33px] w-[660px]  placeholder-white"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />

            <button
              onClick={onHandleSubmit}
              className="email-inp paragraph md:py-[17px]  px-[54px] text-[33px]  inline-block absolute right-0 active:border-none "
            >
              Submit
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
        >
          <img src={sectionSixImg} alt="email-img" />
        </motion.div>
      </div>

      <div className={` md:hidden block`}>
        <div ref={animationRef}>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.1 }}
            className="heading2 mb-2.5 text-center"
          >
            Get unix gaming updates.{" "}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 0, y: 30 }}
            animate={control}
            transition={{
              type: "tween",
              duration: 1,
              delay: 3,
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
              value={input}
              placeholder="Your email here"
              className="paragraph outline-none email-inp  py-[15px] px-[35px]   text-[14px] w-full placeholder-white"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />

            <button
              onClick={onHandleSubmit}
              className="email-inp paragraph  py-[15px] px-[35px]  text-[14px] inline-block absolute right-0 active:border-none "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingCard;
