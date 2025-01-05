import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EducationSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const EducationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: ${(props) => props.theme.cardBackground};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EducationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const Education = () => {
  const educations = [
    {
      title: "Bachelor’s of Computer Engineering - De Montfort University",
      description: "Graduated with a focus on AI, circuit design, and software development.",
    },
    {
      title: "High School Diploma - Madînat Al Oloum",
      description: "Completed high school with a focus on science and mathematics.",
    },
  ];

  return (
    <EducationSection id="education">
      <EducationContainer>
        {educations.map((education, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <EducationTitle>{education.title}</EducationTitle>
            <EducationDescription>{education.description}</EducationDescription>
          </EducationCard>
        ))}
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;