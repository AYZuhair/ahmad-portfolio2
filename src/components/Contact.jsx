import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primary};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactForm
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" rows="5" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;