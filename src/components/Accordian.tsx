import { AnimatePresence, motion } from "framer-motion";

import { IconWrapper } from "./IconRapper";

export interface IAccordionProps {
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  accordionHeader?: React.ReactNode;
  accordionBody?: React.ReactNode;
  id?: number;
  headerExpandedClassName?: string;
  accordionFooter?: React.ReactNode;
  handleOpen: () => void;
  open: boolean;
  arrow?: boolean;
  arrowClassName?: string;
  icon?: string;
}

export const Accordion = ({
  className,
  headerClassName,
  bodyClassName,
  accordionHeader,
  accordionBody,
  headerExpandedClassName,
  id,
  accordionFooter,
  handleOpen,
  open,
  arrow = true,
  arrowClassName,
  icon,
}: IAccordionProps) => {
  return (
    <motion.div className={`w-full rounded-large relative ${className ?? ""}`}>
      <div
        role={"presentation"}
        className={`w-full flex items-center rounded-large relative pr-16 cursor-pointer
                ${headerClassName ?? ""} ${
          open ? headerExpandedClassName ?? "" : ""
        }`}
        onClick={handleOpen}
      >
        {accordionHeader}
        {arrow && (
          <IconWrapper
            className={`border-none !absolute right-0 top-1/2 -translate-y-1/2 ${
              open ? "rotate-180" : "rotate-0"
            } ease-in-out transition-all ${arrowClassName ?? ""}`}
            icon={icon ?? ""}
            alt={`${open ? "Collapse" : "Expand"}`}
          />
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={"accordion" + id}
            initial="collapsed"
            animate="details"
            exit="collapsed"
            variants={{
              details: { height: "auto" },
              collapsed: { height: 0 },
            }}
            className={`overflow-hidden rounded-b-large ${bodyClassName ?? ""}`}
          >
            {accordionBody}
          </motion.div>
        )}
      </AnimatePresence>
      {accordionFooter && <div>{accordionFooter}</div>}
    </motion.div>
  );
};

export default Accordion;
