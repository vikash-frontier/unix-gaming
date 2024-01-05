import { useAnimationInView } from "../hooks/useAnimationInView";
import { motion } from "framer-motion";
import { MARKETING_DATA } from "../utils/mockData";

const SectionTwo = () => {
  const { control, animationRef } = useAnimationInView();
  return (
    <div>
      <div className="section-two-bg"></div>
      <div
        className=" container mx-auto md:flex md:gap-3 md:justify-between"
        ref={animationRef}
      >
        {MARKETING_DATA.map((item) => (
          <motion.div
            key={item.id}
            className="card-item lg:w-[250px] lg:h-[250px] flex flex-col justify-center items-center mb-4 md:mb-0 -mt-10 "
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          >
            <img src={item.imageUrl} alt={`${item.name}`} />
            <p className="paragraph">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
