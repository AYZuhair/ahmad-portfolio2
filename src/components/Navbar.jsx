import styled from "styled-components";
import { Link } from "react-scroll";
import React, { useState } from "react";
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
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const NavLink = styled(Link)`
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

  return (
    <Nav>
      <h1>Ahmad's Portfolio</h1>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500}>
          Skills
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
        <NavLink to="experience" smooth={true} duration={500}>
          Experience
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;