import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <ToggleContainer>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        onColor="#bb86fc"
        offColor="#6200ea"
        uncheckedIcon={
          <IconContainer>
            <FaSun color="#fff" />
          </IconContainer>
        }
        checkedIcon={
          <IconContainer>
            <FaMoon color="#fff" />
          </IconContainer>
        }
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;