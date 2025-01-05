import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.png"; // Corrected import

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${(props) => props.theme.primary};
`;

const AboutText = styled(motion.div)`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <ProfileImage
          src={profileImage}
          alt="Ahmad Yalzuhair"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <AboutText
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <AboutDescription>
            I am a dedicated Junior AI Ops Engineer with a passion for developing
            AI-powered solutions and optimizing workflows. With a strong
            background in circuit design, programming, and project management, I
            thrive on solving complex problems and delivering impactful results.
            Fluent in both English and Arabic, I bring a unique perspective to
            every project I undertake.
          </AboutDescription>
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;