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
  justify-content: space-around;
  align-items: center;
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
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.6);
`;

function Root() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {clicked ? (
          <Circle layoutId="one" style={{ borderRadius: 25 }} />
        ) : null}
      </Box>
      <Box>
        {!clicked ? (
          <Circle layoutId="one" style={{ borderRadius: 0 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default Root;
