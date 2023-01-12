import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: pink;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const boxVar: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
  leaving: {
    opacity: 0,
    scale: 0,
  },
};

function Root() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVar}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={onClick}>click me!</button>
    </Wrapper>
  );
}

export default Root;
