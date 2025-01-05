import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const IconLink = styled.a`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Ahmad Yalzuhair
        </Title>
        <Subtitle>Junior AI Ops Engineer | Innovator | Problem Solver</Subtitle>
        <SocialIcons>
          <IconLink href="https://www.linkedin.com/in/a-zuhair" target="_blank">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/ahmadyalzuhair" target="_blank">
            <FaGithub />
          </IconLink>
        </SocialIcons>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;