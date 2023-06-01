import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  align-self: flex-start;
  color: #fff;
  font-size: 20px;
  padding-top: 10px;

  @media (max-width: 768px) {
    display: none;
    padding: 20px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;

    ${({ isOpen }) => !isOpen && `display: none;`}
  }
`;

const NavItem = styled.li`
  margin-left: 10px;


  a {
    text-decoration: none;
    color: #fff;
    padding: 5px;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 40px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 4px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
    align-self: flex-end;
    margin-top: 10px;
    margin-right: 1.5rem;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Logo>Tozo</Logo>
      <MenuIcon isOpen={isOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/about">About</a>
        </NavItem>
        <NavItem>
          <a href="/project">Projects</a>
        </NavItem>
        <NavItem>
          <a href="/contact">Contact</a>
        </NavItem>
      </NavMenu>
    </Navbar>
  );
};

export default ResponsiveNavbar;
