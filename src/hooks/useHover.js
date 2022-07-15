import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const enter = () => {
    setHovered(true);
  };
  const leave = () => {
    setHovered(false);
  };

  // the ref.current will represent the DOM node, which is where you can
  // * do imperative commands like `.addEventListener` and `removeEventListener`
  useEffect(() => {
    const instance = ref.current;

    instance.addEventListener("mouseenter", enter);
    instance.addEventListener("mouseleave", leave);

    return () => {
      instance.removeEventListener("mouseenter", enter);
      instance.removeEventListener("mouseleave", leave);
    };
  }, [ref]);

  return [hovered, ref];
};

export default useHover;
