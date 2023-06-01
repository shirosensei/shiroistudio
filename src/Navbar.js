import React, { useState, useEffect } from 'react';

import { Logo, Header, NavbarContainer, NavItem, ToggleButton, Line  } from './Navbar.jsx'
const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <Header>
      <Logo>
          Tozo Sensei
        </Logo>

        <ToggleButton onClick={toggleMenu}>
        <Line isOpen={isOpen} />
         </ToggleButton>
        <NavbarContainer isOpen={isOpen ? 'open' : ''}>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">Contact</NavItem>
     </NavbarContainer>
     </Header>
  )
}

 
export default Navbar
