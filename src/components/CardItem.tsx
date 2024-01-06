import { useAnimationInView } from "../hooks/useAnimationInView";
import { motion } from "framer-motion";
import { MARKETING_DATA } from "../utils/mockData";

const CardItem = () => {
  const { control, animationRef } = useAnimationInView();
  return (
    <div className="section-two-bg h-full md:h-[400px] grid place-items-center relative pb-8">
      <div
        className="mt-10 md:mt-0 xxl:mt-5 md:flex md:gap-3 lg:gap-10 md:justify-between"
        ref={animationRef}
      >
        {MARKETING_DATA.map((item) => (
          <motion.div
            key={item.id}
            className="card-item lg:w-[250px] xxl:w-[300px] xxl:h-[300px] lg:h-[250px] flex flex-col justify-end items-center mb-4 "
            initial={{ opacity: 0, y: 80 }}
            animate={control}
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }}
          >
            <img src={item.imageUrl} alt={`${item.name}`} />
            <p className="paragraph mb-3">{item.name}</p>
            <div className="card-price-bg px-[18px] py-1 paragraph text-[20px] absolute top-[24px] right-[33px]">
              <span>11.2K</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
