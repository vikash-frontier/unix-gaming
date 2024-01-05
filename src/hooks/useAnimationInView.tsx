import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useAnimationInView = () => {
  const control = useAnimation();

  const animationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(animationRef);

  useEffect(() => {
    if (isInView) {
      control.start({ x: 0, y: 0, opacity: 1 });
    }
  }, [control, isInView]);
  return { animationRef, control };
};

export { useAnimationInView };
