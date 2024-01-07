import { motion } from "framer-motion";
import {
  facebookIcon,
  instaIcon,
  logoBg,
  sectionFooter,
  whatsappIcon,
} from "../assets";
import { useAnimationInView } from "../hooks/useAnimationInView";

const Footer = () => {
  const { control, animationRef } = useAnimationInView();
  return (
    <footer className=" container mx-auto md:mt-[250px] mt-[150px]  flex flex-col justify-center items-center relative mb-[100px] md:mb-0">
      <img
        src={sectionFooter}
        alt=""
        className=" absolute -top-[650px] -left-[350px] -z-[100]"
      />

      <div className=" flex gap-[17px] items-center">
        <div className="relative w-[100px] h-[100px]" ref={animationRef}>
          <img src={logoBg} alt="logo" />
          <h2 className=" text-primary font-sans text-[50px] font-extrabold absolute top-4 right-8">
            U
          </h2>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          className="heading2 !leading-[50px]"
        >
          unix <br /> gaming
        </motion.h2>
      </div>

      <div className=" flex gap-[30px] mt-12 ">
        <motion.img
          src={whatsappIcon}
          alt="whatsapp"
          initial={{ opacity: 0, y: 80 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          className="social-icon py-[15px] px-[14px]"
        />
        <motion.img
          src={instaIcon}
          alt="instagram"
          initial={{ opacity: 0, y: 130 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
          className="social-icon py-[15px] px-[14px]"
        />
        <motion.img
          src={facebookIcon}
          alt="facebook"
          initial={{ opacity: 0, y: 180 }}
          animate={control}
          transition={{ type: "tween", duration: 0.7, delay: 0.4 }}
          className="social-icon py-[15px] px-[14px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
