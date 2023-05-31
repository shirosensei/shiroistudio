
import { Logo, Header, NavbarContainer, NavItem  } from './Navbar.jsx'
const Navbar = () => {

  return (
      <Header>
      <Logo>
          Tozo Sensei
        </Logo>

        <NavbarContainer>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">Contact</NavItem>
     </NavbarContainer>
     </Header>
  )
}

 
export default Navbar
