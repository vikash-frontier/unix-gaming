import { FC, useState } from "react";
import { leftIcon } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

interface IGamersItemProps {
  id: number;
  name: string;
  content: string[];
}

const GamersItem: FC<IGamersItemProps> = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border-y-[1px] border-primary/20  py-4 "
      onClick={() => handleOpen()}
    >
      <div className="flex gap-8 items-center cursor-pointer">
        <div
          className={`${
            isOpen ? "rotate-90" : "rotate-0"
          } ease-in-out transition-all`}
        >
          <img src={leftIcon} alt={`${isOpen ? "Collapse" : "Expand"}`} />
        </div>
        <span className="paragraph">{name}</span>
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
            className={`overflow-hidden paragraph text-[20px] `}
          >
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamersItem;
