import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Story Generator",
      description:
        "Developed an AI-powered story generator with dynamic image integration for Devan & Company.",
    },
    {
      title: "Inventory Management System",
      description:
        "Designed a real-time inventory tracker with a secure login system and intuitive interface.",
    },
    {
      title: "Shopping Application",
      description:
        "Built a dynamic shopping cart system with secure payment processing and user-friendly interfaces.",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;