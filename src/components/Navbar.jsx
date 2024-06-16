import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 2rem;
  background-color: var(--onyx);
  color: var(--anti-flash-white);

  @media (min-width: 1000px) {
    padding: 0.5rem 2rem;
  }
`;

const BrandLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  // outline: 3px solid gray;

  span {
    width: 25px;
    height: 2px;
    background-color: var(--anti-flash-white);
    margin: 4px 0;
    transition: transform 0.3s ease;
  }

  @media (min-width: 768px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(11px, 20px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, -5px);
    }
  `}
`;

const NavigationMenu = styled.nav`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 57px;
  right: 20px;
  left: 0;
  background-color: var(--gunmetal);
  padding-bottom: 1.2rem;
  width: 100%;
  text-align: center;
  z-index: 9999999;

  ul {
    display: inline;
    list-style: none;
  }

  @media (min-width: 768px) {
    position: static;
    display: flex;
    align-items: center;
    width: auto;
    background-color: transparent;
    padding: 0;
    text-align: right;

    ul {
      display: inline-flex;
    }
  }

  @media (min-width: 1920px) {
    padding: 2rem 2rem;
    font-size: 2rem;
  }
`;

const MenuLink = styled.li`
  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavigationLink = styled(Link)`
  display: block;
  color: var(--anti-flash-white);
  cursor: pointer;
  padding: 7px 2px;

  &:hover {
    color: var(--accent-color);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <BrandLogo>Tozo</BrandLogo>

      <Hamburger isOpen={isOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      {/* Todo Navigation Menu */}
      <NavigationMenu isOpen={isOpen}>
        <ul>
          <MenuLink>
            <NavigationLink
              to="about"
              smooth={true}
              duration={300}
              onClick={toggleMenu}
            >
              My Story
            </NavigationLink>
          </MenuLink>

          <MenuLink>
            <NavigationLink
              to="project"
              smooth={true}
              duration={300}
              onClick={toggleMenu}
            >
              My Creations
            </NavigationLink>
          </MenuLink>
          <MenuLink>
            <NavigationLink
              to="contact"
              smooth={true}
              duration={300}
              onClick={toggleMenu}
            >
              Collaborate
            </NavigationLink>
          </MenuLink>
        </ul>
      </NavigationMenu>
    </Header>
  );
};

export default Navbar;
