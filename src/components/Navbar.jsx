import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} 0;
  background-color: inherit;
  flex-direction: row-reverse;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  position: relative;

  @media (min-width: 1000px) {
    padding: 0;
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
  // flex-direction: column-reverse;

  span {
    width: 25px;
    height: 2px;
    background-color: var(--anti-flash-white);
    margin: 0.25rem 0;
    transition: transform 0.3s ease;
    z-index: 990;
  }

  span:nth-child(2) {
    width: 15px;
    // align-self: flex-end;
  }

  span:nth-child(3) {
    width: 19px;
    // align-self: flex-end;
  }

  @media (min-width: 768px) {
    display: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    span {
      opacity: 0;
      display: none;
    }

  `}
`;

const NavigationMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.spacecadet};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  width: 70%;
  height: 100%;
  z-index: 99;
  overflow: auto;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0 ${({ theme }) => theme.spacing.medium};
    height: 100%;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.large};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (min-width: 768px) {
    position: relative;
    align-items: center;
    width: auto;
    background-color: transparent;
    padding: 0;
    display: contents;

    ul {
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing.large};
      padding: 0;
    }

    .close-btn {
      display: none;
    }
  }

  @media (min-width: 1920px) {
    padding:  ${({ theme }) => theme.fontSizes.large};
    font-size:  ${({ theme }) => theme.fontSizes.large};
  }
`;

const MenuLink = styled.li`
  margin: ${({ theme }) => theme.spacing.small} 0;
  color: ${({ theme }) => theme.colors.white};
`;

const NavigationLink = styled(Link)`
  display: block;
  color: var(--anti-flash-white);
  cursor: pointer;
  padding: 7px 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
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
          <button className="close-btn" onClick={() => toggleMenu(false)}>
            ✖
          </button>

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
