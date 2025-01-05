import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: ${(props) => props.theme.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Experience = () => {
  const experiences = [
    {
      title: "Junior AI Ops Engineer - Devan & Company",
      description:
        "Developed AI-powered tools, fine-tuned ML models, and contributed to project management apps.",
    },
    {
      title: "Technical Assistant - Asia Pacific University",
      description:
        "Provided technical support, maintained lab equipment, and assisted in hardware troubleshooting.",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceTitle>{experience.title}</ExperienceTitle>
            <ExperienceDescription>{experience.description}</ExperienceDescription>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;