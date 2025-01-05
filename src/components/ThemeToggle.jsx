import React from "react";
import styled from "styled-components";
import Switch from "react-switch";

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <ToggleContainer>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        onColor="#bb86fc"
        offColor="#6200ea"
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;