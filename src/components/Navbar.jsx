import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme.background};
    padding: 1rem;
    display: ${(props) => (props.$isOpen ? "flex" : "none")}; // Use transient prop
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <Nav>
      <h1>Ahmad's Portfolio</h1>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks $isOpen={isOpen}> {/* Use transient prop */}
        <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
        <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
        <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection("experience")}>Experience</NavLink>
        <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;