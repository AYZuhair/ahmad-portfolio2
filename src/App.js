import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import AnimatedBackground from "./components/AnimatedBackground";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

function App() {
  // Set dark mode as the default state
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;