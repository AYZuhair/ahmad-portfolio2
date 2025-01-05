import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiC, SiIonic } from "react-icons/si";

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${(props) => props.theme.background};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Skills = () => {
  const skills = [
    {
      icon: <FaPython />,
      title: "Python",
      description: "Proficient in Python for AI, data analysis, and automation.",
    },
    {
      icon: <FaJava />,
      title: "Java",
      description: "Experienced in Java for backend development and Android apps.",
    },
    {
      icon: <FaReact />,
      title: "React.js",
      description: "Skilled in building dynamic and responsive web applications using React.",
    },
    {
      icon: <FaAngular />,
      title: "Angular",
      description: "Proficient in Angular for building scalable web applications.",
    },
    {
      icon: <SiIonic />,
      title: "Ionic",
      description: "Experienced in building cross-platform mobile apps with Ionic.",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML",
      description: "Expert in creating structured and semantic web pages.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      description: "Skilled in styling and designing responsive web interfaces.",
    },
    {
      icon: <SiC />,
      title: "C",
      description: "Proficient in C for system programming and embedded systems.",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Experienced in building server-side applications with Node.js.",
    },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;