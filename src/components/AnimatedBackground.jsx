import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(45deg, ${(props) => props.theme.primary}, ${(props) => props.theme.secondary});
  opacity: 0.1;
`;

const AnimatedBackground = () => {
  return (
    <BackgroundContainer
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default AnimatedBackground;