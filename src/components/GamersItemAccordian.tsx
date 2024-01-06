import { FC, useState } from "react";
import { leftIcon } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

interface IGamersItemProps {
  id: number;
  name: string;
  content: string;
}

const GamersItemAccordian: FC<IGamersItemProps> = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={``}>
      <div
        className={`flex gap-8 items-center cursor-pointer md:py-[18px] py-[10px] pl-4 ${
          isOpen
            ? "plateform-dropdown flex gap-6  cursor-pointer mb-5"
            : "border-y-[1px] border-primary/20"
        }`}
        onClick={() => handleOpen()}
      >
        <div
          className={`${
            isOpen ? "rotate-90" : "rotate-0"
          } ease-in-out transition-all`}
        >
          <img src={leftIcon} alt={`${isOpen ? "Collapse" : "Expand"}`} />
        </div>
        <span className={`paragraph text-[30.059px] font-medium `}>{name}</span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={"accordion" + name}
            initial="collapsed"
            animate="details"
            exit="collapsed"
            variants={{
              details: { height: "auto" },
              collapsed: { height: 0 },
            }}
          >
            <p className="paragraph text-[25.049px] overflow-hidden pb-4">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamersItemAccordian;
