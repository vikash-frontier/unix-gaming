import { motion } from "framer-motion";
import { useAnimationInView } from "../hooks/useAnimationInView";
import {
  imgEight,
  imgFive,
  imgFour,
  imgNine,
  imgOne,
  imgSeven,
  imgSix,
  imgThree,
  imgTwo,
} from "../assets/images/partnerships";

const SectionFive = () => {
  const { animationRef, control } = useAnimationInView();
  return (
    <section className="flex items-center flex-col relative  justify-center z-10">
      <div className="relative z-10 text-center mt-0 md:mt-10">
        <div className="pt-5 text-center" ref={animationRef}>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
            className="heading2 text-xl md:text-xxxl text-white"
          >
            Partnerships
          </motion.h2>
        </div>
        <div className="flex md:hidden flex-col items-start my-12">
          <div className="flex gap-3 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
              className=" flex items-center justify-center partnership-card py-[15px] rounded-[16px]  w-[100px]"
            >
              <img src={imgOne} alt="img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
              className=" flex items-center justify-center partnership-card py-[15px] rounded-[16px]  w-[100px]"
            >
              <img src={imgTwo} alt="img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
              className=" flex items-center justify-center partnership-card py-[15px]  rounded-[16px]  w-[100px]"
            >
              <img src={imgThree} alt="img" />
            </motion.div>
          </div>
          <div className="flex gap-3 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.6 }}
              className=" flex items-center justify-center partnership-card py-[15px] rounded-[16px]  w-[100px]"
            >
              <img src={imgFour} alt="img-four" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.5 }}
              className=" flex items-center justify-center partnership-card py-[15px] rounded-[16px]  w-[100px]"
            >
              <img src={imgFive} alt="img-five" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
              className=" flex items-center justify-center partnership-card py-[15px]  rounded-[16px]  w-[100px]"
            >
              <img src={imgSix} alt="img-five" />
            </motion.div>
          </div>
          <div className="flex gap-3 mb-5">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] py-[40px]  w-[100px]"
            >
              <img src={imgSeven} alt="img-five" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.7 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] py-[40px]  w-[100px]"
            >
              <img src={imgEight} alt="img-six" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.7 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] py-[40px]  w-[100px]"
            >
              <img src={imgNine} alt="img-six" />
            </motion.div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center my-12">
          <div className="flex gap-5 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] px-10  w-[250px]"
            >
              <img src={imgOne} alt="img-one" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgTwo} alt="img-two" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgThree} alt="img-three" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
              className=" flex items-center justify-center partnership-card rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgFour} alt="img-four" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
              className=" flex items-center justify-center partnership-card  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgFive} alt="img-five" />
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.5 }}
              className=" flex items-center justify-center partnership-card rounded-[16px] py-[15px] px-10 w-[250px]"
            >
              <img src={imgSix} alt="img-six" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.6 }}
              className=" flex items-center justify-center partnership-card py-[15px]  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgSeven} alt="img-seven" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.7 }}
              className=" flex items-center justify-center partnership-card py-[15px]  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgEight} alt="img-eight" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={control}
              transition={{ type: "tween", duration: 0.7, delay: 0.7 }}
              className=" flex items-center justify-center partnership-card py-[15px]  rounded-[16px] px-10 w-[250px]"
            >
              <img src={imgNine} alt="img-nine" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
