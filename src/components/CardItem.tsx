import { useAnimationInView } from "../hooks/useAnimationInView";
import { motion } from "framer-motion";
import { MARKETING_DATA } from "../utils/mockData";

const CardItem = () => {
  const { control, animationRef } = useAnimationInView();
  return (
    <div className="section-two-bg h-full md:h-[400px] grid place-items-center pb-8 ">
      <div
        className="flex flex-col mt-10 md:mt-0  md:flex-row  gap-16 text-secondary-100 xxl:gap-36"
        ref={animationRef}
      >
        {MARKETING_DATA.map((item) => (
          <motion.div
            key={item.id}
            className="card-item  w-[200px] h-[200px] lg:w-60 lg:h-60  rounded-[20px] flex justify-center items-center flex-col relative "
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          >
            <div className="card-price-bg py-1 paragraph text-[16px] absolute  right-5 md:right-8 top-4 md:top-2 w-16 text-center lg:top-4">
              <span>11.2K</span>
            </div>
            <img
              src={item.imageUrl}
              alt={`${item.name}`}
              className="h-20 w-24 md:h-32 mt-5 md:w-40"
            />
            <p className="paragraph lg:mt-4 text-[20px]  lg:text-3xl ">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
